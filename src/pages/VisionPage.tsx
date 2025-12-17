import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Eye, Users, Target, TrendingUp, Lightbulb, Shield } from 'lucide-react';

export function VisionPage() {
  const visionPoints = [
    {
      icon: Eye,
      title: 'Efficient Government',
      description: 'Systems that work, institutions that deliver, and leadership that executes.',
    },
    {
      icon: Users,
      title: 'Responsive Leadership',
      description: 'Government that listens to citizens and acts on their concerns.',
    },
    {
      icon: Target,
      title: 'Measurable Outcomes',
      description: 'Clear metrics, transparent reporting, and accountability for results.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Progress',
      description: 'Development that benefits this generation and protects the next.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Led Solutions',
      description: 'Using modern tools and data to solve age-old problems.',
    },
    {
      icon: Shield,
      title: 'Institutional Integrity',
      description: 'Building systems that outlast individual leaders.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero - Full Width Bold */}
      <section className="relative bg-[#0B3D91] text-white py-32 lg:py-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block mb-4">
                  <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                    OUR VISION
                  </span>
                </div>
                <h1 className="lg:text-8xl font-bold leading-none mb-8 text-[48px]">
                  A Government<br />That Works
                </h1>
              </div>
              <p className="text-2xl lg:text-3xl font-light text-blue-100 leading-relaxed max-w-4xl mx-auto">
                Leadership rooted in responsibility. A Nigeria where citizens are empowered and institutions are strengthened.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement - White BG, Strong Typography */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            <div data-aos="fade-up">
              <h2 className="text-5xl lg:text-6xl text-gray-900 leading-tight mb-8">
                The Vision
              </h2>
              <div className="w-24 h-1 bg-[#FF6F00] mb-10"></div>
            </div>
            <div className="space-y-8 text-xl lg:text-2xl text-gray-700 leading-relaxed">
              <p data-aos="fade-up" data-aos-delay="100">
                The vision of <span className="font-semibold text-[#0B3D91]">MA'AJO LAWASANJO</span> is anchored on <span className="text-[#0B3D91] font-semibold">responsible governance</span> that delivers real outcomes.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                He believes that government must be <span className="font-semibold">efficient, responsive, and measurable.</span> Public office is a trust, and every decision must reflect that trust.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                This campaign is built on the belief that national development is achieved when <span className="text-[#0B3D91] font-semibold">citizens are empowered, institutions are strengthened, and leadership is accountable.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Nigeria Where - Orange Block */}
      <section className="py-28 lg:py-36 bg-[#FF6F00] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                We Envision a Nigeria Where...
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {[
                'Economic opportunity is accessible to all, not concentrated in the hands of a few',
                'Education, healthcare, and security are fundamental rights, not privileges',
                'Government operates with transparency and responds to the people it serves',
                'Young people have the tools, support, and platforms to build their futures',
                'Institutions are strong, fair, and trusted by citizens',
                'Development is sustainable and benefits every region of the nation',
              ].map((item, index) => (
                <div key={index} className="flex gap-6 items-start" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex-shrink-0 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{index + 1}</span>
                  </div>
                  <p className="text-xl lg:text-2xl text-white leading-relaxed pt-2">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Principles - Icon Grid */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20" data-aos="fade-up">
              <div className="inline-block mb-4">
                <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                  FOUNDATION
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Governance Principles
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {visionPoints.map((point, index) => (
                <div key={index} className="text-center space-y-4" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className="w-20 h-20 bg-[#0B3D91] rounded-full flex items-center justify-center mx-auto">
                    <point.icon className="text-white" size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{point.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs - Blue Block */}
      <section className="py-28 lg:py-36 bg-[#0B3D91] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20" data-aos="fade-up">
              <div className="inline-block mb-4">
                <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                  CORE BELIEFS
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                What Drives Us
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              {[
                {
                  title: 'Citizen Empowerment',
                  description: 'National development happens when citizens have access to education, opportunity, and the resources to thrive. Government\'s role is to create enabling environments, not barriers.',
                },
                {
                  title: 'Strong Institutions',
                  description: 'Lasting progress requires institutions that outlive individual leaders. We must build systems that are transparent, fair, and resilient.',
                },
                {
                  title: 'Accountable Leadership',
                  description: 'Leaders must answer to the people they serve. Regular reporting, open communication, and measurable outcomes are non-negotiable.',
                },
                {
                  title: 'Inclusive Growth',
                  description: 'Economic development must benefit all Nigerians—urban and rural, young and old, from every region and background.',
                },
              ].map((belief, index) => (
                <div key={index} className="space-y-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <h3 className="text-3xl font-bold text-white">{belief.title}</h3>
                  <div className="w-16 h-1 bg-[#FF6F00]"></div>
                  <p className="text-xl text-blue-100 leading-relaxed">{belief.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision in Action - White Block */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20" data-aos="fade-up">
              <div className="inline-block mb-4">
                <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                  IMPLEMENTATION
                </span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                From Vision to Reality
              </h2>
              <p className="text-2xl text-gray-600">
                This vision becomes reality through concrete action:
              </p>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Clear Policy Framework', desc: 'Detailed plans with timelines, budgets, and implementation strategies' },
                { title: 'Community Engagement', desc: 'Regular consultation with citizens to ensure policies meet real needs' },
                { title: 'Transparent Execution', desc: 'Public access to progress reports, budget allocation, and outcomes' },
                { title: 'Continuous Improvement', desc: 'Policies adapted based on results, feedback, and changing needs' },
              ].map((item, index) => (
                <div key={index} className="flex gap-8 items-start border-l-4 border-[#FF6F00] pl-8 py-4" data-aos="fade-right" data-aos-delay={index * 100}>
                  <div className="flex-shrink-0 w-16 h-16 bg-[#0B3D91] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-xl text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Blue Block */}
      <section className="py-28 lg:py-36 bg-gradient-to-br from-[#0B3D91] via-[#0A2F6E] to-[#082654] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-bold mb-10 leading-tight" data-aos="fade-up">
              Join Us in Building<br />a Better Nigeria
            </h2>
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              This vision requires more than one person. It requires a movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
              <Link to="/manifesto">
                <Button size="lg" className="bg-[#FF6F00] hover:bg-[#E66300] text-white px-12 py-7 text-xl h-auto shadow-xl">
                  See Our Manifesto
                  <ArrowRight className="ml-2" size={24} />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#0B3D91] px-12 py-7 text-xl h-auto bg-[rgba(255,255,255,0)]">
                  Join the Movement
                  <ArrowRight className="ml-2" size={24} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}