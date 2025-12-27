import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/ui/Hero";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Stats from "../components/ui/Stats";
import TestimonialCard from "../components/ui/TestimonialCard";
import Slider from "../components/ui/Slider";

const Home = () => {
  const navigate = useNavigate();

  const colleges = [
    {
      name: "Main Campus",
      description:
        "Comprehensive higher education offering BS, MA, BA, and specialized programs",
      image: "https://placehold.co/600x400?text=Main+Campus",
      path: "/campuses/main",
    },
    {
      name: "Law Campus",
      description:
        "Premier institution for legal education offering LLB and LLM programs",
      image: "https://placehold.co/600x400?text=Law+Campus",
      path: "/campuses/law",
    },
    {
      name: "Hala Campus",
      description:
        "Excellence in FSc, FA, ICS education and specialized programs",
      image: "https://placehold.co/600x400?text=Hala+Campus",
      path: "/campuses/hala",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Law Graduate 2024",
      content:
        "The faculty and resources at Best Law College helped me achieve my dream of becoming a lawyer.",
      image: "https://placehold.co/100x100?text=SA",
    },
    {
      name: "Muhammad Ali",
      role: "BS Computer Science Student",
      content:
        "The practical approach to education at the Degree College has prepared me well for my career.",
      image: "https://placehold.co/100x100?text=MA",
    },
    {
      name: "Fatima Khan",
      role: "FSc Pre-Medical",
      content:
        "Outstanding teachers and modern labs make learning engaging and effective.",
      image: "https://placehold.co/100x100?text=FK",
    },
  ];

  const stats = [
    {
      icon: BookOpen,
      value: "50+",
      label: "Programs",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Students",
    },
    {
      icon: Trophy,
      value: "95%",
      label: "Success Rate",
    },
    {
      icon: GraduationCap,
      value: "200+",
      label: "Faculty Members",
    },
  ];

  const highlights = [
    "Expert faculty with industry experience",
    "Modern facilities and laboratories",
    "International accreditation and partnerships",
    "Career counseling and placement support",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Empowering Futures through Quality Education"
        description="Join Pakistan's leading educational institution for a brighter tomorrow"
        image="https://placehold.co/1920x600?text=Campus+View"
        actions={[
          {
            size: "lg",
            className: "gap-2",
            onClick: () => navigate("/admissions"),
            children: <>Apply Now</>,
          },
          {
            children: "Learn More",
            variant: "outline",
            size: "lg",
            className:
              "border-white text-white hover:bg-white hover:text-primary-700",
          },
        ]}
      />

      <Section
        className="bg-gradient-to-r from-primary-700 to-primary-600"
        spacing="large"
      >
        <div className="text-center text-white">
          <Stats items={stats} variant="dark" />
        </div>
      </Section>

      <Section background="white">
        <Section.Header
          title="Our Mission"
          description="At Best Group of Colleges, we are committed to providing quality education that empowers students to excel in their chosen fields. Through innovative teaching methods, state-of-the-art facilities, and dedicated faculty, we prepare our students for successful careers and meaningful contributions to society."
        />
      </Section>

      <Section background="gray">
        <Section.Header title="Our Colleges" />
        <Slider>
          {colleges.map((college) => (
            <Card
              key={college.name}
              hover
              className="min-w-[300px] md:min-w-[350px]"
            >
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <Card.Body>
                <Card.Title>{college.name}</Card.Title>
                <p className="text-gray-600 mb-4">{college.description}</p>
                <Button
                  variant="outline"
                  as={Link}
                  to={college.path}
                  className="inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Slider>
      </Section>

      <Section background="white">
        <Section.Header title="Student Testimonials" />
        <Slider>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="min-w-[300px] md:min-w-[350px]"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
      </Section>

      <Section background="white">
        <Section.Header
          title="About Us"
          description="Discover what makes Best Group of Colleges a leader in educational excellence"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://placehold.co/500x400?text=About+Us"
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary-700 mb-4">
              Excellence in Education Since 1985
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Best Group of Colleges has been at the forefront of educational
              excellence for nearly four decades. Our commitment to academic
              rigor, student development, and community engagement has shaped
              thousands of successful careers.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With three dynamic campuses offering diverse programs from FSc to
              postgraduate studies, we provide a comprehensive educational
              ecosystem that nurtures talent and builds leaders.
            </p>
            <div className="space-y-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 group">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8" onClick={() => navigate("/about")}>
              Learn More About Us
            </Button>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <Section.Header
          title="Contact Us"
          description="Get in touch with us for admissions, inquiries, or more information"
        />
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover">
            <Card.Body>
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <Card.Title>Address</Card.Title>
              <p className="text-gray-600 text-sm">
                123 Education Street, Islamabad, Pakistan
              </p>
            </Card.Body>
          </Card>

          <Card className="text-center hover">
            <Card.Body>
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <Card.Title>Phone</Card.Title>
              <p className="text-gray-600 text-sm">+92 51 1234 5678</p>
            </Card.Body>
          </Card>

          <Card className="text-center hover">
            <Card.Body>
              <div className="flex justify-center mb-4">
                <div className="bg-primary-100 p-4 rounded-full">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <Card.Title>Email</Card.Title>
              <p className="text-gray-600 text-sm">info@bestcolleges.edu.pk</p>
            </Card.Body>
          </Card>
        </div>

        <Card>
          <Card.Body>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Inquiry about admissions"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition resize-none"
                ></textarea>
              </div>
              <Button className="md:col-span-2 w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card.Body>
        </Card>
      </Section>
    </div>
  );
};

export default Home;
