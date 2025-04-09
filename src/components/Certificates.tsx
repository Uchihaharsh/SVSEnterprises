import { type FC, useState } from 'react';
import { certificateImages } from '../assets/certificateImages';

const certificates = [
  {
    title: 'Certificate of Compliance',
    certNumber: 'US-AWEX-25-1224187',
    validUntil: 'February 2028',
    description: 'AGNI KAWACH EXTINGUISHER CO.',
    type: 'CE Certification',
    image: certificateImages.ceCertificate,
    details: [
      'Name: AGNI KAWACH EXTINGUISHER CO.',
      'Address: PLOT NO. E-51/14, MIDC CHIKALTHANA, AURANGABAD - 431001, MAHARASHTRA, INDIA',
      'Product: MANUFACTURER OF AUTOMATIC FIRE EXTINGUISHER BALL',
      'Certificate No: US-AWEX-25-1224187',
      'Complies with the requirements applicable to it',
      'Valid until: 11th FEB 2028'
    ]
  },
  {
    title: 'Quality Management System',
    certNumber: 'QMS/230620/4540',
    validUntil: 'February 2028',
    description: 'ISO 9001:2015 Certification',
    type: 'ISO Standard',
    image: certificateImages.iso9001,
    details: [
      'This is to certify that',
      'AGNI KAWACH EXTINGUISHER CO.',
      'PLOT NO. E-51/14, MIDC CHIKALTHANA, AURANGABAD - 431001, MAHARASHTRA, INDIA',
      'Has been found in compliance with requirement of',
      'Quality Management System ISO 9001:2015',
      'Certificate No: QMS/230620/4540',
      'Original Certificate Date: 11th - February -2025',
      'Expiry Date: 10th - February -2028'
    ]
  },
  {
    title: 'Environmental Management System',
    certNumber: 'EMS/230620/4541',
    validUntil: 'February 2028',
    description: 'ISO 14001:2015 Certification',
    type: 'ISO Standard',
    image: certificateImages.iso14001,
    details: [
      'This is to certify that',
      'AGNI KAWACH EXTINGUISHER CO.',
      'PLOT NO. E-51/14, MIDC CHIKALTHANA, AURANGABAD - 431001, MAHARASHTRA, INDIA',
      'Has been found in compliance with requirement of',
      'Environmental Management System ISO 14001:2015',
      'Certificate No: EMS/230620/4541',
      'Original Certificate Date: 11th - February -2025',
      'Expiry Date: 10th - February -2028'
    ]
  },
  {
    title: 'TEST CERTIFICATE',
    certNumber: 'NTHNWR/WR/2022/00374',
    validUntil: 'May 2022',
    description: 'National Test House (Western Region)',
    type: 'Government Certificate',
    image: certificateImages.nthCertificate,
    details: [
      'NATIONAL TEST HOUSE (Western region)',
      'Ministry of Consumer Affairs, Food & Public Distribution',
      'Department of Consumer Affairs',
      'Government of India',
      'Code No: 185538182213R',
      'Customer Ref. No: AKNTH/101',
      'Product: Fire Extinguisher Ball, Brand Name: AGNI KAWACH FIRE EXTINGUISHER',
      'Date of Issue: 01/06/2022'
    ]
  },
  {
    title: 'CERTIFICATE OF RECOGNITION',
    certNumber: 'DIPP134488',
    validUntil: 'February 2033',
    description: 'Department for Promotion of Industry and Internal Trade',
    type: 'Government Recognition',
    image: certificateImages.startupIndia,
    details: [
      'This is to certify that Agni Kawach Extinguisher Co.',
      'registered as a Registered Partnership on 17-02-2023',
      'is recognized as a startup by the Department for Promotion of Industry and Internal Trade',
      'Working in \'Chemicals\' Industry and \'Specialty Chemicals\' sector',
      'Certificate No: DIPP134488',
      'Date of Issue: 06-06-2023',
      'Valid Upto: 16-02-2033'
    ]
  },
  {
    title: 'Certificate of Compliance',
    certNumber: 'US-ANEN-24-068085',
    validUntil: 'June 2027',
    description: 'UL Certification',
    type: 'Safety Standard',
    image: certificateImages.ulCertification,
    details: [
      'This is to certify that',
      'AGNI KAWACH EXTINGUISHER CO.',
      'A/7/2/8, CHIKALTHANA MIDC, CHIKALTHANA, AURANGABAD – 431007, INDIA',
      'has been independently assessed by IAB accreditation and is compliance with the standard',
      'UL (UL Certification)',
      'Certificate Number: US-ANEN-24-068085',
      'Date of Certification: 06TH JUNE 2024',
      'Re-Certificate Due: 05TH JUNE 2027'
    ]
  }
];

const CertificateCard = ({ cert }: { cert: typeof certificates[0] }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="border-2 border-gray-100 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
              {cert.type}
            </span>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
              ✓ Verified
            </span>
          </div>

          {/* Certificate Image */}
          <div 
            className="relative mb-4 cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => setShowModal(true)}
          >
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-64 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
            <div className="absolute bottom-2 right-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
              </svg>
              <span>Click to view</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{cert.description}</p>

          {showDetails && (
            <div className="space-y-2 text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
              {cert.details.map((detail, idx) => (
                <p key={idx} className="font-medium">{detail}</p>
              ))}
            </div>
          )}
        </div>

        <div className="text-center">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>
      </div>

      {/* Modal for enlarged view */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-lg p-2"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute -top-4 -right-4 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <img 
              src={cert.image} 
              alt={cert.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

const Certificates: FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Certifications
          </h2>
          <p className="text-xl text-gray-600">
            Certified for Quality, Safety, and Environmental Standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All certificates are verified and up-to-date. For verification details, please contact us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates; 