// 'use client'

// import HeroSection from "@/components/home/hero"
// import { AboutSection } from "@/components/home/about"
// import { DonationSection } from "@/components/home/donation"
// import { Footer } from "@/components/footer/footer"
// import { useEffect, useState } from "react"
// import LoadingScreen from "@/components/animations/loading"
// import Header from "@/components/header/header"

// import { LayoutGroup, AnimatePresence } from "framer-motion"


// export default function Page() {
//   const [loading, setLoading] = useState(true)
//    const [isExiting, setIsExiting] = useState(false)
//    const [showHeader, setShowHeader] = useState(false)
//    const [scrollY, setScrollY] = useState(0)


//    useEffect(() => {
//      const timer = setTimeout(() => {
//        setIsExiting(true)
//        setTimeout(() => {
//          setLoading(false)
//        }, 1800)
//      }, 100)

//      return () => clearTimeout(timer)
//    }, [])

//    useEffect(() => {
//      const handleScroll = () => setScrollY(window.scrollY)
//      window.addEventListener('scroll', handleScroll)
//      return () => window.removeEventListener('scroll', handleScroll)
//    }, [])


//   return (
//     <LayoutGroup>
//         <AnimatePresence>
//           {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
//         </AnimatePresence>

//         <div>
//           <Header />

//           <main className="relative min-h-screen">

//             {/*<FallingLeaves />*/}
//             <AnimatePresence>
//               <div className="relative z-10">
//                 <HeroSection />
//                 <AboutSection scrollY={scrollY} />
//                 <DonationSection />
//                 <Footer />
//               </div>
//             </AnimatePresence>
//           </main>

//       <style jsx global>
//         {`
//           @keyframes gradient {
//             0%, 100% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//           }
//           .animate-gradient {
//             background-size: 200% auto;
//             animation: gradient 2s ease infinite;
//           }
//           html {
//             scroll-behavior: smooth;
//           }
//           body {
//             overflow-x: hidden;
//           }

//           hidden: {
//             opacity: 0,
//             y: 20,
//             scale: 0.95,
//           },
//           visible: {
//             opacity: 1,
//             y: 0,
//             scale: 1,
//           },
//         `}</style>
//     </div>
//     </LayoutGroup>

//   )
// }

'use client'

import HeroSection from "@/components/home/hero"
import { AboutSection } from "@/components/home/about"
import { DonationSection } from "@/components/home/donation"
import { Footer } from "@/components/footer/footer"
import { useEffect, useState } from "react"
import LoadingScreen from "@/components/animations/loading"
import Header from "@/components/header/header"

import { LayoutGroup, AnimatePresence } from "framer-motion"


export default function Page() {
  const [loading, setLoading] = useState(true) 
   const [scrollY, setScrollY] = useState(0)


   useEffect(() => {
     const handleScroll = () => setScrollY(window.scrollY)
     window.addEventListener('scroll', handleScroll)
     return () => window.removeEventListener('scroll', handleScroll)
   }, [])


  return (
    <LayoutGroup>
      <AnimatePresence>
        {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
        {!loading && (
          <>
            <Header />
            <HeroSection />
            <AboutSection scrollY={scrollY} />
            <DonationSection />
            <Footer />
          </>
        )}
      </AnimatePresence>

      <style jsx global>
        {`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 2s ease infinite;
          }
          html {
            scroll-behavior: smooth;
          }
          body {
            overflow-x: hidden;
          }

          hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95,
          },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
          },
        `}</style>
    </LayoutGroup>
  )
}
