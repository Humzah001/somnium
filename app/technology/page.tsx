export default function Technology() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Technology
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Cutting-edge innovations that power the future of healthcare and digital solutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced Technology Stack
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our technology platform combines artificial intelligence, machine learning, and advanced 
                data analytics to create innovative solutions that transform how we approach healthcare 
                and digital interactions.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">Core Technologies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Machine Learning Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Real-time Data Processing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Advanced Visualization</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Cloud Infrastructure</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-green-600">Key Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Predictive Analytics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Automated Decision Support</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Secure Data Management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Scalable Architecture</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation Pipeline
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                We continuously invest in research and development to stay at the forefront of technological 
                innovation. Our team of engineers and scientists work tirelessly to push the boundaries of 
                what's possible in digital health solutions.
              </p>

              <div className="bg-green-50 rounded-xl p-6 my-8">
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Future Developments
                </h4>
                <p className="text-green-700">
                  Our roadmap includes advanced AI models, enhanced real-time processing capabilities, 
                  and expanded integration options with existing healthcare systems. We're committed 
                  to delivering solutions that not only meet current needs but anticipate future challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
