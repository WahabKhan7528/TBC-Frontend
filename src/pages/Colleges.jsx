import {
  GraduationCap,
  BookOpen,
  School,
  Building,
  Users,
  Trophy,
  Book,
} from "lucide-react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Stats from "../components/ui/Stats";

const Colleges = () => {
  const colleges = [
    {
      name: "Law Campus",
      icon: GraduationCap,
      programs: ["Bachelor of Laws (LLB)", "Master of Laws (LLM)"],
      description:
        "Our Law Campus provides comprehensive legal education with a focus on both theoretical knowledge and practical skills. Students benefit from mock courts, legal clinics, and expert faculty.",
      features: [
        "State-of-the-art Law Library",
        "Moot Court Facility",
        "Legal Aid Clinic",
        "Distinguished Faculty",
      ],
      image: "https://placehold.co/800x400?text=Law+Campus",
    },
    {
      name: "Main Campus",
      icon: BookOpen,
      programs: [
        "Bachelor of Science (BS)",
        "Master of Arts (MA)",
        "Bachelor of Arts (BA)",
      ],
      description:
        "The Main Campus offers a wide range of undergraduate and graduate programs in sciences and arts. Our focus is on providing quality education with modern facilities.",
      features: [
        "Well-equipped Laboratories",
        "Research Facilities",
        "Digital Library",
        "Career Counseling",
      ],
      image: "https://placehold.co/800x400?text=Main+Campus",
    },
    {
      name: "Hala Campus",
      icon: School,
      programs: [
        "FSc (Pre-Medical)",
        "FSc (Pre-Engineering)",
        "FA (Arts)",
        "ICS (Computer Science)",
      ],
      description:
        "Our Hala Campus prepares students for higher education with strong foundation in sciences and arts. We focus on both academic excellence and personal growth.",
      features: [
        "Modern Science Labs",
        "Computer Labs",
        "Sports Facilities",
        "Experienced Faculty",
      ],
      image: "https://placehold.co/800x400?text=Hala+Campus",
    },
  ];

  const stats = [
    {
      icon: Building,
      value: "3",
      label: "Campuses",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Students",
    },
    {
      icon: Trophy,
      value: "30+",
      label: "Years of Excellence",
    },
    {
      icon: Book,
      value: "50+",
      label: "Programs",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Section background="blue" spacing="large">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Colleges</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Discover our range of educational institutions offering quality
            education across various disciplines
          </p>
          <div className="mt-12">
            <Stats items={stats} variant="dark" />
          </div>
        </div>
      </Section>

      <Section spacing="large">
        <div className="space-y-20">
          {colleges.map((college, index) => (
            <Card key={college.name} className="overflow-hidden">
              <div
                className={`flex flex-col lg:flex-row gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* College Image */}
                <div className="w-full lg:w-1/2">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>

                {/* College Information */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center gap-3">
                    <college.icon className="h-8 w-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      {college.name}
                    </h2>
                  </div>

                  <p className="text-gray-600 text-lg">{college.description}</p>

                  {/* Programs */}
                  <Card className="bg-gray-50">
                    <Card.Title className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-blue-600" />
                      Programs Offered
                    </Card.Title>
                    <Card.Body>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {college.programs.map((program) => (
                          <li
                            key={program}
                            className="flex items-center text-gray-600"
                          >
                            <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                            {program}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>

                  {/* Features */}
                  <Card className="bg-gray-50">
                    <Card.Title className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-blue-600" />
                      Key Features
                    </Card.Title>
                    <Card.Body>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {college.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-gray-600"
                          >
                            <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <Button size="lg">View Details</Button>
                    <Button variant="outline" size="lg">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="blue" spacing="large">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards your future. Apply now to join one of
            our prestigious colleges.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg">
              Download Prospectus
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Colleges;
