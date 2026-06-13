import { RoomObject } from "./types"

export const roomObjects: RoomObject[] = [
    {
      id: "laptop",
      name: "Laptop",
      position: { x: 527, y: 409},
      size: { w: 160, h: 100 },
      layer: 1,
      depth: 1,
      sprite:"/room-assets/laptop.jpg",
      interactionType: "zoom",
      contentRef: "projects"
    },
    {
        id: "calendar",
        name: "Calendar",
        position: { x: 652, y: 213 },
        size: { w: 120, h: 160 },
        layer: 1,
        depth: 0.8, // slightly back
        interactionType: "zoom",
        sprite:"/room-assets/calendar.jpg",
        contentRef: "timeline"
      },
    {
      id: "headphones",
      name: "Headphones",
      position: { x: 54, y: 270 },
      size: { w: 140, h: 80 },
      layer: 1,
      depth:   1.4,
      interactionType: "overlay",
      sprite:"/room-assets/headphones.jpg",
      contentRef: "music"
    }
  ]