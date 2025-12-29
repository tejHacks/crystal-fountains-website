import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Get In Touch
        </h2>
        <p className="text-gray-700 mb-6">
          Have questions or want to place an order? Reach out to us via phone,
          WhatsApp, or email.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <a
            href="tel:07032303765"
            className="flex items-center gap-3 text-blue-900 hover:underline"
          >
            <Phone size={20} /> 07032303765
          </a>

          <a
            href="https://wa.me/2348032796523"
            target="_blank"
            className="flex items-center gap-3 text-green-700 hover:underline"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>

          <a
            href="mailto:adesidaolubunmi@gmail.com"
            className="flex items-center gap-3 text-red-600 hover:underline"
          >
            <Mail size={20} /> adesidaolubunmi@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
