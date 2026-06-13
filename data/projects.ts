export type Project = {
  id: string
  name: string
  year: string
  type: "markdown" | "pdf" | "link"
  src: string
  icon: string
}

export const projects: Project[] = [
  {
    id: "rusty",
    name: "Rusty AI",
    year: "2025",
    type: "markdown",
    src: "/projects/rusty/README.md",
    icon: "/room-assets/file_icon-removebg-preview.png"
  },
  {
    id: "github",
    name: "GitHub",
    year: "2026",
    type: "link",
    src: "https://github.com/ayushsharma-devs",
    icon: "/room-assets/file_icon-removebg-preview.png"
  },
  {
    id: "quantum",
    name: "Quantum Drone Security",
    year: "2026",
    type: "pdf",
    src: "/projects/papers/Quantum_Cryptography_and_Secure_Drone_Communication (3).pdf",
    icon: "/room-assets/file_icon-removebg-preview.png"
  }
]