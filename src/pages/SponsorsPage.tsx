import { Card, CardContent } from '../components/ui/card';
import { Users, Building2, Heart, Handshake } from 'lucide-react';

export function SponsorsPage() {
  const supportTiers = [
    {
      tier: 'Founding Supporters',
      description: 'Organizations and individuals who have provided significant support to establish the campaign foundation.',
      supporters: [
        { name: 'Community Development Alliance', type: 'Organization' },
        { name: 'Youth Leadership Initiative', type: 'Organization' },
        { name: 'Civic Engagement Forum Nigeria', type: 'Organization' },
      ],
    },
    {
      tier: 'Campaign Partners',
      description: 'Groups and institutions actively contributing resources and expertise to advance the campaign.',
      supporters: [
        { name: 'National Association of Nigerian Students', type: 'Organization' },
        { name: 'Small Business Owners Collective', type: 'Organization' },
        { name: 'Teachers and Educators Network', type: 'Organization' },
        { name: 'Healthcare Professionals Alliance', type: 'Organization' },
        { name: 'Technology and Innovation Hub', type: 'Organization' },
        { name: 'Women in Leadership Forum', type: 'Organization' },
      ],
    },
    {
      tier: 'Community Supporters',
      description: 'Grassroots organizations and community groups providing local engagement and outreach support.',
      supporters: [
        { name: 'Lagos Youth Assembly', type: 'Community Group' },
        { name: 'Kano Entrepreneurs Forum', type: 'Community Group' },
        { name: 'Abuja Civic Action Network', type: 'Community Group' },
        { name: 'Port Harcourt Development Coalition', type: 'Community Group' },
        { name: 'Ibadan Community Voices', type: 'Community Group' },
        { name: 'Enugu Progressive Alliance', type: 'Community Group' },
        { name: 'Kaduna Youth Empowerment', type: 'Community Group' },
        { name: 'Benin City Grassroots Movement', type: 'Community Group' },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0B3D91] to-[#0A2F6E] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl mb-6" data-aos="fade-up">Our Supporters</h1>
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              This campaign is powered by grassroots support from individuals and organizations who believe in our vision for change.
            </p>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-center text-[#0B3D91] mb-12" data-aos="fade-up">Recognition Levels</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportTiers.map((tier, index) => (
                <Card key={index} className="border-2 border-gray-200 text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg text-gray-900 mb-2 leading-snug">
                          {tier.tier}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {tier.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="py-20 lg:py-28 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6">
              A Broad Coalition for Change
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                This campaign is supported by a diverse coalition spanning professional bodies, civil society organizations, community groups, and individual citizens across Nigeria.
              </p>
              <p>
                The breadth of support reflects a shared commitment to responsible leadership, transparent governance, and policies that work for all Nigerians—not just a select few.
              </p>
              <p className="text-[#0B3D91] font-semibold">
                These endorsements are not transactional. They represent genuine alignment on values, vision, and the need for credible leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 text-center leading-relaxed">
              <span className="font-semibold">Note:</span> The organizations and groups listed have expressed support for this campaign's platform and values. 
              This support does not imply endorsement of all campaign activities or positions. All supporters maintain their organizational independence and autonomy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}