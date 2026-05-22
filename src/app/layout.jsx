import { Space_Grotesk, Inter_Tight } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata = {
  title: "Jayox - Full-stack Developer",
  description: "Personal portfolio for Jayox, a full-stack developer building web apps, plugins, bots, and AI experiments.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  )
}
