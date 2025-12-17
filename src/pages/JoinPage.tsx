import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Users, Megaphone, Calendar, MessageSquare, ChevronRight } from 'lucide-react';

export function JoinPage() {
  const roles = [
    {
      id: 'volunteer',
      icon: Users,
      title: 'General Volunteer',
      description: 'Join grassroots mobilization efforts, engage with communities, and help spread the message.',
      commitment: 'Flexible hours based on availability',
    },
    {
      id: 'coordinator',
      icon: Megaphone,
      title: 'Grassroots Coordinator',
      description: 'Lead local organizing efforts, coordinate volunteers, and build community networks.',
      commitment: 'Leadership role with regular commitment',
    },
    {
      id: 'media',
      icon: MessageSquare,
      title: 'Media & Communications',
      description: 'Help with social media, content creation, graphics design, or digital outreach.',
      commitment: 'Flexible hours, creative skills needed',
    },
    {
      id: 'mobilisation',
      icon: Calendar,
      title: 'Event Mobilisation',
      description: 'Organize events, coordinate rallies, and drive voter engagement activities.',
      commitment: 'Event-based with flexible scheduling',
    },
  ];

  const benefits = [
    { icon: '🗳️', title: 'Real Impact', description: 'Your work directly contributes to meaningful change' },
    { icon: '🤝', title: 'Build Community', description: 'Connect with like-minded Nigerians who share your values' },
    { icon: '📚', title: 'Develop Skills', description: 'Gain experience in organizing, leadership, and civic engagement' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0B3D91] via-[#0A2F6E] to-[#082654] text-white py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-[#FF6F00] font-semibold text-sm uppercase tracking-wider" data-aos="fade-up">Get Involved</span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-6" data-aos="fade-up" data-aos-delay="100">Join the Movement</h1>
            <p className="text-2xl text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Be part of something bigger. Change does not happen from the sidelines—it happens when committed citizens stand up, organize, and act.
            </p>
          </div>
        </div>
      </section>

      {/* Why Get Involved */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#FF6F00] font-semibold text-sm uppercase tracking-wider" data-aos="fade-up">Why Join</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B3D91] mt-4 mb-6" data-aos="fade-up" data-aos-delay="100">Your Participation Matters</h2>
            <p className="text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Whether you want to volunteer, coordinate at the grassroots level, or support campaign activities, your participation makes the difference. This is a people-driven campaign, and every voice counts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg" data-aos="zoom-in" data-aos-delay={index * 100}>
                <CardContent className="pt-10 pb-8 px-8 text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold text-[#0B3D91] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-[#FF6F00] font-semibold text-sm uppercase tracking-wider" data-aos="fade-up">Opportunities</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0B3D91] mt-4 mb-6" data-aos="fade-up" data-aos-delay="100">Ways to Get Involved</h2>
            <p className="text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Choose a role that matches your skills, interests, and availability
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <Card key={role.id} className="border-2 border-gray-200 hover:border-[#0B3D91] transition-all shadow-sm" data-aos="fade-up" data-aos-delay={index * 100}>
                <CardContent className="pt-8 pb-6 px-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#0A2F6E] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <role.icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0B3D91] mb-3">{role.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{role.description}</p>
                      <p className="text-sm text-gray-500 italic">{role.commitment}</p>
                    </div>
                  </div>
                  <Link to={`/join/${role.id}`}>
                    <Button className="w-full bg-[#FF6F00] hover:bg-[#E66300] text-white">
                      Sign Up for {role.title}
                      <ChevronRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Sign Up CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0B3D91] via-[#0A2F6E] to-[#082654] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Not Sure Where to Start?</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-10 max-w-3xl mx-auto">
              Sign up as a general volunteer and we'll help you find the perfect role based on your interests and availability.
            </p>
            <Link to="/join/volunteer">
              <Button size="lg" className="bg-[#FF6F00] hover:bg-[#E66300] text-white px-10 py-6 text-lg h-auto shadow-xl">
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}