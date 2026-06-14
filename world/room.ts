import { RoomObject } from "./types"

export const roomObjects: RoomObject[] = [
  {
    id: "laptop",
    name: "Laptop",
    position: { x: 527, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/laptop.jpg",
    interactionType: "zoom",
    contentRef: "projects"
  },
  {
    id: "torch",
    name: "minecraft torch",
    position: { x: 700, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/torch.jpg",
    interactionType: "zoom",
    contentRef: "minecraft"
  },
  {
    id: "backpack",
    name: "Backpack",
    position: { x: 1000, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/backpack.jpg",
    interactionType: "zoom",
    contentRef: "travel"
  },
  {
    id: "notice board",
    name: "Notice board",
    position: { x: 1000, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/noticeboard.jpg",
    interactionType: "zoom",
    contentRef: "resume"
  },
  {
    id: "mug",
    name: "Coffee mug",
    position: { x: 900, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/coffee.jpg",
    interactionType: "zoom",
    contentRef: "about me"
  },
  {
    id: "dustbin",
    name: "Dustbin",
    position: { x: 800, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/dustbin.jpg",
    interactionType: "zoom",
    contentRef: "failed ideas"
  },
  {
    id: "mask",
    name: "Spider - man mask",
    position: { x: 600, y: 420 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/spider_man.jpg",
    interactionType: "zoom",
    contentRef: "spider-man"
  },
  {
    id: "phone",
    name: "Phone",
    position: { x: 500, y: 600 },
    size: { w: 160, h: 100 },
    layer: 1,
    depth: 1,
    sprite: "/room-assets/phone.png",
    interactionType: "zoom",
    contentRef: "contacts"
  },
  {
    id: "calendar",
    name: "Calendar",
    position: { x: 652, y: 213 },
    size: { w: 120, h: 160 },
    layer: 1,
    depth: 0.8, // slightly back
    interactionType: "zoom",
    sprite: "/room-assets/calendar.jpg",
    contentRef: "timeline"
  },
  {
    id: "headphones",
    name: "Headphones",
    position: { x: 54, y: 270 },
    size: { w: 140, h: 80 },
    layer: 1,
    depth: 1.4,
    interactionType: "overlay",
    sprite: "/room-assets/headphones.jpg",
    contentRef: "music"
  }
]