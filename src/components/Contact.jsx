import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Send, Sparkles, Mail, User, MessageCircle, MapPin } from "lucide-react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      // Replace with your Getform access key URL
      await axios.post("https://getform.io/f/bdrylwmb", userInfo);
      toast.success(`Your message has been sent. Email: ${data.email}`);
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 py-16 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-slate-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gray-300 rounded-full opacity-30 blur-lg animate-bounce"></div>
      <div className="absolute bottom-20 left-20 w-20 h-20 bg-slate-300 rounded-full opacity-25 blur-md animate-pulse delay-1000"></div>
      
      {/* Floating sparkle effects */}
      <div className="absolute top-1/4 left-1/4 text-slate-400 animate-sparkle">
        <Sparkles size={28} />
      </div>
      <div className="absolute top-1/3 right-1/3 text-gray-500 animate-sparkle delay-1000">
        <Sparkles size={24} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-slate-600 animate-sparkle delay-2000">
        <Sparkles size={20} />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16 animate-fade-in">
          
          <h1 className="text-4xl  font-bold text-gray-900 mb-6 leading-tight">
            Contact 
            <span className="text-slate-600"> Me</span>
            <span className="inline-block animate-wave ml-2">👋</span>
          </h1>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start a conversation? I'd love to hear from you. 
            <br className="hidden md:block" />
            Send me a message and I'll respond as soon as possible.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Info cards */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-black p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Quick Response</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I typically respond to messages within 24 hours. Your inquiry is important to me.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="bg-slate-700 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Let's Collaborate</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Whether it's a project idea, question, or just to say hello - I'm all ears.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="animate-scale-in">
            <div className="bg-white/90 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-gray-200/50 relative overflow-hidden">
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="bg-black p-2 rounded-full shadow-lg">
                      <Send className="text-white" size={20} />
                    </div>
                    <h2 className="text-sm font-bold text-gray-500">Send Message</h2>
                  </div>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you</p>
                </div>

                {/* Name field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <User className="text-gray-400 group-focus-within:text-black transition-colors duration-300" size={20} />
                  </div>
                  <input
                    {...register("name", { required: true })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-4 focus:ring-black/10 outline-none transition-all duration-300 placeholder-gray-500 text-gray-400 text-sm group-hover:border-gray-300"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                  />
                  <label className="absolute -top-3 left-10 bg-white px-3 text-sm font-semibold text-gray-700 group-focus-within:text-black transition-colors duration-300">
                    Full Name
                  </label>
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-2 block animate-fade-in flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      This field is required
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Mail className="text-gray-400 group-focus-within:text-black transition-colors duration-300" size={20} />
                  </div>
                  <input
                    {...register("email", { required: true })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-4 focus:ring-black/10 outline-none transition-all duration-300 placeholder-gray-500 text-gray-400 text-sm group-hover:border-gray-300"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                  />
                  <label className="absolute -top-3 left-10 bg-white px-3 text-sm font-semibold text-gray-700 group-focus-within:text-black transition-colors duration-300">
                    Email Address
                  </label>
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-2 block animate-fade-in flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      This field is required
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none z-10">
                    <MessageCircle className="text-gray-400 group-focus-within:text-black transition-colors duration-300" size={20} />
                  </div>
                  <textarea
                    {...register("message", { required: true })}
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-gray-200 rounded-xl focus:border-black focus:ring-4 focus:ring-black/10 outline-none transition-all duration-300 placeholder-gray-500 text-gray-400 text-sm min-h-[140px] resize-none group-hover:border-gray-300"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, question, or just say hello..."
                  />
                  <label className="absolute -top-3 left-10 bg-white px-3 text-sm font-semibold text-gray-700 group-focus-within:text-black transition-colors duration-300">
                    Your Message
                  </label>
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-2 block animate-fade-in flex items-center gap-1">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      This field is required
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 px-8 rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" size={20} />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
