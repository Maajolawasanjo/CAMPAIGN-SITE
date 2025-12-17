import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Users, Target, Shield, Heart, Briefcase, ChevronRight, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import candidateHero from 'figma:asset/046e5de882c4d4092d722a9520ba668894e1008b.png';

export function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION — Authority Meets Momentum */}
      <section className="relative bg-[#0B3D91] text-white overflow-hidden">
        {/* Background Image for Mobile - Full Bleed */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={candidateHero}
            alt="MA'AJO LAWASANJO"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B3D91]/80 via-[#0B3D91]/85 to-[#0B3D91]/90"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center min-h-[85vh] sm:min-h-[85vh] py-12 sm:py-16 lg:py-20">
            {/* Left: Headline + CTAs */}
            <div className="relative z-10 lg:pr-8">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="text-[#FF6F00] text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded">
                  Campaign 2025
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
                Leadership Rooted in Integrity
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 leading-relaxed mb-8 sm:mb-10 max-w-xl" data-aos="fade-up" data-aos-delay="100">
                A leader committed to transparent governance, economic empowerment, and sustainable development for all Nigerians.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="200">
                <Link to="/support" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-[#FF6F00] hover:bg-[#E66300] text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg h-auto shadow-xl min-h-[48px]">
                    Donate Now
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                <Link to="/join" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#0B3D91] px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg h-auto bg-[rgba(255,255,255,0)] min-h-[48px]">
                    Join Campaign
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Candidate Image - Desktop Only */}
            <div className="hidden lg:block relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2">
              <div className="relative h-full" data-aos="fade-up" data-aos-duration="900">
                <img
                  src={candidateHero}
                  alt="MA'AJO LAWASANJO"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91] via-[#0B3D91]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDIBILITY SNAPSHOT — Why This Candidate Matters */}
      <section className="py-16 lg:py-20 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  <Award className="text-[#0B3D91]" size={28} />
                </div>
                <div className="text-5xl text-[#0B3D91] mb-3">10+</div>
                <div className="text-gray-600 text-lg">Years of Community Service</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  <Target className="text-[#0B3D91]" size={28} />
                </div>
                <div className="text-5xl text-[#0B3D91] mb-3">5</div>
                <div className="text-gray-600 text-lg">Policy Pillars for National Development</div>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
                  <Shield className="text-[#0B3D91]" size={28} />
                </div>
                <div className="text-5xl text-[#0B3D91] mb-3">100%</div>
                <div className="text-gray-600 text-lg">Commitment to Transparency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION PREVIEW — Direction Without Overload */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-6">
                A Government That Works
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Leadership anchored on responsible governance, measurable outcomes, and accountability. Public office is a trust—every decision must reflect that trust.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-gray-200 hover:border-[#0B3D91] transition-all" data-aos="zoom-in" data-aos-delay="100">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded bg-[#0B3D91] flex items-center justify-center mb-5">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-[#0B3D91] mb-3">
                    People-First Leadership
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Governance driven by citizen needs, not political convenience.
                  </p>
                  <Link to="/vision" className="text-[#0B3D91] font-semibold inline-flex items-center hover:text-[#FF6F00] transition-colors">
                    Learn More
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-[#0B3D91] transition-all" data-aos="zoom-in" data-aos-delay="200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded bg-[#0B3D91] flex items-center justify-center mb-5">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-[#0B3D91] mb-3">
                    Economic Empowerment
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Creating opportunities for sustainable growth and prosperity.
                  </p>
                  <Link to="/vision" className="text-[#0B3D91] font-semibold inline-flex items-center hover:text-[#FF6F00] transition-colors">
                    Learn More
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200 hover:border-[#0B3D91] transition-all" data-aos="zoom-in" data-aos-delay="300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded bg-[#0B3D91] flex items-center justify-center mb-5">
                    <CheckCircle2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-[#0B3D91] mb-3">
                    Transparent Governance
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Open, accountable leadership with measurable results.
                  </p>
                  <Link to="/vision" className="text-[#0B3D91] font-semibold inline-flex items-center hover:text-[#FF6F00] transition-colors">
                    Learn More
                    <ChevronRight size={18} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/vision">
                <Button size="lg" variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-10 py-6 text-lg h-auto">
                  Read Full Vision
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANIFESTO HIGHLIGHTS — Policy, Simplified */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0B3D91] mb-4 sm:mb-6">
                Five Pillars for Progress
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                A comprehensive, evidence-based agenda for national development
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-10 sm:mb-12">
              {[
                { title: 'Economic Empowerment', icon: Briefcase },
                { title: 'Education & Skills', icon: Target },
                { title: 'Security & Justice', icon: Shield },
                { title: 'Healthcare & Welfare', icon: Heart },
                { title: 'Good Governance', icon: CheckCircle2 },
              ].map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <Card key={index} className="border-2 border-gray-200 hover:border-[#0B3D91] hover:bg-gray-50 transition-all cursor-pointer group" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <CardContent className="p-4 sm:p-6 text-center">
                      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gray-100 group-hover:bg-[#0B3D91] flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all">
                        <Icon className="text-[#0B3D91] group-hover:text-white transition-colors" size={18} />
                      </div>
                      <h3 className="text-xs sm:text-sm text-gray-900 leading-snug">
                        {pillar.title}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center">
              <Link to="/manifesto" className="w-full sm:w-auto inline-block">
                <Button size="lg" className="w-full sm:w-auto bg-[#0B3D91] hover:bg-[#0A2F6E] text-white px-10 py-6 text-base sm:text-lg h-auto min-h-[48px]">
                  View Full Manifesto
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRACK RECORD PREVIEW — Proof of Competence */}
      <section className="py-20 lg:py-28 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-6">
                  Proven Track Record
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  A decade of grassroots organizing, community development, and youth empowerment. This campaign is built on experience, not speculation.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-green-600" size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Community Organizing (2015-2017)</div>
                      <div className="text-gray-600">15+ forums, 500+ citizens engaged</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-green-600" size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Education Advocacy (2018-2020)</div>
                      <div className="text-gray-600">5 schools supported, 120+ teachers trained</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <CheckCircle2 className="text-green-600" size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Transparency Campaigns (2021-2023)</div>
                      <div className="text-gray-600">1,000+ citizens mobilized, 2 policy reforms</div>
                    </div>
                  </div>
                </div>
                <Link to="/track-record">
                  <Button variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-8 py-6 h-auto">
                    View Full Track Record
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
                <Card className="border-2 border-gray-200" data-aos="fade-up" data-aos-delay="100">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl text-[#0B3D91] mb-2">1,500+</div>
                    <div className="text-sm text-gray-600">Citizens Directly Engaged</div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-200" data-aos="fade-up" data-aos-delay="200">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl text-[#0B3D91] mb-2">20+</div>
                    <div className="text-sm text-gray-600">Communities Served</div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-200" data-aos="fade-up" data-aos-delay="300">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl text-[#0B3D91] mb-2">10+</div>
                    <div className="text-sm text-gray-600">Years of Service</div>
                  </CardContent>
                </Card>
                <Card className="border-2 border-gray-200" data-aos="fade-up" data-aos-delay="100">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl text-[#0B3D91] mb-2">100%</div>
                    <div className="text-sm text-gray-600">Commitment</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MOBILISATION CTA — Join the Movement */}
      <section className="py-20 lg:py-24 bg-[#0B3D91] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl mb-6">
              Be Part of the Change
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto">
              Change doesn't happen from the sidelines. Join thousands of Nigerians working to build a better future.
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-[#FF6F00] hover:bg-[#E66300] text-white px-12 py-7 text-lg h-auto shadow-xl">
                Join the Movement
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FUNDRAISING CTA — Support the Campaign */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 shadow-lg" data-aos="zoom-in">
              <CardContent className="p-10 lg:p-14">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">
                      Support the Campaign
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      Running a credible, people-driven campaign requires resources. Your contribution funds community outreach, voter education, and campaign events.
                    </p>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                        <span>Secure and transparent handling</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                        <span>All contributions support campaign activities</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                        <span>Receipt provided for all donations</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Link to="/support">
                      <Button size="lg" className="w-full bg-[#FF6F00] hover:bg-[#E66300] text-white py-6 text-lg h-auto mx-[0px] my-[3px]">
                        Donate Now
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                    <Link to="/support">
                      <Button size="lg" variant="outline" className="w-full border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white py-6 text-lg h-auto mx-[0px] my-[3px]">
                        View Support Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 8. LATEST NEWS PREVIEW — Transparency & Activity */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl lg:text-5xl text-[#0B3D91] mb-4">
                  Latest Updates
                </h2>
                <p className="text-lg text-gray-600">
                  Official campaign news and announcements
                </p>
              </div>
              <Link to="/news" className="hidden md:block">
                <Button variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white">
                  View All News
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  category: 'Campaign Announcement', 
                  title: 'Campaign Launch: A New Vision for Nigeria', 
                  date: 'December 15, 2025' 
                },
                { 
                  category: 'Press Release', 
                  title: 'Official Manifesto Released', 
                  date: 'December 12, 2025' 
                },
                { 
                  category: 'Event', 
                  title: 'Youth Empowerment Town Hall - Lagos', 
                  date: 'December 10, 2025' 
                },
              ].map((item, index) => (
                <Card key={index} className="border-2 border-gray-200 hover:border-[#0B3D91] transition-all cursor-pointer group" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                  <CardContent className="p-6">
                    <div className="text-xs font-bold text-[#FF6F00] mb-3 uppercase tracking-wide">
                      {item.category}
                    </div>
                    <h3 className="text-xl text-gray-900 mb-4 leading-snug group-hover:text-[#0B3D91] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-sm text-gray-500">{item.date}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10 md:hidden">
              <Link to="/news">
                <Button variant="outline" className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white">
                  View All News
                  <ChevronRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}