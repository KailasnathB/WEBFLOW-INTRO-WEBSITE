const CTA = () => {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
          Ready to Elevate Your Business?
        </h2>
        <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of successful companies that have transformed their operations with our digital solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Get a Free Consultation
          </a>
          <a 
            href="tel:+1234567890" 
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
