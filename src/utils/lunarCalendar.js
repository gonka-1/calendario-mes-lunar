/**
 * Configuración y datos del Calendario de 13 Lunas
 */
export const NOMBRES_LUNAS = [
  "Primera Luna",
  "Segunda Luna",
  "Tercera Luna",
  "Cuarta Luna",
  "Quinta Luna",
  "Sexta Luna",
  "Septima Luna",
  "Octava Luna",
  "Novena Luna",
  "Decima Luna",
  "Decima Primera Luna",
  "Decima Segunda Luna",
  "Decima Tercera Luna"
];

export const DIAS_SEMANA_LUNAR = [
  "Lunes", "Martes", "Miércoles", "Jueves","Viernes", "Sábado", "Domingo"
];

/**
 * Convierte una fecha gregoriana al equivalente en el Calendario de 13 Lunas.
 * Por defecto toma como punto de inicio el 26 de Julio del año actual.
 * 
 * @param {Date} fechaGregoriana 
 * @returns {Object} Datos de la fecha lunar
 */
export function obtenerFechaLunar(fechaGregoriana = new Date()) {
  const añoGregoriano = fechaGregoriana.getFullYear();
  
  // El año nuevo de 13 Lunas inicia convencionalmente el 26 de Julio
  let inicioCiclo = new Date(añoGregoriano, 6, 26); // Mes 6 en JS es Julio

  // Si la fecha seleccionada es anterior al 26 de Julio,
  // pertenece al ciclo que inició el 26 de Julio del año anterior
  if (fechaGregoriana < inicioCiclo) {
    inicioCiclo = new Date(añoGregoriano - 1, 6, 26);
  }

  // Normalizamos las horas para evitar desfasajes por zona horaria o cambio de hora
  const fechaNormalizada = new Date(fechaGregoriana.getFullYear(), fechaGregoriana.getMonth(), fechaGregoriana.getDate());
  const inicioNormalizado = new Date(inicioCiclo.getFullYear(), inicioCiclo.getMonth(), inicioCiclo.getDate());

  const msPorDia = 1000 * 60 * 60 * 24;
  const diasTranscurridos = Math.round((fechaNormalizada - inicioNormalizado) / msPorDia);

  // El día 364 transcurrido (día 365 del año) es el Día Fuera del Tiempo (25 de Julio)
  if (diasTranscurridos === 364) {
    return {
      esDiaFueraDelTiempo: true,
      numeroLuna: null,
      nombreLuna: "Día Fuera del Tiempo",
      diaLuna: null,
      diaSemanaLunar: "Verde / Libre",
      semana: null,
      añoCiclo: inicioCiclo.getFullYear()
    };
  }

  // Cálculos para los 13 meses de 28 días
  const numeroLuna = Math.floor(diasTranscurridos / 28) + 1;
  const diaLuna = (diasTranscurridos % 28) + 1;
  const indiceDiaSemana = (diaLuna - 1) % 7;
  const numeroSemana = Math.floor((diaLuna - 1) / 7) + 1;

  return {
    esDiaFueraDelTiempo: false,
    numeroLuna,
    nombreLuna: NOMBRES_LUNAS[numeroLuna - 1],
    diaLuna,
    diaSemanaLunar: DIAS_SEMANA_LUNAR[indiceDiaSemana],
    semana: numeroSemana,
    añoCiclo: inicioCiclo.getFullYear()
  };
}