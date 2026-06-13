"use client"

import { useState } from "react"
import { RoomObject as RoomObjectType } from "@/world/types"

type Props = {
  object: RoomObjectType
  onClick: () => void
  focusedObjectId: string | null
  visitedObjects: string[]
}

export default function RoomObject({
  object,
  onClick,
  focusedObjectId,
  visitedObjects
}: Props) {
  const [hovered, setHovered] = useState(false)

  const state =
    focusedObjectId === object.id
      ? "focused"
      : hovered
      ? "hovered"
      : "idle"
    
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute cursor-pointer flex items-center justify-center"
      style={{
        left: object.position.x,
        top: object.position.y,

        width: object.size.w,
        height: object.size.h,

        zIndex: object.layer,

        transform: `
          translateY(${hovered ? -6 : 0}px)
          scale(${hovered ? 1.06 : 1})
        `,

        transition:
          "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",

        filter: state === "focused"
          ? "drop-shadow(0 0 20px rgba(255,255,255,0.25))"
          : visitedObjects.includes(object.id)
          ? "brightness(1.08)"
          : "none",

        opacity:
          state === "focused"
            ? 1
            : focusedObjectId
            ? 0.25
            : 1
      }}
    >
      {object.sprite ? (
        <img
          src={object.sprite}
          alt={object.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none"
          }}
        />
      ) : (
        object.name
      )}
    </div>
  )
}