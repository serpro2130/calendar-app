# Calendar App
## Descripción
Esta es una aplicación de calendario desarrollada en React que permite a los usuarios agregar y editar recordatorios con un máximo de 30 caracteres para una fecha y hora especificadas, junto con una ciudad. La aplicación también obtiene el pronóstico del clima para la fecha del recordatorio basado en la ciudad, utilizando la API de VisualCrossing.
## Características
- Agregar recordatorios con texto (máximo 30 caracteres), ciudad, fecha y hora.
- Editar recordatorios existentes.
- Obtener el pronóstico del clima para la fecha del recordatorio basado en la ciudad.
- Navegar entre meses y años.
- Manejar adecuadamente el desbordamiento cuando aparecen múltiples recordatorios en la misma fecha.
## Tecnologías Utilizadas
- React
- Context API para la gestión del estado
- Axios para llamadas a la API
- VisualCrossing API para el clima
- CSS para el estilo
- Vite para la configuración del proyecto
## Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/calendar-app.git
   cd calendar-app
