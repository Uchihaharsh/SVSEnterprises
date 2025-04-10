import { FileDown, Download } from 'lucide-react';

const Brochure = () => {
  const handleDownload = () => {
    // The PDF file should be in the public folder
    const link = document.createElement('a');
    link.href = '/brochures/agni-kawach-brochure.pdf';
    link.download = 'Agni-Kawach-Fire-Ball-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Download Our Brochure
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get detailed information about our fire safety solutions
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <FileDown className="w-20 h-20 text-red-600 dark:text-red-500" />
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Agni Kawach Product Brochure
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Learn more about features, specifications, and installation guidelines
                </p>
              </div>

              <button
                onClick={handleDownload}
                className="inline-flex items-center px-8 py-4 bg-red-600 dark:bg-red-500 text-white rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                PDF format • 2.5 MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure; 