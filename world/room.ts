import { RoomObject } from "./types"

export const roomObjects: RoomObject[] = [
  {
    id: "laptop",
    name: "Laptop",
    position: { x: 527, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    
    sprite: "/room-assets/laptop.jpg",
    interactionType: "zoom",
  
  },

  {
    id: "torch",
    name: "Minecraft Torch",
    position: { x: 700, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    
    sprite: "/room-assets/torch.jpg",
    interactionType: "zoom",
    
  },

  {
    id: "backpack",
    name: "Backpack",
    position: { x: 1000, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    
    sprite: "/room-assets/backpack.jpg",
    interactionType: "zoom",

  },

  {
    id: "notice-board",
    name: "Notice Board",
    position: { x: 1150, y: 250 },
    size: { w: 180, h: 140 },
    layer: 1,

    sprite: "/room-assets/noticeboard.jpg",
    interactionType: "zoom",

  },

  {
    id: "mug",
    name: "Coffee Mug",
    position: { x: 900, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    
    sprite: "/room-assets/coffee.jpg",
    interactionType: "zoom",

  },

  {
    id: "dustbin",
    name: "Dustbin",
    position: { x: 800, y: 409 },
    size: { w: 160, h: 100 },
    layer: 1,
    
    sprite: "/room-assets/dustbin.jpg",
    interactionType: "zoom",

  },

  {
    id: "mask",
    name: "Spider-Man Mask",
    position: { x: 600, y: 420 },
    size: { w: 160, h: 100 },
    layer: 1,
    
    sprite: "/room-assets/spider_man.jpg",
    interactionType: "zoom",
  
  },

  {
    id: "phone",
    name: "Phone",
    position: { x: 500, y: 600 },
    size: { w: 160, h: 100 },
    layer: 1,
    
    sprite: "/room-assets/phone.png",
    interactionType: "zoom",
  
  },

  {
    id: "calendar",
    name: "Calendar",
    position: { x: 652, y: 213 },
    size: { w: 120, h: 160 },
    layer: 1,

    interactionType: "zoom",
    sprite: "/room-assets/calendar.jpg",
   
  },

  {
    id: "headphones",
    name: "Headphones",
    position: { x: 54, y: 270 },
    size: { w: 140, h: 80 },
    layer: 1,

    interactionType: "overlay",
    sprite: "/room-assets/headphones.jpg",
 
  },

  {
    id: "bookshelf",
    name: "Bookshelf",
    position: { x: 1400, y: 180 },
    size: { w: 220, h: 320 },
    layer: 1,

    interactionType: "zoom",
    sprite: "/room-assets/book_shelf.jpg",

  },

  {
    id: "dog-plushie",
    name: "Dog Plushie",
    position: { x: 260, y: 560 },
    size: { w: 120, h: 120 },
    layer: 1,
  
    interactionType: "zoom",
    sprite: "/room-assets/dog_plushie.jpg",
   
  },

  {
    id: "hollow-knight",
    name: "Hollow Knight Plushie",
    position: { x: 320, y: 500 },
    size: { w: 120, h: 120 },
    layer: 1,
 
    interactionType: "zoom",
    sprite: "/room-assets/hollow_knight.jpg",
 
  },

  {
    id: "chess-board",
    name: "Chess Board",
    position: { x: 720, y: 620 },
    size: { w: 180, h: 140 },
    layer: 1,
 
    interactionType: "zoom",
    sprite: "/room-assets/chess_board.png",
   
  }
]