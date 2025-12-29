const Location = () => {
  return (
    <section id="location" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Visit Our Store
        </h2>
        <p className="text-gray-700 mb-6">
          Crystal Fountains Frozen Foods Limited <br />
          @No 12 Adebowale Street, Oke-Aro St, off Odole Street, Akure 340231, Ondo State,Nigeria
        </p>
        <div className="aspect-video">
          <iframe
            title="Crystal Fountains Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0000000000005!2d5.123456!3d7.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040000000000001%3A0xabcdef1234567890!2sCrystal%20Fountains%20Frozen%20Foods!5e0!3m2!1sen!2sng!4v1234567890"
            width="100%"
            height="100%"
            className="rounded-xl border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
