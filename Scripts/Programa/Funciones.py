# Funciones.py
# Contiene funciones varias
# Principalmente enfocadas en el tratamiento del diccionario y cadenas de texto

import unicodedata
# Transforma a minusculas las claves de un diccionario
def lowerCase(diccionario):
  nuevo_diccionario = {}
  for clave, valor in diccionario.items():
      clave = eliminar_tildes(clave).lower()
      if isinstance(valor, dict):
        valor = lowerCase(valor)  # Recursivamente transformar subdiccionarios
      nuevo_diccionario[clave.lower()] = valor
  return nuevo_diccionario

def eliminar_tildes(texto):
  # Normalizar el texto a la forma de composición de Unicode (NFD)
  texto_normalizado = unicodedata.normalize('NFD', texto)
  # Filtrar y unir solo los caracteres que no son marcas de acento
  texto_sin_tildes = ''.join(c for c in texto_normalizado if not unicodedata.combining(c))
  return texto_sin_tildes

# Eliminar el último punto de la cadena
def eliminar_punto(texto):
  if texto.endswith("."):
    return texto[:-1]
  else:
    return texto

print
def obtener_id(diccionario, lista_claves, caso_SPECTRUM, esRecursivo):
  rutasClasificaciones = ''
  report = False
  valor = diccionario
  clasificaciones = []
  # Separar las clasificaciones por ';' y convertir a minúsculas
  for clave in lista_claves:
    clasificaciones.extend([eliminar_tildes(c.strip()).lower() for c in clave.split(';')])

  if caso_SPECTRUM:
    for clave in clasificaciones:
      clave = eliminar_punto(clave)
      if clave in valor:
        valor = valor[clave]
        if isinstance(valor, str):
          return valor, report
      else:
        valor = valor.get('otras', 'error')
        return valor, report
  else:
    for clave in clasificaciones:
      clave = eliminar_punto(clave)
      if clave == "musica":
        clave = "musica2"
      elif clave == "numismatica":
        clave = "numismatica2"
      if clave in valor:
        valor = valor[clave]
        if isinstance(valor, str):  # si es string entonces guarda el valor
          rutasClasificaciones += valor + ';'
        elif clave == 'nan':  # Si es nan entonces es error
          if esRecursivo:
            report = True
            return 'error1', report  # ERROR 1 SI EL VALOR ES NAN
          rutasClasificaciones += 'error1;'
      elif clave in diccionario:
        esRecursivo = True
        nuevaClasi = clasificaciones[clasificaciones.index(clave):]
        seeker = obtener_id(diccionario, nuevaClasi, False, esRecursivo)
        rutasClasificaciones += seeker[0]
      else:  
        #Clave no está en el diccionario
        # Si es nan entonces es error
        if clave == 'nan':
          if esRecursivo:
            report = True
            return 'error1', report  # ERROR 1 SI EL VALOR ES NAN
          else:
            rutasClasificaciones += 'error1;'  # ERROR 1 SI EL VALOR ES NAN
        else: # Si no es nan entonces es error None, se soluciona con un break.
            break

  rutasClasi = rutasClasificaciones.strip(';')
  if not caso_SPECTRUM:
    if isinstance(valor, dict):
      report = True
      return 'error0', report  # ERROR 0 SI EL VALOR ES DICCIONARIO
    elif valor == 'nan':
      report = True
      return 'error1', report  # ERROR 1 SI EL VALOR ES NAN
    elif isinstance(valor, str): return rutasClasi, report

  #CASO SPECTRUM
  elif isinstance(valor, str): return valor, report # Si es SPECTRUM y es string entonces es un valor
  else: return 'error', report