import React from 'react';
import { DIAS_SEMANA_LUNAR } from '../utils/lunarCalendar';

export default function LunarGrid({ fechaLunar, fechaActual, onSeleccionarDia }) {
  // Si estamos en el Día Fuera del Tiempo, mostramos un mensaje especial en lugar de la cuadrícula
  if (fechaLunar?.esDiaFueraDelTiempo) {
    return (
      <div className="w-full max-w-xl mx-auto bg-slate-800/50 border border-emerald-500/30 rounded-2xl p-8 text-center backdrop-blur-sm">
        <p className="text-emerald-300 text-lg font-medium mb-2">
          🎉 ¡Hoy es un día libre de tiempo y calendario!
        </p>
        <p className="text-slate-400 text-sm">
          No hay días de semana ni números en la cuadrícula para esta fecha. Disfruta la pausa.
        </p>
      </div>
    );
  }

  // Creamos un arreglo del 1 al 28 para renderizar los días
  const diasMes = Array.from({ length: 28 }, (_, index) => index + 1);

  return (
    <section className="w-full max-w-xl mx-auto bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
      {/* Cabecera de los 7 días de la semana lunar */}
      <div className="grid grid-cols-7 gap-2 mb-4 text-center">
        {DIAS_SEMANA_LUNAR.map((dia) => (
          <div key={dia} className="text-xs font-semibold text-purple-400 tracking-wider uppercase">
            {dia}
          </div>
        ))}
      </div>

      {/* Cuadrícula de 28 días */}
      <div className="grid grid-cols-7 gap-2">
        {diasMes.map((dia) => {
          const esDiaHoy = dia === fechaLunar?.diaLuna;

          return (
            <button
              key={dia}
              onClick={() => onSeleccionarDia && onSeleccionarDia(dia)}
              className={`
                h-14 rounded-xl flex flex-col items-center justify-center transition-all duration-200
                border font-medium text-sm relative group
                ${esDiaHoy 
                  ? 'bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/30 scale-105 font-bold z-10' 
                  : 'bg-slate-700/40 hover:bg-slate-700 border-slate-600/50 text-slate-200 hover:border-slate-500'}
              `}
            >
              <span>{dia}</span>
              <span className="text-[10px] opacity-60 font-normal">
                Sem {Math.floor((dia - 1) / 7) + 1}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}