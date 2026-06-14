export type InteractionType =
  | "zoom"
  | "overlay"
  | "toggle"
  | "easter-egg"
export type EntityState = "idle" | "hovered" | "focused"
export type RoomObject = {
  id: string
  name: string

  position: {
    x: number
    y: number
  }

  size: {
    w: number
    h: number
  }
  sprite?:string
  layer: number

  interactionType: InteractionType

  state?: EntityState
personality?: "calm" | "chaotic" | "static"
}
