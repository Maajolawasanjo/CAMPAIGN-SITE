import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowRight, Briefcase, GraduationCap, Shield, Heart, Building, ChevronDown, ChevronUp } from 'lucide-react';

export function ManifestoPage() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

  const pillars = [
    {
      id: 'economy',
      icon: Briefcase,
      title: 'Economic Empowerment',
      summary: 'Creating economic opportunities and supporting business growth across Nigeria.',
      keyPoints: [
        'Support for SMEs through access to capital and business development services',
        'Job creation programs targeting youth and underserved communities',
        'Investment policies that attract capital while protecting local businesses',
        'Infrastructure development to support economic activity',
      ],
      objectives: [
        'Establish SME support fund with transparent application process',
        'Launch skills-to-employment programs in partnership with private sector',
        'Review and reform tax policies to encourage entrepreneurship',
        'Develop digital economy infrastructure nationwide',
      ],
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education & Human Capital Development',
      summary: 'Building a skilled, educated population ready for the 21st century.',
      keyPoints: [
        'Increased funding for public education with strict oversight',
        'Skills-based and technology-driven curriculum reform',
        'Teacher training and professional development programs',
        'Youth-focused scholarship and mentorship initiatives',
      ],
      objectives: [
        'Increase education budget allocation to meet UNESCO standards',
        'Integrate digital literacy into primary and secondary curricula',
        'Establish teacher excellence programs with performance incentives',
        'Create 10,000 tech scholarships for underserved students annually',
      ],
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security & Rule of Law',
      summary: 'Ensuring safety, justice, and institutional integrity for all citizens.',
      keyPoints: [
        'Strengthening community-based security initiatives',
        'Professionalizing security institutions through training and accountability',
        'Zero tolerance for corruption in law enforcement',
        'Justice system reforms for faster, fairer outcomes',
      ],
      objectives: [
        'Deploy community policing units in all local government areas',
        'Institute mandatory training and regular audits for security personnel',
        'Establish independent oversight body for law enforcement',
        'Digitize court systems to reduce case backlogs',
      ],
    },
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare & Social Welfare',
      summary: 'Accessible, affordable healthcare as a fundamental right for all Nigerians.',
      keyPoints: [
        'Improved access to affordable healthcare services',
        'Support systems for vulnerable populations',
        'Strengthening primary healthcare infrastructure',
        'Health insurance expansion and reform',
      ],
      objectives: [
        'Upgrade primary healthcare centers in every local government',
        'Expand health insurance coverage to reach 50% of population',
        'Launch maternal and child health programs in rural areas',
        'Establish emergency response systems nationwide',
      ],
    },
    {
      id: 'governance',
      icon: Building,
      title: 'Transparency & Governance',
      summary: 'Open, accountable government that serves the people.',
      keyPoints: [
        'Open government practices with public access to information',
        'Clear, regular reporting on public spending and projects',
        'Citizen participation in policy-making and budgeting',
        'Digital platforms for government services and feedback',
      ],
      objectives: [
        'Publish all government contracts and budgets online',
        'Implement quarterly public reporting on all major projects',
        'Create digital platforms for citizen input on policies',
        'Establish anti-corruption hotlines with whistleblower protection',
      ],
    },
  ];

  const togglePillar = (id: string) => {
    setExpandedPillar(expandedPillar === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Hero - Clean and Minimal */}
      <section className="py-24 lg:py-32 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-[#0B3D91] text-xs font-bold uppercase tracking-[0.3em]">
                POLICY PLATFORM
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-[#0B3D91] mb-8" data-aos="fade-up" data-aos-delay="100">
              Our Manifesto
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              An agenda for progress. Five pillars for national development. Clear commitments backed by action plans.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6" data-aos="fade-up">
              An Agenda for Progress
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p data-aos="fade-up" data-aos-delay="100">
                This manifesto represents a commitment to the people of Nigeria. It is not a collection of empty promises, but a detailed agenda backed by research, consultation, and a deep understanding of the challenges our nation faces.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                Our agenda is built on five pillars, each addressing critical issues that affect everyday Nigerians. For each pillar, we have identified core challenges and outlined concrete solutions with clear timelines and accountability measures.
              </p>
              <p className="text-[#0B3D91] font-semibold" data-aos="fade-up" data-aos-delay="300">
                This is governance as it should be: transparent, accountable, and results-driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Pillars - Card Grid */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">
                Five Pillars for National Development
              </h2>
              <p className="text-lg text-gray-600">
                Expand each section to view detailed policy commitments
              </p>
            </div>

            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <Card 
                  key={pillar.id} 
                  className={`border-2 transition-all cursor-pointer ${
                    expandedPillar === pillar.id 
                      ? 'border-[#FF6F00] shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => togglePillar(pillar.id)}
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-0">
                    {/* Card Header */}
                    <div className="p-6 lg:p-8 flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                          expandedPillar === pillar.id 
                            ? 'bg-[#FF6F00]' 
                            : 'bg-[#0B3D91]'
                        }`}>
                          <pillar.icon className="text-white" size={28} strokeWidth={2} />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-2xl lg:text-3xl text-[#0B3D91] mb-3">
                          {index + 1}. {pillar.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {pillar.summary}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedPillar === pillar.id ? (
                          <ChevronUp className="text-[#FF6F00]" size={28} />
                        ) : (
                          <ChevronDown className="text-gray-400" size={28} />
                        )}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedPillar === pillar.id && (
                      <div className="border-t border-gray-200 bg-gray-50 p-6 lg:p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Key Policy Points */}
                          <div>
                            <h4 className="text-lg font-bold text-[#0B3D91] mb-4">
                              Key Policy Points
                            </h4>
                            <ul className="space-y-3">
                              {pillar.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#FF6F00] mt-2"></div>
                                  <span className="text-gray-700 leading-relaxed">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Specific Objectives */}
                          <div>
                            <h4 className="text-lg font-bold text-[#0B3D91] mb-4">
                              Specific Objectives
                            </h4>
                            <ul className="space-y-3">
                              {pillar.objectives.map((objective, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0B3D91] flex items-center justify-center text-white text-xs font-bold">
                                    {idx + 1}
                                  </div>
                                  <span className="text-gray-700 leading-relaxed">{objective}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">
                How We'll Deliver
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0B3D91] flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">01</span>
                  </div>
                  <h3 className="text-xl text-[#0B3D91] mb-3">Evidence-Based</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every policy backed by data, research, and consultation with experts and communities
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0B3D91] flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">02</span>
                  </div>
                  <h3 className="text-xl text-[#0B3D91] mb-3">Collaborative</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Working with communities, experts, and all stakeholders to ensure success
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-gray-200 bg-white">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-[#0B3D91] flex items-center justify-center mb-4">
                    <span className="text-2xl text-white">03</span>
                  </div>
                  <h3 className="text-xl text-[#0B3D91] mb-3">Action-Oriented</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Clear timelines, measurable outcomes, and regular progress reporting
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6">
              Ready to Build This Future?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              This agenda becomes reality through collective action. Join us or support our campaign to bring these plans to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/join">
                <Button size="lg" className="bg-[#0B3D91] hover:bg-[#0A2F6E] text-white px-10 py-6 text-lg h-auto">
                  Join the Campaign
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-10 py-6 text-lg h-auto">
                  Support the Movement
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}