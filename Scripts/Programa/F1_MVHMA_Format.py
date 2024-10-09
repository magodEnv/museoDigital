import pandas as pd
from Validaciones import carga_excel, guarda_excel

# Leer el archivo Excel
path_carpeta = r'C:\Users\victo\OneDrive\Escritorio\Colecciones Desk\Scripts'
path_excel = path_carpeta + r'\test MVHMA.xlsx' # Archivo excel de entrada
path_excel_salida= path_carpeta + r'\datos_procesados.xlsx' # Archivo salida

df = carga_excel(path_excel) # DataFrame que recibe el excel en bruto del formulario

# Concatena columnas respectivas
for index, row in df.iterrows(): # Iterar sobre cada fila

    ubi="" # Contendra la ultima ubicacion
    ubi_concat="" # Contendra el seguimiento jerarquico de la ubicacion

    col_num=0; # Contador de columnas
    for col_name in df.columns: # Iterar sobre cada columna en la fila
        if pd.notna(row[col_name]): # Verifica que el valor no sea Nan, para no agregarlo
            if col_num>=21: # De la columna 39 hasta la 205, para seguir la clasificacion
                ubi=str(row[col_name])
                ubi_concat+=ubi+ ">"
        col_num+=1
            
    # Convierte la celda a string
    df[df.columns[21]] = df[df.columns[21]].astype(str) 
    df[df.columns[22]] = df[df.columns[22]].astype(str)

    # Guarda ultimo valor de ubicacion
    df.at[index, df.columns[21]]=ubi.strip() 

    # Guarda concatenacion jerarquica de ubicacion
    df.at[index, df.columns[22]]=ubi_concat[:-1].strip()  # elimina el ultimo ">"

# Cambia el nombre de las columnas
df.rename(columns={'Piso / Nivel del Edificio\n': 'Ubicacion'}, inplace=True)
df.rename(columns={'Recintos Primer Piso\n': 'Ubicacion completa'}, inplace=True)

# Crea un nuevo dataFrame temporal con las columnas acotadas y formateadas
df_format = df.iloc[:, 0:23] # Elimina filas sobrantes
df_format.insert(10, 'ID UBICACION', pd.NA) # Agrega nueva columna

# Guardar el DataFrame en el archivo
guarda_excel(df_format, path_excel_salida)