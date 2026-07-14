import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about.jpg";

const About = () => {
  const skills = [
    "Modern & Responsive Design",
    "Fast Loading Websites",
    "SEO-Friendly Development",
    "Mobile-First Approach",
    "Clean & Maintainable Code",
    "Ongoing Website Support",
  ];

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800">

              <img
                src={aboutImage}
                alt="Freelance Web Developer"
                className="w-full h-full object-cover"
              />

            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT ME
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              Hi, I'm Kailas 👋
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-8">
              I'm a freelance web developer who helps businesses create modern,
              responsive, and professional websites that build trust and attract
              more customers.
            </p>

            <p className="mt-6 text-slate-400 text-lg leading-8">
              Every project I build focuses on clean design, fast performance,
              and a great user experience. Whether you're launching a new
              business or redesigning an existing website, I'm here to help.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">

              {skills.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-blue-500 w-6 h-6" />
                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <a
              href="#contact"
              className="inline-flex mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Let's Work Together
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;