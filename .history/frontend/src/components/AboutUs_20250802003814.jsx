import React from "react";
import {
  Smartphone,
  ShoppingCart,
  Server,
  BadgePercent,
  Wrench,
  ThumbsUp,
  Code,
  Shield,
  Cloud,
  Settings,
} from "lucide-react";

const HomeAbout = () => {
  return (
    <div className="space-y-20">
      {/* About Company Section with Background */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/1385382.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 py-20 px-4 md:px-20 max-w-7xl mx-auto">
          <div className="lg:w-3/4">
            <h2 className="text-4xl font-bold text-indigo-300 mb-6">
              About Company
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              <strong>Empowering Businesses with Innovative Software Solutions</strong>
              <br />
              LumenXo Software Pvt. Ltd. is a forward-thinking IT company
              committed to delivering powerful and scalable digital solutions
              that drive business success. With a passionate team of
              developers, designers, and strategists, we specialize in crafting
              tailored web, mobile, and software applications that help
              organizations thrive in a competitive digital landscape.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              <strong>Seamless Business Operations:</strong> We build solutions
              that simplify and automate business operations—enabling companies
              to enhance productivity, reduce complexity, and focus on growth.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Effortless Integration:</strong> Our technologies are
              designed for smooth and secure integration into your existing
              systems, ensuring minimal disruption and maximum efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-20">
        <div className="lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/10/19/05/coding-1970466_960_720.jpg"
            alt="Business Solutions"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Scalable Business Solutions</h3>
          <p className="text-gray-600 leading-relaxed">
            We deliver scalable digital solutions tailored to your needs, helping your business grow without technology becoming a bottleneck.
          </p>
        </div>
      </section>

      {/* Section 2 (Alternate layout) */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-6 md:px-20">
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Robust Security</h3>
          <p className="text-gray-600 leading-relaxed">
            Protecting your data is our priority. We implement enterprise-grade security protocols to ensure your systems stay safe.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/29/12/54/computer-1869236_960_720.jpg"
            alt="Security"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-20">
        <div className="lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/26/startup-593341_960_720.jpg"
            alt="Cloud Integration"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Cloud Integration</h3>
          <p className="text-gray-600 leading-relaxed">
            We ensure your services are accessible anytime, anywhere with secure and scalable cloud integration.
          </p>
        </div>
      </section>

      {/* Section 4 (Alternate layout) */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-6 md:px-20">
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-semibold mb-4">Custom Development</h3>
          <p className="text-gray-600 leading-relaxed">
            Every organization is unique. We design and develop custom software solutions tailored to your exact requirements.
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/10/21/12/code-3073613_960_720.jpg"
            alt="Custom Software"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Final 4 Cards Section */}
      <section className="px-6 md:px-20 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Core Strengths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
            <Code className="mx-auto text-blue-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Clean Code</h4>
            <p className="text-gray-600">We prioritize maintainable, readable, and efficient code.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
            <Shield className="mx-auto text-green-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Top Security</h4>
            <p className="text-gray-600">Security is built into every layer of our development.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
            <Cloud className="mx-auto text-indigo-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Cloud First</h4>
            <p className="text-gray-600">Scalable, modern applications powered by the cloud.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg bg-white text-center hover:shadow-xl transition">
            <Settings className="mx-auto text-yellow-600 w-10 h-10 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Customizable</h4>
            <p className="text-gray-600">Every solution we deliver can be tailored to your vision.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAbout;
