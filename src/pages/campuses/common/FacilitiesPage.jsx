import Section from '../../../components/ui/Section';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import { Building, Wifi, Library, Activity } from 'lucide-react';

const FacilitiesPage = () => {
  const facilities = [
    {
      category: 'Academic Facilities',
      items: [
        {
          name: 'Modern Classrooms',
          description: 'Smart classrooms equipped with multimedia facilities',
          features: ['Interactive Whiteboards', 'AV Equipment', 'Air Conditioning'],
          icon: Building,
        },
        {
          name: 'Libraries',
          description: 'Well-stocked libraries with digital resources',
          features: ['Digital Catalogs', 'Study Rooms', 'Online Journals'],
          icon: Library,
        },
        {
          name: 'Computer Labs',
          description: 'State-of-the-art computer laboratories',
          features: ['High-Speed Internet', 'Latest Hardware', 'Technical Support'],
          icon: Wifi,
        },
      ],
    },
    {
      category: 'Student Facilities',
      items: [
        {
          name: 'Cafeteria',
          description: 'Modern cafeteria serving healthy and diverse food options',
          features: ['Hygienic Kitchen', 'Seating Area', 'Multiple Cuisines'],
          icon: Activity,
        },
        {
          name: 'Sports Complex',
          description: 'Comprehensive sports facilities',
          features: ['Indoor Games', 'Outdoor Fields', 'Fitness Center'],
          icon: Activity,
        },
        {
          name: 'Medical Center',
          description: '24/7 medical support facility',
          features: ['First Aid', 'Emergency Response', 'Health Counseling'],
          icon: Activity,
        },
      ],
    },
  ];

  return (
    <div>
      <Section>
        <Section.Header
          title="Campus Facilities"
          description="Explore our world-class facilities designed for academic excellence"
        />
        
        <div className="space-y-12">
          {facilities.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {category.items.map((facility) => (
                  <Card key={facility.name}>
                    <facility.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                    <p className="text-gray-600 mb-4">{facility.description}</p>
                    <div className="flex flex-col gap-2">
                      {facility.features.map((feature) => (
                        <Badge key={feature}>{feature}</Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default FacilitiesPage;