import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const images = [
  "/shop-1.jfif",
  "/shop2.jfif",
  "/shop3.jfif",
  "/shop4.jfif",
  "/shop5.jfif",
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-start">
        {/* TEXT + CONTACT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Crystal Fountains
          </h2>

          <p className="mt-6 text-gray-600 text-lg max-w-xl">
            Crystal Fountains Frozen Foods Limited is a locally owned frozen
            food business dedicated to supplying quality frozen fish and food
            products to homes and businesses.
          </p>

          <p className="mt-4 text-gray-600 text-lg max-w-xl">
            We operate from a physical store in Akure, maintaining proper cold
            storage, hygiene, and consistent customer service. What you see here
            is our actual facility.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>• Physical store you can visit</li>
            <li>• Proper cold-room storage</li>
            <li>• Hygienic handling of products</li>
          </ul>

          {/* CONTACT LINKS */}
          <div className="mt-8 space-y-3">
            <a
              href="tel:07032303765"
              className="flex items-center gap-3 text-blue-900 hover:underline"
            >
              <Phone size={18} /> 07032303765
            </a>

            <a
              href="https://wa.me/2348032796523"
              target="_blank"
              className="flex items-center gap-3 text-blue-900 hover:underline"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>

            <a
              href="mailto:adesidaolubunmi@gmail.com"
              className="flex items-center gap-3 text-blue-900 hover:underline"
            >
              <Mail size={18} /> adesidaolubunmi@gmail.com
            </a>
          </div>
        </div>

        {/* IMAGE SLIDER */}
        <div className="relative">
          <div className="relative h-105 w-full overflow-hidden rounded-2xl">
            <img
              src={images[current]}
              alt="Crystal Fountains store"
              onClick={() => setFullscreen(images[current])}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Controls */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-3 overflow-x-auto">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Store thumbnail"
                onClick={() => setCurrent(idx)}
                className={`h-20 w-28 object-cover rounded-lg cursor-pointer border ${
                  current === idx ? "border-blue-900" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setFullscreen(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={fullscreen}
            alt="Fullscreen store view"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
};

export default About;
