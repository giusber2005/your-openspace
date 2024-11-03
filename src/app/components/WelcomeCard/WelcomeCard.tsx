import { ImageCarousel } from '../ImageCarousel/ImageCarousel'

interface WelcomeCardProps {
  images: string[]
}

export const WelcomeCard = ({ images }: WelcomeCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-3xl w-full">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">Your openSpace!</h2>
      <ImageCarousel images={images} />
    </div>
  )
}
