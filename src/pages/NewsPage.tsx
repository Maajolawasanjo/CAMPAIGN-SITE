import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import candidatePortrait from 'figma:asset/931709e4a666208ac8e1539c93e7f013df76d006.png';

export function NewsPage() {
  const [filter, setFilter] = useState<string>('all');

  const newsItems = [
    {
      id: 1,
      date: 'December 15, 2025',
      category: 'Campaign Announcement',
      title: 'Campaign Launch: A New Vision for Nigeria',
      excerpt: 'MA\'AJO LAWASANJO officially launches campaign with a vision for responsible leadership, inclusive growth, and lasting impact for all Nigerians.',
      content: 'Full statement available for review. The campaign emphasizes evidence-based policy, transparent governance, and citizen empowerment.',
      image: candidatePortrait,
      featured: true,
    },
    {
      id: 2,
      date: 'December 12, 2025',
      category: 'Press Release',
      title: 'Official Manifesto Released: Five Pillars for National Development',
      excerpt: 'Comprehensive policy platform addresses economic empowerment, education, security, healthcare, and governance reform with clear implementation timelines.',
      content: 'Detailed manifesto outlines specific objectives, measurable outcomes, and accountability mechanisms.',
      image: candidatePortrait,
      featured: false,
    },
    {
      id: 3,
      date: 'December 10, 2025',
      category: 'Event',
      title: 'Youth Empowerment Town Hall - Lagos',
      excerpt: 'Campaign hosts town hall focusing on opportunities for young Nigerians, with discussions on education, employment, and civic engagement.',
      content: 'Over 200 young Nigerians participated in dialogue on policy priorities and pathways to engagement.',
      image: candidatePortrait,
      featured: false,
    },
    {
      id: 4,
      date: 'December 8, 2025',
      category: 'Policy Statement',
      title: 'Statement on Economic Empowerment and SME Support',
      excerpt: 'MA\'AJO LAWASANJO issues detailed statement on the importance of supporting small and medium enterprises as engines of job creation.',
      content: 'Statement outlines policy commitments including access to capital, business development services, and regulatory reform.',
      image: candidatePortrait,
      featured: false,
    },
    {
      id: 5,
      date: 'December 5, 2025',
      category: 'Press Release',
      title: 'Campaign Opens Volunteer Registration Portal',
      excerpt: 'New digital platform enables citizens to join the campaign as volunteers across multiple engagement tracks.',
      content: 'Registration portal offers opportunities for field organizing, digital advocacy, policy research, and community outreach.',
      image: candidatePortrait,
      featured: false,
    },
    {
      id: 6,
      date: 'December 3, 2025',
      category: 'Official Statement',
      title: 'On Transparent Governance and Accountability',
      excerpt: 'Campaign reaffirms commitment to open government practices, public access to information, and citizen participation in decision-making.',
      content: 'Statement details specific transparency mechanisms including regular public reporting and digital platforms for feedback.',
      image: candidatePortrait,
      featured: false,
    },
  ];

  const categories = ['all', 'Campaign Announcement', 'Press Release', 'Event', 'Policy Statement', 'Official Statement'];

  const filteredNews = filter === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === filter);

  const categoryColors: Record<string, string> = {
    'Campaign Announcement': 'bg-[#FF6F00] text-white',
    'Press Release': 'bg-[#0B3D91] text-white',
    'Event': 'bg-[#0B3D91]/80 text-white',
    'Policy Statement': 'bg-gray-700 text-white',
    'Official Statement': 'bg-gray-600 text-white',
  };

  return (
    <div className="bg-white">
      {/* Hero - Clean Newsroom Header */}
      <section className="py-20 lg:py-24 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-[#0B3D91] text-xs font-bold uppercase tracking-[0.3em]">
                OFFICIAL NEWSROOM
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6" data-aos="fade-up" data-aos-delay="100">
              News & Updates
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Official statements, press releases, and campaign updates from the MA'AJO LAWASANJO campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3" data-aos="fade-up">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? 'default' : 'outline'}
                  className={filter === category 
                    ? 'bg-[#0B3D91] hover:bg-[#0A2F6E] text-white' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }
                  size="sm"
                >
                  {category === 'all' ? 'All News' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <Card 
                  key={item.id} 
                  className={`border-2 hover:shadow-lg transition-all ${
                    item.featured ? 'border-[#FF6F00] md:col-span-2 lg:col-span-3' : 'border-gray-200'
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4 gap-0">
                      {/* Image */}
                      <div className="md:col-span-1">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-3 p-6 lg:p-8">
                        <div className="flex items-center gap-4 mb-3">
                          <span className={`px-3 py-1 rounded text-xs font-bold ${categoryColors[item.category]}`}>
                            {item.category}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar size={14} />
                            <span>{item.date}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl text-gray-900 mb-3 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {item.excerpt}
                        </p>
                        
                        <button className="text-[#0B3D91] font-semibold text-sm hover:text-[#0A2F6E] inline-flex items-center gap-2 group">
                          Read More
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            {filteredNews.length > 6 && (
              <div className="mt-12 text-center">
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-[#0B3D91] hover:text-[#0B3D91] px-8 py-6 h-auto">
                  Load More Updates
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
              Stay Informed
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to receive official campaign updates, press releases, and event announcements.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded border-2 border-gray-300 text-gray-900 focus:outline-none focus:border-[#0B3D91]"
                required
              />
              <Button className="bg-[#0B3D91] hover:bg-[#0A2F6E] text-white px-8 py-4 h-auto whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Media Inquiries:</span> For press credentials, interview requests, or official statements, contact{' '}
              <a href="mailto:press@maajolawasanjo.ng" className="text-[#0B3D91] hover:underline">
                press@maajolawasanjo.ng
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}