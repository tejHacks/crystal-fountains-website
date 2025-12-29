import { Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* GRID 1 — TEXT LEFT, IMAGE RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Quality Frozen Foods
              <br />
              <span className="text-blue-900">You Can Trust</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Crystal Fountains Frozen Foods Limited supplies hygienically
              processed frozen fish and food products, carefully stored
              to preserve freshness and quality.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/2348032796523"
                target="_blank"
                className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition"
              >
                <MessageCircle size={18} />
                Order on WhatsApp
              </a>

              <a
                href="tel:07032303765"
                className="flex items-center gap-2 border border-blue-900 text-blue-900 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
          </div>

          <img
            src="/composition-with-frozen-fish-table.jpg"
            alt="Frozen fish products"
            className="w-full h-105 object-cover rounded-2xl"
          />
        </div>

        {/* GRID 2 — IMAGE LEFT, TEXT RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          <img
            src="/raw-fish-market.jpg"
            alt="Fresh raw fish"
            className="w-full h-95 object-cover rounded-2xl md:order-1 order-2"
          />

          <div className="md:order-2 order-1">
            <h3 className="text-3xl font-bold text-gray-900">
              Hygienic Handling & Proper Storage
            </h3>

            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              Our frozen foods are handled with strict hygiene standards
              and stored under controlled temperatures to ensure safety,
              taste, and long-lasting freshness.
            </p>
          </div>
        </div>

        {/* GRID 3 — TEXT LEFT, IMAGE RIGHT */}
        <div className="grid md:grid-cols-2 gap-12 items-center py-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              Serving Homes & Businesses
            </h3>

            <p className="mt-4 text-gray-600 text-lg max-w-xl">
              From household cooking to bulk supply for food vendors,
              Crystal Fountains Frozen Foods delivers quality you can
              rely on every time.
            </p>
          </div>

          <img
            src="/top-view-fish-ready-be-cooked.jpg"
            alt="Prepared frozen fish"
            className="w-full h-90 object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
