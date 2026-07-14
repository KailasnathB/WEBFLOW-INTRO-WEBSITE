import { Layout, Smartphone, Globe, BarChart, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Business Websites",
    description:
      "Professional websites designed to establish your business online and build customer trust.",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-blue-600 text-white",
  },
  {
    title: "Corporate Websites",
    description:
      "Clean, scalable websites built for companies that need a strong digital presence.",
    icon: <Layout className="h-8 w-8" />,
    color: "bg-slate-700 text-white",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages for products, campaigns, and lead generation.",
    icon: <Zap className="h-8 w-8" />,
    color: "bg-emerald-600 text-white",
  },
  {
    title: "Website Redesign",
    description:
      "Give your old website a fresh, modern look with improved usability and performance.",
    icon: <Smartphone className="h-8 w-8" />,
    color: "bg-violet-600 text-white",
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates, bug fixes, backups, and technical support after launch.",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-orange-500 text-white",
  },
  {
    title: "Speed & SEO Optimization",
    description:
      "Improve loading speed and search engine visibility to reach more customers.",
    icon: <BarChart className="h-8 w-8" />,
    color: "bg-rose-600 text-white",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
            SERVICES
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
            What I Can Build For You
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400 leading-8">
            Whether you're launching a new business or upgrading an existing one,
            I create fast, modern websites designed to impress your customers and
            help your business grow online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-8 shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <div
                className={`inline-flex rounded-2xl p-4 mb-6 ${service.color}`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {service.description}
              </p>

              <div className="mt-8 flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Need a Custom Website?
          </h3>

          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and build a website that represents your
            business professionally.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
          >
            Get a Free Quote
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;