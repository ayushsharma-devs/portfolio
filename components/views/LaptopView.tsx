"use client"

import { projects } from "@/data/projects"
import { useState } from "react"

export default function LaptopView({ onExit }: { onExit: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)

  const activeProject = projects.find(p => p.id === selected)

  return (
    <div className="w-screen h-screen bg-black text-white relative overflow-hidden">

      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between">
        <button onClick={onExit} className="opacity-70 hover:opacity-100">
          ← Back to Room
        </button>

        <div className="opacity-40">Laptop OS v1</div>
      </div>

      {/* MAIN GRID */}
      {!selected && (
        <div className="h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelected(project.id)}
                className="w-48 h-32 border border-white/20 hover:border-white/60 cursor-pointer flex flex-col justify-center items-center transition"
              >
                <div className="text-sm">{project.name}</div>
                <div className="text-xs opacity-50">{project.year}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PROJECT DETAIL VIEW */}
      {selected && activeProject && (
        <div className="h-full flex flex-col items-center justify-center text-center px-10">
          <h1 className="text-2xl mb-2">{activeProject.name}</h1>
          <p className="opacity-60 max-w-md">
            {activeProject.description}
          </p>

          <button
            onClick={() => setSelected(null)}
            className="mt-6 px-4 py-2 border border-white/30 hover:border-white"
          >
            Back
          </button>
        </div>
      )}
    </div>
  )
}