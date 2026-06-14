"use client"

import { roomObjects } from "@/world/room"
import { useRoomState } from "@/state/useRoomState"
import RoomObject from "./RoomObject"
import LaptopView from "./views/LaptopView"


function PlaceholderWorld({
  title,
  onExit
}: {
  title: string
  onExit: () => void
}) {
  return (
    <div className="w-screen h-screen bg-neutral-950 text-white flex flex-col items-center justify-center">
      <button
        onClick={onExit}
        className="absolute top-4 left-4 opacity-70 hover:opacity-100"
      >
        ← Back to Room
      </button>

      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="mt-3 opacity-60">This world is under construction.</p>
    </div>
  )
}
export default function Room() {
  const {
    mode,
    focusedObjectId,
    camera,
    focusObject,
    resetCamera,
    visitedObjects,
    activeView,
    isTransitioning
  } = useRoomState()
  const views: Record<string, React.ReactNode> = {
    laptop: <LaptopView onExit={resetCamera} />
  
  }
  if (activeView && views[activeView]) {
    return views[activeView]
  }
  if (activeView) {
    return (
      <PlaceholderWorld
        title={activeView}
        onExit={resetCamera}
      />
    )
  }
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-auto relative bg-neutral-900">
        <div className="absolute inset-0 z-0 pointer-events-none">
      <img
        src="/room-assets/background.jpg"
        className="w-full h-full object-cover"
      />
    </div>
      {/* CAMERA WRAPPER */}
      <div
        className="absolute top-0 left-0 w-full h-full"

        
        style={{
          transform: `
            translate(${camera.x}px, ${camera.y}px)
            scale(${camera.scale})
          `,
          transformOrigin: "center center",
      
          opacity: isTransitioning ? 0 : 1,
      
          transition: `
            transform 0.05s linear,
            opacity 0.25s ease
          `
        }}
      >


        {roomObjects.map((obj) => (
          <RoomObject
            key={obj.id}
            object={obj}
            visitedObjects={visitedObjects}
            focusedObjectId={focusedObjectId}
            onClick={() =>
              focusObject(obj.id, {
                x: obj.position.x + obj.size.w/2,
                y: obj.position.y+ obj.size.h / 2
              })
            }
          />
        ))}
  
      </div>
  
      {/* BACK BUTTON */}
      {mode === "focused" && (
        <button
          onClick={resetCamera}
          className="absolute top-4 left-4 text-white z-50"
        >
          Back
        </button>
      )}
    </div>
  )
}