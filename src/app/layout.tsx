import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: "Recicla Mundo 2025 | Sustentabilidade e Educação Ambiental",
  description:
    "Transformando resíduos em recursos. Junte-se ao movimento pela sustentabilidade e combata a poluição plástica com o Recicla Mundo 2025.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Header showTitle={true} />
        {children}
      </body>
    </html>
  )
}
