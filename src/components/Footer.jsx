import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-blue-400">
          Afreen Fatima
        </h2>

        <p className="mt-4 text-gray-400">
          MERN Stack Developer | Building modern, responsive and scalable web
          applications.
        </p>

        {/* Social Links */}

        <div className="flex justify-center gap-6 mt-8">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

        </div>

        <hr className="my-8 border-slate-700" />

        <p className="text-gray-400 flex justify-center items-center gap-2">

          © {new Date().getFullYear()} Afreen Fatima.

          Made with <FaHeart className="text-red-500" /> using React &
          Tailwind CSS.

        </p>

      </div>

    </footer>
  );
}

export default Footer;