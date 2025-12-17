import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';

export function TrackRecordPage() {
  const timeline = [
    {
      year: '2015-2017',
      phase: 'Community Foundations',
      achievements: [
        {
          title: 'Grassroots Community Organizing',
          description: 'Established community forums and town halls to facilitate dialogue between citizens and local authorities.',
          metrics: [
            '15+ community forums organized',
            '500+ citizens directly engaged',
            '3 local government areas covered',
          ],
        },
        {
          title: 'Youth Mentorship Initiative',
          description: 'Launched mentorship program connecting young Nigerians with professionals and leaders.',
          metrics: [
            '80+ young people mentored',
            '12-month structured program',
            '65% employment/education placement rate',
          ],
        },
      ],
    },
    {
      year: '2018-2020',
      phase: 'Scaling Impact',
      achievements: [
        {
          title: 'Education Access Advocacy',
          description: 'Championed initiatives to improve school infrastructure and teacher training in underserved areas.',
          metrics: [
            '5 schools supported with resources',
            '120+ teachers trained',
            'Improved enrollment rates by 15%',
          ],
        },
        {
          title: 'Local Economic Development',
          description: 'Facilitated small business workshops and connected entrepreneurs with microfinance resources.',
          metrics: [
            '200+ entrepreneurs trained',
            '45 businesses received capital support',
            '₦8.5M in loans facilitated',
          ],
        },
      ],
    },
    {
      year: '2021-2023',
      phase: 'Leadership & Governance',
      achievements: [
        {
          title: 'Transparency Advocacy',
          description: 'Led campaigns for open government, budget transparency, and citizen participation in public projects.',
          metrics: [
            '3 transparency campaigns executed',
            '1,000+ citizens mobilized',
            'Influenced 2 policy reforms',
          ],
        },
        {
          title: 'Community Security Initiatives',
          description: 'Worked with community leaders to establish neighborhood watch programs and improve police-community relations.',
          metrics: [
            '8 neighborhoods covered',
            '40% reduction in petty crime (reported)',
            'Improved trust between citizens and authorities',
          ],
        },
      ],
    },
    {
      year: '2024-Present',
      phase: 'National Campaign',
      achievements: [
        {
          title: 'Building a Movement',
          description: 'Launched comprehensive campaign platform addressing national challenges with evidence-based solutions.',
          metrics: [
            'Platform with 5 policy pillars',
            'Growing volunteer network',
            'Grassroots-to-national approach',
          ],
        },
      ],
    },
  ];

  const impactStats = [
    { number: '10+', label: 'Years of Community Service' },
    { number: '1,500+', label: 'Citizens Directly Engaged' },
    { number: '20+', label: 'Communities Served' },
    { number: '100%', label: 'Commitment to Transparency' },
  ];

  const testimonials = [
    {
      quote: 'MA\'AJO has been a consistent voice for our community. When others made promises, he showed up and did the work.',
      author: 'Community Leader, Lagos',
    },
    {
      quote: 'The youth mentorship program changed my trajectory. I gained skills, confidence, and connections that led to real opportunities.',
      author: 'Program Participant, 2016',
    },
    {
      quote: 'His approach to governance is refreshing—evidence-based, transparent, and focused on results rather than rhetoric.',
      author: 'Civil Society Advocate',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                PROVEN LEADERSHIP
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-[#0B3D91] mb-8" data-aos="fade-up" data-aos-delay="100">
              Track Record
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Leadership is measured by action, not words. Here's what has been accomplished through years of public service and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">Key Milestones</h2>
              <div className="w-20 h-0.5 bg-[#FF6F00]"></div>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-10 border-l-2 border-gray-300" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="absolute left-0 top-0 w-3 h-3 bg-[#FF6F00] rounded-full border-2 border-white"></div>
                  <div className="space-y-2">
                    <div className="text-sm text-[#FF6F00] font-bold uppercase tracking-wider">
                      {item.year}
                    </div>
                    <h3 className="text-2xl lg:text-3xl text-[#0B3D91]">
                      {item.phase}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {item.achievements.map((achievement, achIndex) => (
                      <Card key={achIndex} className="border-2 border-gray-200 bg-white">
                        <CardContent className="p-6 lg:p-8">
                          <h4 className="text-xl text-[#0B3D91] mb-3">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {achievement.description}
                          </p>
                          <div className="bg-gray-50 p-4 rounded">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                              Measurable Impact
                            </div>
                            <ul className="space-y-2">
                              {achievement.metrics.map((metric, metricIndex) => (
                                <li key={metricIndex} className="flex items-start gap-3">
                                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0B3D91] mt-2"></div>
                                  <span className="text-gray-700 text-sm">{metric}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">
                What People Say
              </h2>
              <p className="text-lg text-gray-600">
                Voices from the communities served over the past decade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-gray-200 bg-gray-50">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="text-5xl text-[#0B3D91] mb-4">"</div>
                      <p className="text-gray-700 leading-relaxed italic">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-gray-300">
                      <p className="text-sm text-gray-600">
                        — {testimonial.author}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Statement */}
      <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6">
              Experience that Informs Policy
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                This track record is not just a resume—it's the foundation of this campaign's policy platform. Every proposal is informed by real experience working with communities, understanding their challenges, and seeing what works.
              </p>
              <p>
                The work done at the grassroots level provides genuine insight into the realities faced by everyday Nigerians. It's not about speculation or theory. It's about solutions tested in the field, refined through feedback, and backed by results.
              </p>
              <p className="text-[#0B3D91] font-semibold">
                This campaign is built on a decade of showing up, listening, and delivering—not just making promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6">
              From Community Service to National Leadership
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              This track record demonstrates commitment to service and accountability. With your support, we'll scale this approach to create transformative change for all Nigerians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/manifesto">
                <Button size="lg" className="bg-[#0B3D91] hover:bg-[#0A2F6E] text-white px-10 py-6 text-lg h-auto">
                  See Our Full Agenda
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-10 py-6 text-lg h-auto">
                  Join the Campaign
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