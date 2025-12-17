import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function ManifestoDetailPage() {
  const { topic } = useParams<{ topic: string }>();

  return (
    <div className="bg-white">
      {/* Hero - Topic Specific */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0B3D91] to-[#0A2F6E] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/manifesto" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors" data-aos="fade-up">
              <ArrowLeft className="mr-2" size={20} />
              Back to Manifesto
            </Link>
            <h1 className="text-5xl lg:text-6xl mb-6 capitalize" data-aos="fade-up" data-aos-delay="100">
              {topic?.replace('-', ' ')} Policy
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Detailed policy platform and implementation roadmap
            </p>
          </div>
        </div>
      </section>

      {/* Content Example - Placeholder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200" data-aos="fade-up">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0" size={24} />
                  <p className="text-gray-700">Living Wage Initiative: Raise minimum wage to $18/hour with annual cost-of-living adjustments</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Help Us Make This Real</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            These plans require grassroots support, volunteer energy, and financial resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/join">
              <Button size="lg" variant="secondary">
                Join the Campaign
              </Button>
            </Link>
            <Link to="/support">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}