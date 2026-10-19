import React from 'react';

export default function LunarHeader({ fechaLunar }) {
  // Si no hay datos cargados aún, mostramos un estado de carga básico
  if (!fechaLunar) return null;

  return (
    <header className="w-full max-w-xl mx-auto bg-slate-800/80 border border-slate-700 rounded-2xl p-6 shadow-xl backdrop-blur-sm text-center mb-6">
      {fechaLunar.esDiaFueraDelTiempo ? (
        <div>
          <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-2 border border-emerald-500/30">
            Día Libre
          </span>
          <h2 className="text-3xl font-extrabold text-emerald-400 mb-1">
            ✨ Día Fuera del Tiempo ✨
          </h2>
          <p className="text-slate-300 text-sm">
            Día de pausa, arte y meditación previa al nuevo año.
          </p>
        </div>
      ) : (
        <div>
          <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full uppercase tracking-wider mb-2 border border-purple-500/30">
            Luna {fechaLunar.numeroLuna} de 13
          </span>
          <h2 className="text-4xl font-extrabold text-purple-300 mb-2">
            {fechaLunar.nombreLuna}
          </h2>
          <div className="flex justify-center items-center gap-4 text-slate-300 text-sm mt-3">
            <span className="bg-slate-700/60 px-3 py-1 rounded-lg">
              Día <strong className="text-white">{fechaLunar.diaLuna}</strong> / 28
            </span>
            <span className="bg-slate-700/60 px-3 py-1 rounded-lg">
              {fechaLunar.diaSemanaLunar}
            </span>
            <span className="bg-slate-700/60 px-3 py-1 rounded-lg">
              Semana {fechaLunar.semana}
            </span>
          </div>
        </div>
      )}
    </header>
  );
}