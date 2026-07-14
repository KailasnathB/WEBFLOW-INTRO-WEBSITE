import { Rocket, Globe, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-slate-800 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <Rocket className="h-8 w-8 text-blue-500" />
              <span className="ml-3 text-3xl font-bold tracking-wide">
                WEBFLOW
              </span>
            </div>

            <p className="text-slate-400 leading-7">
              Helping businesses build modern, responsive websites that
              establish a strong online presence and attract more customers.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="https://kailas-portfolio-ashen.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition duration-300"
              >
                <Globe className="h-5 w-5" />
              </a>

              <a
                href="https://github.com/KailasnathB"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition duration-300"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/kailasnath-b-905605376/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition duration-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=kailasn599@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Business Websites
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Landing Pages
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Website Redesign
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Website Maintenance
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-2xl font-bold">
              Let's Work Together
            </h3>

            <p className="text-slate-400 mt-5 leading-7">
              Ready to build a professional website for your business?
              Let's discuss your project today.
            </p>

            <a
              href="#contact"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-full font-semibold transition duration-300"
            >
              Contact Me
            </a>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © 2026 WEBFLOW. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm mt-4 md:mt-0">
            Designed & Developed by
            <span className="text-blue-400 font-semibold"> WEBFLOW</span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;