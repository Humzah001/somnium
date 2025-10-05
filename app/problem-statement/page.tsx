export default function ProblemStatement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Problem Statement
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding the challenges we're solving and our roadmap to innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Challenge We Face
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Healthcare systems worldwide are struggling with fragmented data, inefficient processes, 
                and limited predictive capabilities. The current landscape presents significant challenges 
                that impact patient outcomes, operational efficiency, and cost management.
              </p>

              <div className="bg-red-50 rounded-xl p-6 my-8">
                <h3 className="text-xl font-semibold text-red-800 mb-4">
                  Key Problems Identified
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-red-800">Data Fragmentation:</strong>
                      <span className="text-red-700 ml-2">Critical patient information scattered across multiple systems</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-red-800">Limited Predictive Analytics:</strong>
                      <span className="text-red-700 ml-2">Inability to anticipate patient needs and optimize care delivery</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-red-800">Operational Inefficiencies:</strong>
                      <span className="text-red-700 ml-2">Manual processes leading to delays and increased costs</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <strong className="text-red-800">Integration Challenges:</strong>
                      <span className="text-red-700 ml-2">Difficulty connecting existing systems with new technologies</span>
                    </div>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Solution Approach
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe that the integration of advanced digital technologies can transform healthcare 
                delivery. Our approach focuses on creating seamless, intelligent systems that enhance 
                clinical decision-making and improve patient outcomes.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-orange-600">Immediate Solutions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Unified data platform</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Real-time monitoring systems</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Automated workflow optimization</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-orange-600">Long-term Vision</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">AI-powered predictive models</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Seamless system integration</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Enhanced patient engagement</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">
                  Our Commitment
                </h4>
                <p className="text-orange-700">
                  We are dedicated to solving these critical challenges through innovation, collaboration, 
                  and a deep understanding of healthcare needs. Our solutions are designed to be practical, 
                  scalable, and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
