"use client"

import { projects } from "@/data/projects"
import { useState } from "react"
import DocumentViewer from "./DocumentViewer"
export default function LaptopView({ onExit }: { onExit: () => void }) {
  const [selected, setSelected] = useState<string | null>(null)

  const activeProject = projects.find(p => p.id === selected)
  if (selected && activeProject) {
    return (
      <DocumentViewer
        title={activeProject.name}
        type={activeProject.type}
        src={activeProject.src}
        onExit={() => setSelected(null)}
      />
    )
  }
  return (

    <div className="w-screen h-screen text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/room-assets/laptop background.jpg"
          className="w-full h-full object-contain"
        />
      </div>
      {/* TOP BAR */}
      <div className="absolute top-0 left-0 w-full p-4 z-20">
        <button onClick={onExit} className="opacity-70 hover:opacity-100">
          ← Back to Room
        </button>


      </div>

      {/* MAIN GRID */}
      {!selected && (
        <div className="h-full flex items-center justify-center relative z-10">
          <div className="grid grid-cols-4 gap-10">
  {projects.map((project) => (
    <div
      key={project.id}
      onClick={() => setSelected(project.id)}
      className="
        flex flex-col
        items-center
        cursor-pointer
        group
      "
    >
      <img
        src={project.icon}
        alt={project.name}
        className="
          w-20
          h-20
          object-contain
          transition-transform
          duration-200
          group-hover:scale-110
        "
      />

      <div
        className="
          mt-2
          text-xs
          text-center
          max-w-[120px]
          opacity-80
          group-hover:opacity-100
        "
      >
        {project.name}
      </div>
      <div className="text-[10px] opacity-50">{project.year}</div>
    </div>
  ))}
</div>
        </div>
      )}

    
    </div>
  )
}