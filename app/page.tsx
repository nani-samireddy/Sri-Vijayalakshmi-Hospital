import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import heroImage from "./hero.jpg";
import VijayaLakshmi from "./vijayalakshmi.jpeg";
import Madhav from "./madhav.jpeg";

export default function Home() {
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-32 items-center justify-center sm:items-center w-full">
        <section className="mt-10 flex items-center justify-between w-[80%]">
          <div className="w-[40%]">
            <h1 className="text-4xl font-semibold text-center py-6 sm:text-left leading-[1.4]">Compassionate Care, Advanced Medicine</h1>
            <p className="text-center sm:text-left">
              At Sri Vijaya Lakshmi Hospital, we blend advanced technology with compassionate, personalized care. From routine check-ups to specialized treatments, your health and well-being are our priority.
            </p>
            <button className="bg-[#FF6B6B] text-white rounded-full px-4 py-2 mt-8">Book an Appointment</button>
          </div>
          <div className="w-[40%]">
            <Image className="rounded-3xl" src={heroImage} width={800} height={500} alt="hero" />
          </div>
        </section>

        {/* Metrics */}
        <section className="py-20 rounded-3xl bg-[#fafafa] w-full flex items-center justify-evenly">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-semibold text-[#1c274c]">{metric.title}</h1>
              <p className="text-center">{metric.description}</p>
            </div>
          ))}
        </section>
        {/* Doctors */}
        <section>
          <h1 className="font-semibold text-4xl text-center my-10">Our Doctors</h1>
          <div className="flex items-start gap-10 justify-center">
            {
              doctors.map((doctor, index) => (
                <div key={index} className=" w-[450px] bg-gray-100 rounded-3xl flex flex-col items-start justify-between p-4">
                  <Image
                    className="rounded-3xl w-full h-72 object-cover"
                    src={doctor.image}
                    width={800}
                    height={500}
                    alt="hero" />
                  <div className="text-left py-5 p-4">
                    <h1 className=" font-semibold text-xl my-2">{doctor.name} <sub>{doctor.qualification}</sub></h1>
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
      </main>
      <Footer />
    </div>
  );
}
