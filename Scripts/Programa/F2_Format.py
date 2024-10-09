# IMPORTA F2
# Junta columnas separadas (SEPCTRUM Y CLASIFICACION)
# Retorna excel con IDs respectivas y ruta de seguimiento
# Retorna excel reporte

import pandas as pd
from Funciones import obtener_id
from Validaciones import carga_excel, guarda_excel, carga_JSON
from Reportes import Reportes_F2
# Rutas
path_carpeta = r'C:\Users\magod\OneDrive\Escritorio\Museo\Scripts'
path_excel = path_carpeta + r'\F2.xlsx' # Archivo excel
path_clasificacion = path_carpeta + r'\json\Clasificacion.json' # JSON Clasificacion
path_spectrum = path_carpeta + r'\json\Spectrum.json' # JSON Spectrum
path_excel_salida= path_carpeta + r'\datos_procesados.xlsx' # Archivo salida

# Carga de archivos
datos_clasificacion = carga_JSON(path_clasificacion) # Recibe JSON de mapa de ID clasificacion
datos_spectrum = carga_JSON(path_spectrum) # Recibe JSON de mapa de ID SPECTRUM  
df = carga_excel(path_excel) # DataFrame que recibe el excel en bruto del formulario

def busca_hijos(columns,clasificacion,):
    #Recursivo: si una clasificacion no tiene column existente, entonces es hijo y se avanza en el for.
     #lista las columnas existentes.
    ruta=""
    if(clasificacion in columns):
        ruta=busca_hijos(columns,row[clasificacion])
        return str(clasificacion)+'>'+str(ruta)
    elif (clasificacion == "Música"):
        #print("Música existe en las columnas aunque tiene error")#, end=" ")
        parcheMusica="Música2"
        #print(row)
        ruta=busca_hijos(columns,row[parcheMusica])
        return str(parcheMusica)+'>'+str(ruta)
    elif (clasificacion == "Numismática"):
        #print("Numismática existe en las columnas aunque tiene error (Numismática)", end=" ")
        parcheNumis="Numismática2"
        ruta=busca_hijos(columns,row[parcheNumis])
        return str(parcheNumis)+'>'+str(ruta)
    else:
        return clasificacion

# Concatena columnas respectivas
for index, row in df.iterrows(): # Iterar sobre cada fila
    
    tipo="" # Contendra el ultimo tipo del SPECTRUM
    tipo_concat="" # Contendra el seguimiento jerarquico del SEPCTRUM
    clasi="" # Contendra la ultima clasificacion
    clasi_concat="" # Contendra el seguimiento jerarquico de la clasificacion
    #print(row["Clasificación del objeto"])
    clasificacion = row["Clasificación del objeto"].split(">")

    col_num=0; # Contador de columnas
    for col_name in df.columns: # Iterar sobre cada columna en la fila
        if pd.notna(row[col_name]): # Verifica que el valor no sea Nan, para no agregarlo
            if col_num>=8 and col_num<=35: # de la columna 8 hasta la 36, para seguir SPECTRUM
                tipo=str(row[col_name])
                tipo_concat+=tipo+ ">"
        col_num+=1
    col=list(df.columns)
    clasi=clasificacion[0]
    colClas=[]
    for i in range (36,len(col)):
        colClas.append(col[i]) #excel desde el 37 en adelante.
    clasi=clasi[:-1]
    clasi=clasi.split(';') #separamos cuantas clasificaciones tiene un objeto
    #print(clasi)

    rutas=[]
    for i in range (len(clasi)):
        seeker = busca_hijos(colClas,clasi[i]) #Buscador encuentra hijos
        rutas.append(seeker)
    if len(rutas)==1:
        clasi_concat=rutas[0]
    else:
        for i in range (len(rutas)):
            if i==(len(rutas)-1):
                clasi_concat=clasi_concat+";"+rutas[i]
            else: clasi_concat=clasi_concat+rutas[i]
    
    # Convierte el tipo de celdas a string
    df[df.columns[8]] = df[df.columns[8]].astype(str)
    df[df.columns[9]] = df[df.columns[9]].astype(str)
    df[df.columns[10]] = df[df.columns[10]].astype(str)
    df[df.columns[11]] = df[df.columns[11]].astype(str)

    # Guarda ultimo valor de tipo y clasificacion de objeto
    #print("tipo:",tipo,"\t\t","clasificacion:", clasi)
    df.at[index, df.columns[8]]=tipo.strip()
    df.at[index, df.columns[10]]=clasi

    # Guarda concatenacion jerarquica de clasificacion y tipo objeto
    df.at[index, df.columns[9]]=tipo_concat[:-1].strip()  # elimina el ultimo ">"
    df.at[index, df.columns[11]]=clasi_concat

# Cambia el nombre de las columnas

df.rename(columns={'Es del tipo:\n': 'Tipo'}, inplace=True)
df.rename(columns={'Cultural': 'Tipo completo'}, inplace=True)
df.rename(columns={'Natural': 'Clasificacion'}, inplace=True)
df.rename(columns={'Antropología': 'Clasificacion completa'}, inplace=True)
#print(df.columns(row.index[11]))
#print("Columna cambiada a:",df.columns[11])

# Crea un nuevo dataFrame temporal con las columnas acotadas y formateadas
df_format = df.iloc[:, 0:12]
df_format.insert(9, 'ID SPECTRUM', pd.NA) # Agrega nueva columna
df_format.insert(12, 'ID Clasificacion', pd.NA) # Agrega nueva columna

index_a_eliminar=[]
index_errores=[]
# Obtiene la id para cada columna de Clasificacion
for index, row in df_format.iterrows():  # Iterar sobre cada fila
    # Splitea la ruta, obteniendo una array de la ruta
    key_spect = row["Tipo completo"].split('>')  # Tipo completo x objeto
    key_clasi = row["Clasificacion completa"].split('>')  # Clasificacion completa
    
    # Obtengo la ID y booleano de error
    esRecursivo = False
    errorSpect = obtener_id(datos_spectrum, key_spect, True, esRecursivo)
    errorClasi = obtener_id(datos_clasificacion, key_clasi, False, esRecursivo)
    
    # Como pueden ser más de 1 clasificación, el envío del errorClasi[0] es algo como "C2;"
    idS = errorSpect[0]
    idC = errorClasi[0]
    aux = []
    
    # SOLO CLASIFICACION PUEDE TENER 1 O MAS CLASIFICACIONES
    # VALIDAR SI ES MAS DE 1 CLASIFICACION
    if ';' in errorClasi[0]:
        aux = errorClasi[0].split(';')
    for run in aux:
        if run in ['error', 'error0', 'error1', 'error2']:
            errorClasi = (errorClasi[0], True)  # Reemplaza el segundo valor por True 
    # Asignar IDs
    df_format.at[index, "ID SPECTRUM"] = idS
    df_format.at[index, "ID Clasificacion"] = idC
    
    if errorSpect[1] or errorClasi[1]:
        index_errores.append(index)


# Pasa un DataFrame con todos los errores de clasificacion y SPECTRUM, a partir de sus indices
Reportes_F2(df_format.loc[index_errores].reset_index(drop=True))

# Elimina todos los errores de datos_procesados
df_format = df_format.drop(index_errores)

# Guardar el DataFrame en el archivo
guarda_excel(df_format,path_excel_salida)

