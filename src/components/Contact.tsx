import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-semibold tracking-wide uppercase">
            Get In Touch
          </h2>

          <h3 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
            Let's Build Your Next Website
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
            Need a professional website for your business or personal brand?
            Fill out the form below or contact me directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 p-4 rounded-xl">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  Email
                </h4>

                <p className="text-slate-400">
                  kailasn599@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 p-4 rounded-xl">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  Phone
                </h4>

                <p className="text-slate-400">
                  +91 9495951677
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 p-4 rounded-xl">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-white">
                  Location
                </h4>

                <p className="text-slate-400">
                  Available Worldwide (Remote)
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl p-8">

            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <select
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option>Business Website</option>
                <option>Landing Page</option>
                <option>Portfolio Website</option>
                <option>Website Redesign</option>
                <option>Website Maintenance</option>
                <option>Other</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2"
              >
                Send Inquiry
                <Send className="h-5 w-5" />
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;