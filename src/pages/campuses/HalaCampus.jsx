import Hero from "../../components/ui/Hero";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import { BookOpen, Award, Users, Clock } from "lucide-react";

const HalaCampus = () => {
  const programs = [
    {
      title: "FSc Pre-Medical",
      description:
        "Faculty of Science with focus on Biology, Chemistry, and Physics",
      duration: "2 Years",
      seats: 150,
    },
    {
      title: "FSc Pre-Engineering",
      description: "Faculty of Science with focus on Mathematics and Physics",
      duration: "2 Years",
      seats: 150,
    },
    {
      title: "ICS",
      description: "Information Computer Science program",
      duration: "2 Years",
      seats: 100,
    },
    {
      title: "I.Com",
      description: "Intermediate in Commerce",
      duration: "2 Years",
      seats: 100,
    },
  ];

  const facilities = [
    {
      icon: BookOpen,
      title: "Science Labs",
      description: "Well-equipped Physics, Chemistry, and Biology laboratories",
    },
    {
      icon: Users,
      title: "Computer Labs",
      description: "Modern computer labs with latest software and hardware",
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Hala Campus"
        subtitle="Building Strong Foundations"
        centered
      />

      <Section>
        <Section.Header
          title="About Our Hala Campus"
          description="Our Hala Campus provides quality education at the FSc, FA, and ICS levels, preparing students for higher education and professional success."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p className="text-gray-600">
              To be a leading intermediate institution fostering academic
              excellence and personal growth.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p className="text-gray-600">
              To provide quality intermediate education and prepare students for
              successful careers and higher education.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <Section.Header title="Our Programs" />
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.title}>
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge>
                  <Clock className="w-4 h-4 mr-1" />
                  {program.duration}
                </Badge>
                <Badge>
                  <Users className="w-4 h-4 mr-1" />
                  {program.seats} seats
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <Section.Header title="Our Facilities" />
        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility) => (
            <Card key={facility.title}>
              <facility.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default HalaCampus;
