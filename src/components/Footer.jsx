const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Crystal Fountains Frozen Foods
          Limited. All rights reserved.
        </p>
        <p className="mt-2">
          Follow us on{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            Facebook
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-blue-400 hover:underline"
          >
            Instagram
          </a>{" "}
          |{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
          >
            Twitter
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
