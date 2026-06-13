"use client"
import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
type RoomMode = "idle" | "focused"

type Camera = {
    x: number
    y: number
    scale: number
}



const DEFAULT_CAMERA: Camera = {
    x: 0,
    y: 0,
    scale: 1
}


export function useRoomState() {
    const [mode, setMode] = useState<RoomMode>("idle")
    const [focusedObjectId, setFocusedObjectId] = useState<string | null>(null)
    const [camera, setCamera] = useState<Camera>(DEFAULT_CAMERA)
    const [visitedObjects, setVisitedObjects] = useState<string[]>([])
const [activeView, setActiveView] = useState<string | null>(null)
const [isTransitioning, setIsTransitioning] = useState(false)

    const targetRef = useRef<{ x: number; y: number } | null>(null)
    useEffect(() => {
        let frame: number

        const loop = () => {
            setCamera((prev) => {
                const target = targetRef.current

                if (!target) return prev
                const scale = target ? 1.4 : 1
                const desiredX = window.innerWidth / 2 - target.x * scale
                const desiredY = window.innerHeight / 2 - target.y * scale

                const dx = (desiredX - prev.x) * 0.1
                const dy = (desiredY - prev.y) * 0.1        

                return {
                    x: prev.x + dx,
                    y: prev.y + dy,
                    scale: scale
                }
            })

            frame = requestAnimationFrame(loop)
        }

        loop()
        return () => cancelAnimationFrame(frame)
    }, [])
    function focusObject(id: string, obj?: { x: number; y: number }) {
        setFocusedObjectId(id)
        setMode("focused")
      
        setVisitedObjects((prev) =>
          prev.includes(id) ? prev : [...prev, id]
        )
      
        if (!obj) return
      
        setTimeout(() => {
            setIsTransitioning(true)
          }, 350)
      
        targetRef.current = {
          x: obj.x,
          y: obj.y
        }
      
        // ⏳ wait for zoom animation
        setTimeout(() => {
          setActiveView(id)
          
        }, 500) // match camera transition speed
      }

    function resetCamera() {
        setFocusedObjectId(null)
        setMode("idle")
        setActiveView(null)
        setIsTransitioning(false)
        targetRef.current = null

        setCamera({
            x: 0,
            y: 0,
            scale: 1
        })
    }

    return {
        mode,
        focusedObjectId,
        camera,
        focusObject,
        resetCamera,
        visitedObjects,
        activeView,
        setActiveView,
        isTransitioning,
        setIsTransitioning
    }
}