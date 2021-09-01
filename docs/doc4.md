---
id: doc4
title: Casos de soporte más comunes
---

Para tratar los casos de errores y poder llevar un seguimiento de ellos para poder resolverlos debemos hacer lo siguiente:

## Instalación del Software de Gestión Odontológica

### 1. Primer paso

Descargar los archivos: **Varios.rar, Sistema.rar y Clientes SQL**(\*)

| Archivos                  |                                   Descarga                                    |
| ------------------------- | :---------------------------------------------------------------------------: |
| Varios.rar                | [Aquí](https://bilog.com.ar/clientes/public_html/DescargarPartes/Varios.rar)  |
| Sistema.rar               | [Aquí](https://bilog.com.ar/clientes/public_html/DescargarPartes/Sistema.rar) |
| Clientes SQL 32 bits (\*) |     [Aquí](https://bilog.com.ar/clientesSQL/2005/32/sqlncli_2005_32.msi)      |
| Clientes SQL 64 bits (\*) |     [Aquí](https://bilog.com.ar/clientesSQL/2005/64/sqlncli_2005_64.msi)      |

:::warning

(\*) Este archivo depende de la condición del cliente. Esto se diferencia buscando al cliente en el sistema interno de Bilog, puede que tenga la base local (en Access) o SQL.

:::

En caso de no poder bajarlos desde los atajos, dirigirse a la pagina de [descarga de archivos](https://www.bilog.com.ar/descarga.html) y descargar los archivos: **Varios.rar, Sistema.rar y Clientes SQL**(\*)

### 2. Segundo paso

#### Si tiene base en la nube (SQL)

Si tiene la base en la nube se le instala CLientes Sql considerando la arquitectura de la pc (32 o 64 bits).

#### Si tiene base local (Access)

Si el usuario no tiene base en la nube y usa base local en Access, no se instala Clientes Sql.

:::caution

El usuario puede tener armado una red cliente-servidor. En este caso se comparte la carpeta GO4 y se conecta las otra pc cliente al servidor.

:::

### 3. Tercer paso

Descomprimir **Varios.rar** e instalar los archivos **Cristal reports** y **vbpowepacks**. Llegado a este punto los crystals se van a instalar solo los que son x86 ignorando los demas.

### 4. Cuarto paso

Descomprimir **Sistema.rar** e instalar el setup.

:::warning

En caso de un error al ejecutar vbpowerpacks, descomprimirlo y ejecutar vb_powerpacks.

:::

### 5. Quinto paso

Por útlimo, lo único que queda es consultar con el usuario para cuando le gustaría **agendar una capacitación**. Coordinar día y horario para luego cargarlo en el calendar de capacitaciones.

---

## Ruptura de la base de datos

### 1. Primer paso

Ingresar a la PC servidor, en caso de que lo haya, y buscar en la carpeta `/GO4`, el archivo `odontologia.mdb` y abrirlo.

### 2. Segundo paso

Cuando querramos abrir la base de datos nos va a pedir la contraseña que tenemos en el **google doc en el Drive de Soporte**.

![Bases_1](/img/bases_1.png)

#### Alternativa

Si el usuario no tiene instalado Access, tenemos que traer la base de datos a nuestra PC utilizando el TeamViewer y repararla, luego esa base ya reparada se la pasa a la PC del usuario.

### 3. Tercer paso

Una vez que abrimos la base de datos, debemos buscar la opción **Compactar y reparar base de datos**.

![Bases_2](/img/bases_2.png)

---

## Error de concurrencia

Los errores de concurrencia son raros, cuando ocurre un error de concurrencia en cualquiera de nuestros Softwares **debemos sugerir al usuario que cierre y vuelva a abrir la aplicación**.

![Concurrencia_1](/img/concurrencia_1.png)

---

## Error cuando se genera el archivo para liquidar a OSDE

Efectivamente como lo describe la ventana del error, esto ocurre cuando el compresor no puede comprimir los archivos `o_prof.dbf` y `o_prof.cdx`.

![OSDE_1](/img/liquidar_osde.png)

#### Como resolverlo

La solución de este bug pueden ser varias:

1. Primero tenemos que revisar si el usuario tiene los permisos necesarios para acceder a la carpeta donde se está tratando de comprimir los archivos (generalmente es la misma en la que está el software, `GO4`).

2. Puede ser que el archivo compresor no esté en la carpeta, para eso tenemos que corroborar que el archivo `7za.exe` está presente en la carpeta del software.

3. También puede ser que el antivirus o firewall del sistema operativo esté bloqueando la ejecución del compresor. Para eso tenemos que probar desactivar **por un momento** el antivirus y tratar de volver a realizar la liquidación. Si esto funciona, **debemos volver a activar el antivirus y excluir el archivo desde el antivirus**.

---

## Error en Auditor Bilog

Cuando tengamos un error en el Auditor de Bilog, lo primero que tenemos que corroborar es la configuración regional ya que es un factor crítico para el funcionamiento correcto del software.

![auditor_1](/img/auditor_1.png)
