import React, { useState } from 'react';
import { obtenerFechaLunar } from './utils/lunarCalendar';
import LunarHeader from './components/LunarHeader';
import LunarGrid from './components/LunarGrid';

export default function App() {
  const [fechaActual, setFechaActual] = useState(new Date());
  const fechaLunar = obtenerFechaLunar(fechaActual);

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold text-slate-400 mb-6 tracking-wide uppercase text-xs">
        Calendario Sincrónico de 28 Días
      </h1>

      {/* Tarjeta del Encabezado */}
      <LunarHeader fechaLunar={fechaLunar} />

      {/* Cuadrícula de 28 Días */}
      <LunarGrid fechaLunar={fechaLunar} fechaActual={fechaActual} />
    </main>
  );
}