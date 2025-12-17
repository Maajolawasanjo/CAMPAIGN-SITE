import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import candidatePortrait from 'figma:asset/4b45e68182863871be5a49e5d9c75a06dbd75fb4.png';

export function AboutPage() {
  const timeline = [
    {
      year: 'Early Years',
      title: 'Shaped by Community',
      description: 'Growing up in Nigeria, MA\'AJO witnessed firsthand the challenges faced by ordinary citizens—limited access to quality education, economic uncertainty, and weak public institutions.',
    },
    {
      year: 'Education & Service',
      title: 'Building a Foundation',
      description: 'Through discipline and determination, he pursued education and entered public service with a clear mission: to work for the people, not personal gain.',
    },
    {
      year: 'Leadership Experience',
      title: 'Earning Trust Through Action',
      description: 'Over 10+ years of community leadership and public engagement, he has consistently demonstrated integrity, transparency, and commitment to grassroots development.',
    },
    {
      year: 'Today',
      title: 'A Campaign for Change',
      description: 'This campaign represents a commitment to responsible governance, institutional reform, and policies that empower every Nigerian.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Portrait */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Portrait */}
              <div className="lg:col-span-2" data-aos="fade-right">
                <div className="relative">
                  <img
                    src={candidatePortrait}
                    alt="MA'AJO LAWASANJO"
                    className="w-full rounded-sm shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-sm"></div>
                </div>
              </div>

              {/* Intro Text */}
              <div className="lg:col-span-3 space-y-6" data-aos="fade-left">
                <div>
                  <div className="text-sm uppercase tracking-widest text-gray-500 mb-3">About</div>
                  <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6">
                    MA'AJO LAWASANJO
                  </h1>
                  <div className="w-16 h-1 bg-[#FF6F00] mb-6"></div>
                </div>
                <p className="text-2xl text-gray-700 leading-relaxed">
                  A leader shaped by community, discipline, and service—committed to building a Nigeria that works for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story - Two Column */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-4">The Man Behind the Mandate</h2>
              <div className="w-20 h-0.5 bg-[#FF6F00]"></div>
            </div>

            {/* Two Column Text */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-lg text-gray-700 leading-relaxed">
              <div className="space-y-6" data-aos="fade-up" data-aos-delay="100">
                <p>
                  MA'AJO LAWASANJO is a leader shaped by community, discipline, and service. His journey reflects the everyday Nigerian experience—understanding the challenges of education, employment, security, and economic survival from the ground up.
                </p>
                <p>
                  Born into a society where opportunity is often dictated by circumstance rather than merit, he learned early that change requires more than hope—it demands commitment, transparency, and accountability.
                </p>
                <p>
                  His path into public life was not driven by ambition for power, but by a deep belief that government must serve the people, not the other way around.
                </p>
              </div>
              <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                <p>
                  Through years of community engagement and grassroots organizing, MA'AJO has consistently demonstrated that leadership is measured not by titles, but by impact. Not by words, but by results.
                </p>
                <p>
                  His philosophy is simple: public office is a trust. Every decision must be transparent. Every policy must be evidence-based. Every action must reflect the needs of the people.
                </p>
                <p className="text-[#0B3D91] font-semibold italic border-l-4 border-[#FF6F00] pl-6">
                  "We don't need more politicians. We need public servants who understand that governance is responsibility, not privilege."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-4">The Journey</h2>
              <div className="w-20 h-0.5 bg-[#FF6F00]"></div>
            </div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-300" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#0B3D91]"></div>
                  <div className="text-sm uppercase tracking-widest text-[#FF6F00] mb-2">{item.year}</div>
                  <h3 className="text-2xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Minimal */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-4">What Guides Him</h2>
              <div className="w-20 h-0.5 bg-[#FF6F00]"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Integrity & Transparency',
                  description: 'Commitment to honest, open governance in all public service activities. No backdoor deals. No hidden agendas.',
                },
                {
                  title: 'People-First Governance',
                  description: 'Policies and decisions driven by the needs of citizens, not special interests or political expediency.',
                },
                {
                  title: 'Youth Empowerment',
                  description: 'Creating opportunities and platforms for young Nigerians to thrive, innovate, and lead.',
                },
                {
                  title: 'Accountability',
                  description: 'Leadership that takes responsibility and delivers measurable results. Regular reporting. Open communication.',
                },
              ].map((value, index) => (
                <div key={index} className="space-y-3" data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3 className="text-2xl text-gray-900">{value.title}</h3>
                  <div className="w-12 h-0.5 bg-[#FF6F00]"></div>
                  <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-20 lg:py-28 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-4">Leadership Philosophy</h2>
              <div className="w-20 h-0.5 bg-[#FF6F00]"></div>
            </div>

            <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
              <p className="text-2xl text-gray-900 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                Public office is a trust, not a position of power. Leadership is about empowering others and creating systems that serve all people equitably.
              </p>

              <div className="grid md:grid-cols-3 gap-8 pt-8">
                {[
                  { step: '01', title: 'Listen to the People', desc: 'The best policies emerge from genuine dialogue with the communities they serve.' },
                  { step: '02', title: 'Execute with Purpose', desc: 'Plans are worthless without implementation. We deliver on our commitments.' },
                  { step: '03', title: 'Remain Accountable', desc: 'Transparency in action, regular reporting, and open communication always.' },
                ].map((principle, index) => (
                  <div key={index} className="space-y-3" data-aos="zoom-in" data-aos-delay={index * 100}>
                    <div className="text-5xl font-light text-[#FF6F00]">{principle.step}</div>
                    <h3 className="text-xl text-gray-900">{principle.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{principle.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Campaign */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-8" data-aos="fade-up">A Responsibility to Nigeria</h2>
            <div className="w-20 h-0.5 bg-[#FF6F00] mx-auto mb-10"></div>
            <p className="text-xl text-gray-700 leading-relaxed mb-12" data-aos="fade-up" data-aos-delay="100">
              This campaign is not about ambition for power; it is about responsibility to the people. With a clear vision for progress and a deep understanding of grassroots realities, MA'AJO LAWASANJO is committed to building a society where government works for everyone—not just a privileged few.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link to="/vision">
                <Button size="lg" className="bg-[#0B3D91] hover:bg-[#0A2F6E] text-white px-10 py-6 text-lg h-auto">
                  Read Our Vision
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/manifesto">
                <Button size="lg" variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-10 py-6 text-lg h-auto">
                  View Manifesto
                  <ChevronRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}