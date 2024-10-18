import Image from "next/image";
import heroImage from "./hero.jpg";
import VijayaLakshmi from "./vijayalakshmi.jpeg";
import Madhav from "./madhav.jpeg";
import logo from "./logo.svg";
import generalMed from './general.svg';
import ord from './ord.svg';
import ped from './ped.svg';

export default function Home() {

  const services = [
    {
      title: "General Medicine",
      description: "Our general medicine department provides comprehensive care for a wide range of medical conditions. Our experienced physicians offer personalized treatment plans to ensure your well-being.",
      image: generalMed
    },
    {
      title: "Orthopedics",
      description: "Our orthopedic department specializes in the diagnosis and treatment of musculoskeletal conditions. Our expert doctors provide advanced care for joint, knee, and sports-related injuries.",
      image: ord
    },
    {
      title: "Pediatrics",
      description: "Our pediatric department offers specialized care for children of all ages. Our expert doctors provide routine check-ups, vaccinations, and treatment for a wide range of pediatric conditions.",
      image: ped
    }
  ];
  const metrics = [
    {
      title: "100%",
      description: "Satisfaction rate",
    },
    {
      title: "10+",
      description: "Years of experience",
    },
    {
      title: "1000+",
      description: "Happy patients",
    },
    {
      title: "10+",
      description: "Expert doctors",
    },
  ];

  const doctors = [
    {
      name: "Dr. Vijaya Lakshmi",
      qualification: "M.B.B.S., D.N.B. (OBG)",
      specialization: "Obstetrics and Gynecology",
      expertise: [
        "General Checkups for Women’s Health",
        "Pregnancy and Postpartum Care",
        "Gynecological Conditions and Surgeries",
        "Infertility Treatments and Counseling",
        "Prenatal and Antenatal Care, Family Planning",
        "Minimally Invasive Gynecological Surgeries",
        "High-Risk Pregnancy Management",
      ],
      image: VijayaLakshmi,
    },
    {
      name: "Dr. Madhav",
      qualification: "M.S., D.N.B. (Ortho)",
      specialization: "FISS (Nanavati, Mumbai), FESS (South Korea)",
      expertise: [
        "Joint, Knee, and Sports-related Injuries",
        "Bone and Joint Surgeries, Arthroscopy Surgeries",
        "Ligament Repairs, Joint Replacements, Keyhole Surgeries",
        "Treatment for Arthritis and other Bone-Related Issues",
        "Fracture Management, Orthopedic Rehabilitation",
      ],
      image: Madhav,
    }
  ];

  return (
    <>
      <section id="hero" className="relative h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3 z-10">
          <p className="text-2xl md:text-3xl lg:text-5xl font-medium text-center leading-[1.7]">Welcome to <span className="font-bold text-white bg-blue-500 p-2 rounded whitespace-nowrap">Sri Vijaya Lakshmi Hospital</span></p>
          <p className="text-center md:text-2xl lg:text-3xl lg:w-3/5">“Your health is our priority. We provide compassionate care and advanced medicine to ensure your well-being.”</p>
        </div>
        <div className=" absolute top-0 left-0 w-full h-full opacity-30">
          <Image className="w-full h-full -z-10" src={logo} width={200} height={200} alt="logo" />
        </div>
      </section>
      <section className="mt-10 flex flex-col-reverse md:flex-row items-center justify-between w-[80%]">
        <div className="w-full text-left md:w-[40%]">
          <h1 className="text-4xl font-semibold py-6 text-left leading-[1.4]">Compassionate Care, Advanced Medicine</h1>
          <p className="text-left">
            At Sri Vijaya Lakshmi Hospital, we blend advanced technology with compassionate, personalized care. From routine check-ups to specialized treatments, your health and well-being are our priority.
          </p>
          <button className="bg-[#FF6B6B] text-white rounded-full px-[26px] py-[14px] mt-8">Book an Appointment</button>
        </div>
        <div className="w-full md:w-[40%]">
          <Image className="rounded-3xl" src={heroImage} width={800} height={500} alt="hero" />
        </div>
      </section>

      {/* Metrics */}
      <section className="py-10 mg:py-20 rounded-3xl bg-[#fafafa] w-full flex flex-row flex-wrap items-center justify-evenly gap-y-10">
        {metrics.map((metric, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold text-[#1c274c]">{metric.title}</h1>
            <p className="text-center">{metric.description}</p>
          </div>
        ))}
      </section>
      {/* Serivces */}
      <section id="services">
        <h1 className="font-semibold text-4xl text-center my-10">Our Services</h1>
        <div className="flex flex-col md:flex-row items-start gap-10 justify-center flex-wrap">
          {
            services.map((service, index) => (
              <div key={index} className="p-6 rounded-2xl w-96 border">
                <Image src={service.image} width={30} height={30} alt="hero" />
                <h1 className="font-semibold text-2xl my-3">{service.title}</h1>
                <p>{service.description}</p>
              </div>
            ))
          }
        </div>
      </section>
      {/* Doctors */}
      <section id="doctors">
        <h1 className="font-semibold text-4xl text-center my-10">Our Doctors</h1>
        <div className="flex flex-col lg:flex-row items-start gap-10 justify-center">
          {
            doctors.map((doctor, index) => (
              <div key={index} className=" w-[450px] rounded-3xl flex flex-col items-start justify-between p-4 border">
                <Image
                  className="rounded-3xl w-full h-72 object-cover"
                  src={doctor.image}
                  width={800}
                  height={500}
                  alt="hero" />
                <div className="text-left py-5 p-4">
                  <h1 className=" font-semibold text-xl my-2">{doctor.name} <sub className="font-light">{doctor.qualification}</sub></h1>
                  <p className="my-4"><span className="font-semibold">Specialization: </span>{doctor.specialization}</p>
                  <ul className=" list-disc list-inside flex flex-col gap-2">
                    <p><span className="font-semibold">Expertise:</span></p>
                    {
                      doctor.expertise.map((expertise, index) => (
                        <li key={index}>{expertise}</li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      {/* Contact */}
      <section className="  flex flex-col items-center justify-center" id="contact">
        <h1 className="font-semibold text-4xl my-10">Contact Us</h1>
        <p>Email: <a href="mailto:srivijayalakshmihospital@gmail.com"> srivijayalakshmihospital@gmail.com </a></p>
        <p>Phone: <a href="tel:+91 83318 88668"> +91 83318 88668 </a></p>
      </section>
    </>
  );
}
