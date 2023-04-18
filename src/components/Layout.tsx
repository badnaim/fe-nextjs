import { ReactNode } from "react"

interface PropType {
  children: ReactNode;
}

export default function Layout({ children }: PropType) {
  return (
    <div>
      <header className="w-full h-11 bg-black text-white">bb</header>
      {children}
    </div>
  )
}

