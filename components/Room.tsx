"use client"

import { roomObjects } from "@/world/room"
import { useRoomState } from "@/state/useRoomState"
import RoomObject from "./RoomObject"
import LaptopView from "./views/LaptopView"

export default function Room() {
  const {
    mode,
    focusedObjectId,
    camera,
    focusObject,
    resetCamera,
    visitedObjects,
    activeView
  } = useRoomState()

  if (activeView === "laptop") {
    return <LaptopView onExit={resetCamera}/>
    
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
          transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.scale})`,
          transformOrigin: "center center",
          transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
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
                x: obj.position.x,
                y: obj.position.y
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