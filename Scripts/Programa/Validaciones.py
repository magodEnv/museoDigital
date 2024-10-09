# Validaciones.py
# Contiene funciones para validar cargas y guardados
# de excels y JSON

import pandas as pd
import json
import sys
from Funciones import lowerCase

def valida_JSON(datos):
  # Verificar si el JSON está vacío
  if not datos:
    raise ValueError("El JSON está vacío.")

  # Verificar si todas las claves son únicas
  if len(datos) != len(set(datos.keys())):
    raise ValueError("El JSON contiene claves duplicadas.")

  print("El JSON es válido.")
  return True

def carga_excel(path):
  try:
    # Verificar si el archivo tiene extensión .xlsx o .xls
    if not (path.endswith('.xlsx') or path.endswith('.xls')):
        raise ValueError("El archivo no tiene una extensión .xlsx o .xls")

    df = pd.read_excel(path)
    print("Archivo xslx leído correctamente.")
    return df

  except PermissionError:  # Caso archivo abierto o falta de permisos
      print(f"Error: Asegúrate de que '{path}' no esté abierto y que tienes permisos para usarlo.")
  except FileNotFoundError:  # Caso no se encuentra
      print(f"Error: El archivo '{path}' no se encuentra.")
  except pd.errors.EmptyDataError:  # Caso archivo vacío
      print(f"Error: El archivo '{path}' está vacío.")
  except ValueError as ve:  # Caso extensión no válida
      print(f"Error: {ve}")
  except Exception as e:  # Excepciones generales
      print(f"Se ha producido un error inesperado: {e}")
      sys.exit(1)

def carga_JSON(path):
  try:
    # Verificar si el archivo tiene extensión .json
    if not path.endswith('.json'):
        raise ValueError("El archivo no tiene una extensión .json")

    # Leer archivos JSON
    with open(path, 'r', encoding='utf-8') as archivo:
        datos = json.load(archivo)
        datos = lowerCase(datos)  # Convertir claves a minúsculas si es necesario

    print("Archivo JSON leído correctamente.")
    return datos

  except FileNotFoundError:
      print(f"Error: El archivo '{path}' no se encuentra.")
  except json.JSONDecodeError:
      print(f"Error: El archivo '{path}' no es un JSON válido o está corrupto.")
  except ValueError as ve:
      print(f"Error: {ve}")
  except Exception as e:
      print(f"Se ha producido un error con JSON: {e}")
      sys.exit(1)

def guarda_excel(df, path):
  try:
    df.to_excel(path, index=False)
    print("Archivo xslx guardado correctamente.")
  except PermissionError:
    print(f"El archivo Excel 'datos_procesados' está abierto. Porfavor cierralo e intenta nuevamente.")
  except FileNotFoundError:
    print(f"Error: El directorio para guardar el archivo '{path}' no se encuentra.")
  except IsADirectoryError:
    print(f"Error: '{path}' es un directorio, no un archivo.")
  except Exception as e:
    print(f"Se ha producido un error al guardar el archivo: {e}")