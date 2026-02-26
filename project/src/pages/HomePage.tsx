import { Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        {/* Sparkle Icon */}
        <div className="mb-8">
          <Sparkles className="w-14 h-14 text-[#c9a961] mx-auto" strokeWidth={1.5} />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight">
          Handcrafted with Love
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 mb-3 font-light tracking-wide">
          Custom Jewelry & Hampers by
        </p>

        {/* Brand Name */}
        <p className="font-serif text-3xl sm:text-4xl text-[#c9a961] mb-12 font-medium">
          Spark Soul
        </p>

        {/* CTA Buttons - Clean Gap, NO Arrow */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => onNavigate('products')}
            className="px-10 py-4 bg-[#c9a961] text-white font-medium rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <span className="tracking-wide">Shop Now</span>
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="px-10 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-[#2d2d2d] transition-all duration-300 shadow-lg"
          >
            <span className="tracking-wide">Our Story</span>
          </button>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap justify-center items-center gap-3">
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full">
            ✨ Handmade
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full">
            🎁 Custom Gifts
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#c9a961]/30 text-[#c9a961] text-sm rounded-full">
            ⭐ Premium Finish
          </span>
          <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full">
            ⚡ Fast Response
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 cursor-pointer animate-bounce">
          <span className="text-white/60 text-xs font-light tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf9f7] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
