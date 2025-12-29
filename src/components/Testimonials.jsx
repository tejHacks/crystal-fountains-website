const testimonials = [
  {
    name: "Aisha Bello",
    comment:
      "Crystal Fountains has the freshest frozen foods! Always reliable and hygienic.",
  },
  {
    name: "Tunde Akin",
    comment:
      "Amazing service and quality! I won’t buy frozen fish from anywhere else.",
  },
  {
    name: "Chinelo Okafor",
    comment:
      "Great prices, friendly staff, and a clean store. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-4">"{t.comment}"</p>
              <p className="font-semibold text-gray-900">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
