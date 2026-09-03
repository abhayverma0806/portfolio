import React, { useState } from 'react';
import { Shield, MapPin, Users, AlertTriangle, CheckCircle, Radio, Navigation } from 'lucide-react';

export const RescueCorePreview: React.FC = () => {
  const [selectedIncident, setSelectedIncident] = useState(1);

  const incidents = [
    { id: 1, title: 'Medical Supply Dispatch', loc: 'Sector 4, Zone A', status: 'Dispatched', volunteers: 4, severity: 'High' },
    { id: 2, title: 'Flood Relief Coordination', loc: 'River Bank Camp', status: 'Active', volunteers: 12, severity: 'Critical' },
    { id: 3, title: 'Emergency Food Station', loc: 'Community Center', status: 'Resolved', volunteers: 6, severity: 'Normal' },
  ];

  return (
    <div className="w-full bg-[#0b0d14] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-sans text-xs">
      
      {/* Top Bar */}
      <div className="bg-[#121522] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30">
            <Shield className="w-3.5 h-3.5" />
          </div>
          <span className="font-bold font-display text-white text-xs">RescueCore Dashboard</span>
          <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-300 font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
            LIVE GEOSPATIAL CENTER
          </span>
        </div>

        <div className="flex items-center gap-3 text-slate-400 text-[11px]">
          <span className="flex items-center gap-1 text-emerald-400">
            <Users className="w-3.5 h-3.5" /> 22 Volunteers Online
          </span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-cyan-300 font-mono">Supabase Auth: Admin Active</span>
        </div>
      </div>

      {/* Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 h-64 sm:h-72">
        
        {/* Simulated Geospatial Map Window */}
        <div className="col-span-1 md:col-span-7 bg-[#07090f] p-3 relative border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between overflow-hidden">
          
          {/* Simulated Leaflet Dark Grid Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* Map Status Badge */}
          <div className="relative z-10 flex justify-between items-center bg-[#0d0f19]/90 backdrop-blur p-2 rounded-lg border border-white/10">
            <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
              <Navigation className="w-3 h-3 text-cyan-400" /> Leaflet Incident Map
            </span>
            <span className="text-[10px] text-slate-400">Region: Sector Grid 9</span>
          </div>

          {/* Simulated Map Markers */}
          <div className="relative z-10 my-auto h-32 flex items-center justify-around">
            
            {/* Marker 1 */}
            <button
              onClick={() => setSelectedIncident(1)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition ${
                selectedIncident === 1
                  ? 'bg-cyan-500/20 border-cyan-400 scale-110 shadow-lg shadow-cyan-500/20'
                  : 'bg-white/[0.04] border-white/10 opacity-70'
              }`}
            >
              <MapPin className="w-5 h-5 text-cyan-400 animate-bounce" />
              <span className="text-[9px] font-mono text-slate-200 bg-black/60 px-1 rounded">Task #101</span>
            </button>

            {/* Marker 2 */}
            <button
              onClick={() => setSelectedIncident(2)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition ${
                selectedIncident === 2
                  ? 'bg-red-500/20 border-red-400 scale-110 shadow-lg shadow-red-500/20'
                  : 'bg-white/[0.04] border-white/10 opacity-70'
              }`}
            >
              <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-[9px] font-mono text-slate-200 bg-black/60 px-1 rounded">Task #102</span>
            </button>

            {/* Marker 3 */}
            <button
              onClick={() => setSelectedIncident(3)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl border transition ${
                selectedIncident === 3
                  ? 'bg-emerald-500/20 border-emerald-400 scale-110 shadow-lg shadow-emerald-500/20'
                  : 'bg-white/[0.04] border-white/10 opacity-70'
              }`}
            >
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-[9px] font-mono text-slate-200 bg-black/60 px-1 rounded">Task #103</span>
            </button>

          </div>

          {/* Map Footer Bar */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-[#0d0f19]/90 p-1.5 rounded-lg border border-white/10">
            <span>Lat: 31.2532° N, Long: 75.7037° E</span>
            <span className="text-cyan-400">GPS Sync: Active</span>
          </div>
        </div>

        {/* Task Details & Volunteer Panel */}
        <div className="col-span-1 md:col-span-5 bg-[#080a11] p-3 flex flex-col justify-between space-y-2">
          
          <div className="flex items-center justify-between text-slate-300 font-semibold border-b border-white/10 pb-2">
            <span>Incident Feed</span>
            <span className="text-[10px] font-mono text-slate-400">Filtered View</span>
          </div>

          <div className="space-y-2 overflow-y-auto flex-1 pr-1">
            {incidents.map((inc) => (
              <div
                key={inc.id}
                onClick={() => setSelectedIncident(inc.id)}
                className={`p-2.5 rounded-lg cursor-pointer border transition ${
                  selectedIncident === inc.id
                    ? 'bg-white/[0.08] border-cyan-400/50'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-white text-[11px]">{inc.title}</h4>
                  <span className={`px-1.5 py-0.5 text-[9px] rounded font-mono ${
                    inc.status === 'Dispatched' ? 'bg-cyan-500/20 text-cyan-300' :
                    inc.status === 'Active' ? 'bg-red-500/20 text-red-300' :
                    'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {inc.status}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" /> {inc.loc}
                </p>
                <div className="mt-2 flex justify-between items-center text-[10px] text-slate-400 font-mono">
                  <span>Volunteers: {inc.volunteers}</span>
                  <span className="text-amber-400">{inc.severity} Priority</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action */}
          <button className="w-full py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs transition flex items-center justify-center gap-1">
            <Radio className="w-3 h-3" /> Dispatch Volunteer Task
          </button>

        </div>

      </div>

    </div>
  );
};
