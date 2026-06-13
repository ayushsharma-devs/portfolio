"use client"

import { useEffect, useRef, useState } from "react"
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
    const breathRef = useRef(0)
    const timesSeen = visitedObjects.filter(id => id === object.id).length

    const familiarity = visitedObjects.includes(object.id)
        ? Math.min(1 + timesSeen * 0.1, 1.3)
        : 1

    // 🫀 idle life loop (safe, no rerenders)
    useEffect(() => {
        let frame: number

        const loop = () => {
            breathRef.current =
                Math.sin(Date.now() * 0.001 + object.id.length) * 0.6

            frame = requestAnimationFrame(loop)
        }

        loop()
        return () => cancelAnimationFrame(frame)
    }, [object.id])

    // 🎮 entity state
    const state =
        focusedObjectId === object.id
            ? "focused"
            : hovered
                ? "hovered"
                : "idle"

    // 🧠 personality behavior (simple but powerful)
    const personality = object.personality ?? "static"

    const idleDrift =
        personality === "chaotic"
            ? Math.sin(Date.now() * 0.003 + object.id.length) * 1.2
            : personality === "calm"
                ? Math.sin(Date.now() * 0.001) * 0.4
                : 0

    const hoverLift = state === "hovered" ? -3 : 0
    const focusBoost = state === "focused" ? 1.08 : 1
    const hoverBoost = state === "hovered" ? 1.05 : 1

    return (
        <div
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="absolute cursor-pointer bg-white/10 border border-white/30 text-white flex items-center justify-center"
            style={{
                left: object.position.x,
                top: object.position.y,

                width: object.size.w,
                height: object.size.h,
                background: "transparent",
                border: "none",
                zIndex: object.layer,
                filter: `
                    ${visitedObjects.includes(object.id)
                        ? "brightness(1.1)"
                        : ""
                    }
                    ${state === "focused"
                        ? "drop-shadow(0 0 12px rgba(255,255,255,0.15))"
                        : ""
                    }
                    `,
                pointerEvents: "auto",
                transform: `
                    translateY(${breathRef.current + idleDrift}px)
                    scale(${hovered ? 1.05 : 1} * ${familiarity})
                `,

                transition: "transform 0.15s ease, opacity 0.2s ease",

                opacity:
                    state === "focused"
                        ? 1
                        : state === "hovered"
                            ? 0.95
                            : focusedObjectId
                                ? 0.25
                                : 0.85,


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