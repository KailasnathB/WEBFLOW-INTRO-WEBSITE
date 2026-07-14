import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from "../assets/hero (2).jpg";

const Hero = () => {
  return (
    <div className="relative bg-slate-950 h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
        <img 
          src={heroImage} 
          alt="Modern Business District" 
          className="w-full h-full object-cover opacity-"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8">
             Building Modern Websites <span className="text-blue-500">That Grow Your Business</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              We provide cutting-edge solutions to help your business scale in the digital age. 
              Our expert team delivers results that matter, from strategy to execution.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center transition-all"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
