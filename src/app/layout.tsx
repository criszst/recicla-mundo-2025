import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import Header from "@/components/header/header"

export const metadata: Metadata = {
  title: "Recicla Mundo | Sustentabilidade e Educação Ambiental",

  description:
    "Transformando resíduos em recursos. Junte-se ao movimento pela sustentabilidade e combata a poluição plástica com o Recicla Mundo.",

  authors: [
    {
      name: "Recicla Mundo",
      url: "https://instagram.com/reciclamundo.2025oficial",
    },
  ],

  keywords: ["reciclagem", "sustentabilidade", "educação ambiental", "recicla mundo", "2025oficial", "recicla mundo 25"],

  icons: {
    icon: [
      {
        url: "https://i.ibb.co/MxfqFM3s/icon-logo.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://i.ibb.co/MxfqFM3s/icon-logo.jpg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
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
        <Header />
           {children}
      </body>
    </html>
  )
}
