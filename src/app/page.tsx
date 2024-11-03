import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { WelcomeCard } from './components/WelcomeCard/WelcomeCard'
import { CAROUSEL_IMAGES } from './constants/carousel-images'

export default function KioskHomepage() {
  return (
    <div className="min-h-screen bg-yellow-200 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <WelcomeCard images={CAROUSEL_IMAGES} />
      </main>
      <Footer />
    </div>
  )
}
