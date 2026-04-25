import React from 'react';
import SocialMedia from '../components/social_media'; // Adjust path if necessary

export default function AboutUs() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1677228571702-36ad21bb8180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          
          {/* Visual Image Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1677228571702-36ad21bb8180?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Professional workspace"
                className="w-full h-80 object-cover"
              />
              <div className="p-5 text-white">
                <h3 className="text-xl font-semibold text-indigo-400">Where Innovation Meets Execution</h3>
                <p className="text-sm mt-2">
                  LumenXo's foundation is built on quality, professionalism, and a vision for the digital future.
                </p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <div>
              <span className="text-indigo-400 border-b-2 border-indigo-500 uppercase tracking-wide text-sm">
                About us
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                Empowering Businesses with{' '}
                <span className="text-indigo-500">Innovative Software Solutions</span>
              </h2>
              <p className="text-lg leading-relaxed">
                <strong>LumenXo Software Pvt. Ltd.</strong> is a forward-thinking IT company delivering scalable digital solutions. Our passionate team specializes in web, mobile, and software applications that drive business success.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Seamless Business Operations:</strong> We simplify and automate core business tasks—boosting productivity and reducing complexity.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Effortless Integration:</strong> Our solutions fit seamlessly into your ecosystem, ensuring smooth performance without interruptions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Who We Are</h3>
              <p className="text-lg leading-relaxed">
                LumenXo was officially incorporated on <strong>April 16, 2025</strong>. We're specialists in full-stack development, automation, and digital strategy—delivering exceptional outcomes for ambitious clients.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To deliver scalable, efficient software that drives transformation, while nurturing the next generation of talent through internships and real-world experience.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mt-6 mb-2">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To become a global leader in digital innovation, empowering both enterprises and aspiring professionals through technology and mentorship.
              </p>
            </div>

            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}
