# Prueba Técnica - Frontend

Este proyecto es el frontend para la prueba técnica de Infodesign. Está construido con React y Vite.

## Características

- Visualización de datos históricos relacionados con el consumo, costos y pérdidas en diferentes tramos.
- Gráficos interactivos para representar y comparar datos.
- Selección de fechas para filtrar datos históricos.

## Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd [NOMBRE_DEL_DIRECTORIO]
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**

   Copia el archivo `.env.example` a un nuevo archivo llamado `.env` y configura las variables según tu entorno.

   ```bash
   cp .env.example .env
   ```

4. **Ejecutar en modo desarrollo:**

   ```bash
   npm run dev
   ```

   Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado.

5. **Construir para producción:**

   ```bash
   npm run build
   ```

   Esto generará una versión optimizada de la aplicación en el directorio `dist`.

---

7. **Repositorio del backend:**

   El frontend se comunica con un servidor backend para obtener y manipular datos. Puedes encontrar el código fuente y más detalles del backend en el siguiente repositorio: [pruebainfodesignbackend](https://github.com/Jony1754/pruebainfodesignbackend).

8. **Despliegue**

   Una version en vivo se puede probar sin necesidad de instalar nada en el siguiente enlace: [pruebainfodesignfrontend](https://pruebainfodesignfrontend-ncs0ch7kz-jony1754.vercel.app/).
