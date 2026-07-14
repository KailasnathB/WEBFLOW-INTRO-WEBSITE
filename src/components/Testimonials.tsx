import { motion } from "framer-motion";
import { CheckCircle2, Clock, Smartphone, Rocket, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Modern Design",
    description: "Clean, professional websites that create a strong first impression.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: "Fully Responsive",
    description: "Your website will look great on mobile, tablet, and desktop.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: "Fast Delivery",
    description: "Projects completed efficiently without compromising quality.",
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    title: "Reliable Support",
    description: "I'm available even after your website is launched.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-500" />,
    title: "Easy Communication",
    description: "Clear updates throughout every stage of your project.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-blue-500" />,
    title: "Quality Focus",
    description: "Every website is built with performance, usability, and clean code in mind.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
            WHY CHOOSE ME
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            What You Can Expect
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg">
            I focus on delivering websites that are fast, modern, responsive,
            and designed to help your business make a great first impression.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition-all"
            >

              <div className="mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-slate-400 leading-7">
                {feature.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;