"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Section = ({ id, title, children, bg = "bg-black" }: any) => (
  <section
    id={id}
    className={`min-h-screen flex flex-col justify-center px-10 ${bg} text-white border-b border-gray-800`}
  >
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold mb-8 text-orange-500"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white selection:bg-orange-500">
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tighter">
          MIRAI <span className="text-orange-500">FOODS</span>
        </h1>
        <div className="space-x-8 hidden md:flex">
          {["Mission", "Solution", "Discounts","How it Works", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="hover:text-orange-500 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Section id="mission" title="Our Mission">
          <p className="text-xl max-w-2xl leading-relaxed text-gray-300">
            We are dedicated to bridging the gap between surplus high-quality
            food and conscious consumers. Our goal is to eliminate food waste in
            Ulaanbaatar one pastry at a time.
          </p>
        </Section>
        <Section id="solution" title="The Problem We Solve">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">
                For Bakeries
              </h3>
              <p className="text-gray-400">
                Reducing end-of-day waste and recouping costs on fresh items
                that would otherwise be discarded.
              </p>
            </div>
            <div className="p-6 border border-gray-700 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">
                For Consumers
              </h3>
              <p className="text-gray-400">
                Providing real-time access to premium baked goods at a fraction
                of the cost.
              </p>
            </div>
          </div>
        </Section>
        <Section id="discounts" title="Real-Time Discounts">
          <p className="text-xl text-gray-300">
            Our platform notifies you the moment your favorite local bakeries
            drop their prices. Stay updated, save money, and save food.
          </p>
        </Section>
  
        <Section id="how it works" title="How It Works" reverse={false}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 pb-6">
            {/* Step 1: Browse */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-4 rounded-3xl border border-white/5"
            >
              <div className="relative h-[400px] mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/1-portrait.png"
                  alt="Home Screen"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-orange-400 font-bold text-xl mb-2 text-center">
                1. Discover
              </h3>
              <p className="text-gray-500 text-sm text-center">
                Browse real-time discounts from top bakeries in Ulaanbaatar.
              </p>
            </motion.div>

            {/* Step 2: Details */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-4 rounded-3xl border border-white/5"
            >
              <div className="relative h-[400px] mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/3-portrait.png"
                  alt="Product Details"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-orange-400 font-bold text-xl mb-2 text-center">
                2. Select
              </h3>
              <p className="text-gray-500 text-sm text-center">
                Check freshness details and quantity remaining before it's gone.
              </p>
            </motion.div>

            {/* Step 3: Map */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-4 rounded-3xl border border-white/5"
            >
              <div className="relative h-[400px] mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/4-portrait.png"
                  alt="Map View"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-orange-400 font-bold text-xl mb-2 text-center">
                3. Locate
              </h3>
              <p className="text-gray-500 text-sm text-center">
                Find the exact bakery location on the map for easy pickup.
              </p>
            </motion.div>

            {/* Step 4: Checkout */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-zinc-900 p-4 rounded-3xl border border-white/5"
            >
              <div className="relative h-[400px] mb-6 rounded-2xl overflow-hidden">
                <Image
                  src="/2-portrait.png"
                  alt="Cart"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-orange-400 font-bold text-xl mb-2 text-center">
                4. Save
              </h3>
              <p className="text-gray-500 text-sm text-center">
                Complete your purchase and rescue delicious food from being
                wasted.
              </p>
            </motion.div>
          </div>
        </Section>
        <Section id="contact" title="Get In Touch">
          <div className="text-gray-400 space-y-4">
            <p>Email: amiamaraa66@gmail.com</p>
            
            <p>Location: Ulaanbaatar, Mongolia</p>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center border-t border-gray-800 text-gray-500">
        <p>&copy; 2026 Mirai Foods. All rights reserved.</p>
      </footer>
    </div>
  );
}
