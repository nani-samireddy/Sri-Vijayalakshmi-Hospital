import Image from "next/image";
import logo from "../logo.svg";

export const metadata = {
  title: "Ratna Medicals - Sri Vijaya Lakshmi Hospital | 24/7 Pharmacy Services",
  description: "Ratna Medicals is the trusted in-house pharmacy at Sri Vijaya Lakshmi Hospital. Quality medicines, healthcare products, and professional pharmaceutical services available 24/7.",
  keywords: "Ratna Medicals, pharmacy, medical shop, medicines, healthcare products, Sri Vijaya Lakshmi Hospital, prescription drugs, OTC medicines",
};

export default function RatnaMedicals() {
  const services = [
    {
      title: "Prescription Medicines",
      description: "Wide range of prescription drugs from leading pharmaceutical companies with proper documentation and guidance.",
      icon: "💊",
    },
    {
      title: "OTC Medications",
      description: "Over-the-counter medicines for common ailments including pain relief, cold & flu, digestive health, and more.",
      icon: "🏥",
    },
    {
      title: "Medical Supplies",
      description: "Surgical equipment, first-aid supplies, medical devices, and healthcare essentials for home and hospital use.",
      icon: "🩹",
    },
    {
      title: "Baby Care Products",
      description: "Complete range of baby care essentials including diapers, feeding bottles, baby food, and hygiene products.",
      icon: "👶",
    },
    {
      title: "Health Supplements",
      description: "Vitamins, minerals, protein supplements, and nutritional products to support your overall health and wellness.",
      icon: "💪",
    },
    {
      title: "Diabetic Care",
      description: "Specialized products for diabetes management including glucose meters, test strips, insulin supplies, and diabetic footwear.",
      icon: "🩺",
    },
    {
      title: "Surgical Disposables",
      description: "Comprehensive range of syringes, gloves, bandages, cotton, gauze, and other medical consumables.",
      icon: "🧤",
    },
    {
      title: "Personal Care",
      description: "Health and hygiene products including sanitizers, masks, thermometers, and personal wellness items.",
      icon: "🧴",
    },
  ];

  const categories = [
    "Pharmaceutical Medicines",
    "Surgical Items & Disposables",
    "Medical Equipment",
    "Baby Care Products",
    "Diabetic Supplies",
    "Health & Wellness",
    "First Aid Supplies",
    "Ayurvedic & Herbal Products",
  ];

  const features = [
    "Authentic & Quality Medicines",
    "Licensed Pharmacists on Duty",
    "Competitive Pricing",
    "Wide Product Range",
    "Convenient Hospital Location",
    "Professional Consultation Available",
    "Emergency Medicine Availability",
    "Insurance Billing Support",
  ];

  const metrics = [
    { title: "24/7", description: "Service Availability" },
    { title: "5000+", description: "Products in Stock" },
    { title: "100%", description: "Authentic Medicines" },
    { title: "Licensed", description: "Certified Pharmacy" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-[50vh] pt-16 md:h-[60vh] flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center md:gap-3 z-10 px-4">
          <p className="text-3xl md:text-3xl lg:text-5xl text-center font-bold">
            <span className="text-white bg-blue-500 p-2 rounded whitespace-nowrap">
              Ratna Medicals
            </span>
          </p>
          <p className="text-center text-xl md:text-2xl lg:text-3xl lg:w-3/5 mt-4">
            Your Trusted Pharmacy Partner
          </p>
          <p className="text-center text-base md:text-lg lg:text-xl lg:w-4/5 mt-2">
            Quality medicines and healthcare products available 24/7 at Sri Vijaya Lakshmi Hospital
          </p>
          <a href="#contact">
            <button className="bg-[#FF6B6B] text-white rounded-full px-[26px] py-[14px] mt-8 hover:bg-[#ff5252] transition-colors">
              Contact Pharmacy
            </button>
          </a>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <Image className="w-full h-full -z-10 object-contain" src={logo} alt="Hospital Logo" />
        </div>
      </section>

      {/* About Section */}
      <section className="mt-10 flex flex-col md:flex-row items-center justify-between w-[90%] md:w-[80%] gap-10">
        <div className="w-full text-left md:w-[48%]">
          <h1 className="text-3xl md:text-4xl font-semibold py-6 leading-[1.4]">
            About Ratna Medicals
          </h1>
          <p className="text-left leading-[1.7] mb-4">
            Ratna Medicals is the in-house pharmacy at Sri Vijaya Lakshmi Hospital, dedicated to providing authentic medicines, healthcare products, and professional pharmaceutical services to our patients and community.
          </p>
          <p className="text-left leading-[1.7] mb-4">
            As a licensed and certified pharmacy, we maintain the highest standards of quality and authenticity. Our experienced and qualified pharmacists are committed to ensuring that you receive the right medications with proper guidance and consultation.
          </p>
          <div className="mt-6 space-y-2">
            <p className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Licensed and certified pharmacy with proper documentation</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Wide range of prescription and OTC medications</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Genuine pharmaceutical products from trusted brands</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Experienced and qualified pharmacists available</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Convenient location within hospital premises</span>
            </p>
            <p className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span>Competitive pricing with transparent billing</span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-[48%] flex items-center justify-center">
          <div className="w-full aspect-square max-w-md bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-8xl mb-4">💊</div>
              <h3 className="text-2xl font-semibold text-blue-800">Quality Healthcare</h3>
              <p className="text-blue-600 mt-2">Serving the community with care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-10 px-6 rounded-3xl bg-[#fafafa] w-[90%] md:w-[80%] flex flex-row flex-wrap items-center justify-evenly gap-y-10">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center min-w-[150px]"
          >
            <h1 className="text-4xl font-semibold text-[#1c274c]">
              {metric.title}
            </h1>
            <p className="text-center mt-2">{metric.description}</p>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section id="services" className="w-[90%] md:w-[80%]">
        <h1 className="font-semibold text-3xl md:text-4xl text-center my-10">
          Our Services
        </h1>
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 justify-center flex-wrap">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl w-full md:w-80 lg:w-96 border hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h1 className="font-semibold text-xl md:text-2xl my-3">
                {service.title}
              </h1>
              <p className="leading-[1.6]">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="w-[90%] md:w-[80%]">
        <h1 className="font-semibold text-3xl md:text-4xl text-center my-10">
          Product Categories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border bg-white hover:bg-blue-50 transition-colors text-center"
            >
              <p className="font-medium text-lg">{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-[90%] md:w-[80%]">
        <h1 className="font-semibold text-3xl md:text-4xl text-center my-10">
          Why Choose Ratna Medicals?
        </h1>
        <div className="py-10 px-6 md:px-12 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-blue-500 text-2xl flex-shrink-0">✓</span>
                <p className="text-lg font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Contact Section */}
      <section
        id="contact"
        className="w-[90%] md:w-[80%] flex flex-col items-center justify-center"
      >
        <h1 className="font-semibold text-3xl md:text-4xl text-center my-10">
          Operating Hours & Contact
        </h1>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 p-8 rounded-2xl border bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Operating Hours
            </h2>
            <div className="space-y-3">
              <p className="flex justify-between items-center">
                <span className="font-medium">All Days:</span>
                <span className="text-blue-600">24/7 Service</span>
              </p>
              <p className="text-sm text-gray-600 mt-4">
                We are open round the clock to serve you with all your pharmaceutical needs.
              </p>
            </div>
          </div>
          <div className="flex-1 p-8 rounded-2xl border bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-gray-700">Location:</p>
                <p className="mt-1">Ground Floor, Sri Vijaya Lakshmi Hospital</p>
                <a
                  href="https://maps.app.goo.gl/Ve2XLtWriEmdhXZ47"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-1 block"
                >
                  View on Google Maps →
                </a>
              </div>
              <div>
                <p className="font-medium text-gray-700">Phone:</p>
                <a
                  href="tel:+918331888668"
                  className="text-blue-600 hover:underline mt-1 block"
                >
                  +91 83318 88668
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-[90%] md:w-[80%] py-16 px-8 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Need Medicines or Healthcare Products?
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Visit Ratna Medicals today or call us to check medicine availability. Our experienced pharmacists are here to assist you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+918331888668">
            <button className="bg-white text-blue-600 rounded-full px-8 py-4 font-semibold hover:bg-gray-100 transition-colors">
              Call Now: +91 83318 88668
            </button>
          </a>
          <a href="#contact">
            <button className="bg-[#FF6B6B] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#ff5252] transition-colors">
              Get Directions
            </button>
          </a>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="w-[90%] md:w-[80%] mb-10">
        <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
            Professional Pharmaceutical Services
          </h2>
          <p className="leading-[1.7] mb-4">
            At Ratna Medicals, we go beyond just dispensing medicines. Our qualified pharmacists provide professional consultations to help you understand your medications, their proper usage, potential side effects, and drug interactions.
          </p>
          <p className="leading-[1.7] mb-4">
            We accept all major insurance plans and provide proper documentation for insurance claims. Our team is trained to handle emergency medicine requirements and can assist you with urgent pharmaceutical needs at any time.
          </p>
          <p className="leading-[1.7]">
            Visit us at our conveniently located pharmacy on the ground floor of Sri Vijaya Lakshmi Hospital, or contact us for any inquiries about medicine availability and pharmaceutical services.
          </p>
        </div>
      </section>
    </>
  );
}
