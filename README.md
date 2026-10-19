# 🌕 Calendario 13 Lunas (28 Días)

Un proyecto web desarrollado con **React**, **Vite** y **Tailwind CSS** para visualizar y convertir fechas del calendario gregoriano al calendario lunar de 13 meses de 28 días.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React + Vite
- **Estilos:** Tailwind CSS v4
- **Lenguaje:** JavaScript (ES6+)

- ### Paso 1: Lógica de Conversión Matemática (`src/utils/lunarCalendar.js`)
- [x] Definición de arreglos de nombres para las 13 Lunas y días de la semana lunar.
- [x] Creación de la función `obtenerFechaLunar()` para sincronizar el calendario gregoriano con el ciclo de 28 días (inicio 26 de Julio).
- [x] Lógica para manejar el **Día Fuera del Tiempo** (25 de Julio / día 365).
- [x] Cálculo del número de luna (1 al 13), día del mes (1 al 28), día de la semana lunar (1 al 7) y número de semana.
