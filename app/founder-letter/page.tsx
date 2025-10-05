export default function FounderLetter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Founder Letter
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A personal message from our founder about vision, mission, and the journey ahead.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">F</span>
                </div>
                <p className="text-gray-600 italic">A message from the Founder & CEO</p>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Dear Friends and Colleagues,
                </p>
                
                <p>
                  I founded Somnium with a simple yet profound vision: to bridge the gap between 
                  cutting-edge technology and real-world healthcare challenges. Having spent years 
                  in both the technology and healthcare sectors, I've witnessed firsthand the 
                  incredible potential that exists when these two worlds converge.
                </p>

                <p>
                  Our journey began with a recognition that healthcare systems, despite their 
                  noble mission, often struggle with inefficiencies that impact both providers 
                  and patients. We saw an opportunity to apply advanced digital technologies— 
                  artificial intelligence, machine learning, and real-time analytics—to create 
                  solutions that could truly make a difference.
                </p>

                <div className="bg-purple-50 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold text-purple-800 mb-3">
                    Our Mission
                  </h3>
                  <p className="text-purple-700">
                    To transform healthcare through innovative digital solutions that enhance 
                    patient outcomes, streamline operations, and empower healthcare professionals 
                    with the tools they need to deliver exceptional care.
                  </p>
                </div>

                <p>
                  What sets Somnium apart is our commitment to understanding the real challenges 
                  faced by healthcare providers. We don't just build technology for technology's 
                  sake—we develop solutions that address genuine needs, integrate seamlessly with 
                  existing systems, and deliver measurable value.
                </p>

                <p>
                  Our team brings together diverse expertise in healthcare, technology, and data 
                  science. This multidisciplinary approach allows us to see problems from multiple 
                  angles and develop comprehensive solutions that work in the real world.
                </p>

                <div className="bg-indigo-50 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                    Looking Forward
                  </h3>
                  <p className="text-indigo-700">
                    As we continue to grow and evolve, our focus remains on innovation, quality, 
                    and impact. We're excited about the possibilities that lie ahead and grateful 
                    for the trust and partnership of our clients and collaborators.
                  </p>
                </div>

                <p>
                  The future of healthcare is digital, and we're proud to be at the forefront of 
                  this transformation. Together, we can build a healthcare system that is more 
                  efficient, more effective, and more patient-centered.
                </p>

                <p>
                  Thank you for being part of this journey with us.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-semibold text-gray-900">[Founder Name]</p>
                  <p className="text-gray-600">Founder & CEO, Somnium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
