import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Download, Mail, FileText, Image } from 'lucide-react';
import candidatePortrait from 'figma:asset/931709e4a666208ac8e1539c93e7f013df76d006.png';
import candidateFull from 'figma:asset/7e5e29cb6c8adc5641b2e16b34a0cd701919e75a.png';

export function MediaPage() {
  const pressReleases = [
    {
      date: 'December 2025',
      title: 'Campaign Launch: MA\'AJO LAWASANJO Announces Candidacy',
      file: 'campaign-launch-2025.pdf',
    },
    {
      date: 'December 2025',
      title: 'Official Manifesto: Five Pillars for National Development',
      file: 'manifesto-2025.pdf',
    },
    {
      date: 'December 2025',
      title: 'Statement on Youth Empowerment and Inclusion',
      file: 'youth-statement-2025.pdf',
    },
  ];

  const mediaAssets = [
    {
      type: 'Candidate Photos',
      description: 'High-resolution official campaign photos',
      count: '2 images',
    },
    {
      type: 'Campaign Logo',
      description: 'Official campaign branding materials',
      count: 'Multiple formats',
    },
    {
      type: 'Public Statements',
      description: 'Official position papers and statements',
      count: '5+ documents',
    },
    {
      type: 'Campaign Materials',
      description: 'Fact sheets and policy briefs',
      count: '10+ files',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0B3D91] to-[#0A2F6E] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl mb-6" data-aos="fade-up">Media & Press</h1>
            <p className="text-xl text-blue-100" data-aos="fade-up" data-aos-delay="100">
              Official media resources. All content published here represents the official position of the campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-[#0B3D91]/10 border-[#0B3D91]/20" data-aos="fade-up">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="w-16 h-16 bg-[#0B3D91] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl mb-2 text-[#0B3D91]">Media Enquiries</h2>
                    <p className="text-gray-700 mb-4">
                      For media inquiries, interview requests, or official correspondence, contact the campaign through authorized channels.
                    </p>
                    <div className="space-y-2">
                      <p><strong>Email:</strong> info@maajolawasanjo.org</p>
                      <p><strong>Response Time:</strong> Within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-[#0B3D91]" data-aos="fade-up">Official Press Releases</h2>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <Card key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                        <h3 className="mb-2 text-[#0B3D91]">{release.title}</h3>
                      </div>
                      <Button variant="outline" className="flex-shrink-0 border-[#0B3D91] text-[#0B3D91]">
                        <Download className="mr-2" size={16} />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Statements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-[#0B3D91]">Official Statements Archive</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <FileText className="text-[#0B3D91] flex-shrink-0" size={32} />
                  <div>
                    <h3 className="mb-3 text-[#0B3D91]">Access All Statements</h3>
                    <p className="text-gray-600 mb-4">
                      Complete archive of official campaign statements, policy positions, and public remarks organized by date and topic.
                    </p>
                    <Button className="bg-[#FF6F00] hover:bg-[#E66300] text-white">View Archive</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-[#0B3D91]">Media Assets</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {mediaAssets.map((asset, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#0B3D91]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image className="text-[#0B3D91]" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-[#0B3D91]">{asset.type}</h3>
                        <p className="text-gray-600 text-sm mb-3">{asset.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{asset.count}</span>
                          <Button size="sm" variant="outline" className="border-[#0B3D91] text-[#0B3D91]">
                            <Download className="mr-2" size={14} />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-[#0B3D91]">Official Campaign Photos</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={candidatePortrait}
                alt="MA'AJO LAWASANJO - Official Portrait"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <img
                src={candidateFull}
                alt="MA'AJO LAWASANJO - Full Portrait"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attribution & Usage */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-8 text-center text-[#0B3D91]">Usage Guidelines</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="mb-2 text-[#0B3D91]">Attribution Requirements</h3>
                    <p className="text-sm">
                      Photos and materials should be attributed to "MA'AJO LAWASANJO Campaign" when used in editorial content.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#0B3D91]">Permitted Use</h3>
                    <p className="text-sm">
                      These materials are provided for editorial and news coverage purposes. Commercial use requires written permission.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-[#0B3D91]">Questions?</h3>
                    <p className="text-sm">
                      Contact the campaign at info@maajolawasanjo.org for clarification on usage rights.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}