import Hero from '../../components/ui/Hero';
import Section from '../../components/ui/Section';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { BookOpen, Award, Users, Clock } from 'lucide-react';

const LawCollege = () => {
  const programs = [
    {
      title: 'LLB (5 Years)',
      description: 'Bachelor of Laws program designed for intermediate graduates',
      duration: '5 Years',
      seats: 100,
    },
    {
      title: 'LLM',
      description: 'Master of Laws program for specialized legal education',
      duration: '2 Years',
      seats: 50,
    },
  ];

  const facilities = [
    {
      icon: BookOpen,
      title: 'Law Library',
      description: 'Extensive collection of legal resources and research materials',
    },
    {
      icon: Users,
      title: 'Moot Court',
      description: 'State-of-the-art moot court for practical training',
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Law College"
        subtitle="Excellence in Legal Education"
        centered
      />

      <Section>
        <Section.Header
          title="About Our Law College"
          description="Our Law College is dedicated to producing competent legal professionals through quality education, practical training, and exposure to real-world legal scenarios."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p className="text-gray-600">
              To be a leading institution in legal education, producing skilled legal professionals who contribute to justice and society.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p className="text-gray-600">
              To provide quality legal education through innovative teaching methods and practical exposure to legal proceedings.
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

export default LawCollege;