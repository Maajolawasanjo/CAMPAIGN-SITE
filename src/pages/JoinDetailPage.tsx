import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { ArrowLeft } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

export function JoinDetailPage() {
  const { role } = useParams<{ role: string }>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-lg w-full border-2 border-gray-200">
          <CardContent className="pt-12 pb-10 px-10 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl text-[#0B3D91] mb-4">Welcome to the Team!</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your registration has been received. A campaign coordinator will reach out within 48 hours with next steps.
            </p>
            <div className="space-y-3">
              <Link to="/">
                <Button size="lg" className="w-full bg-[#0B3D91] hover:bg-[#0A2F6E]">Return to Home</Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="w-full border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white">Explore Other Opportunities</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[#0B3D91] to-[#0A2F6E] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/join" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors" data-aos="fade-up">
              <ArrowLeft className="mr-2" size={20} />
              Back to Join
            </Link>
            <h1 className="text-5xl lg:text-6xl mb-6 capitalize" data-aos="fade-up" data-aos-delay="100">
              {role?.replace('-', ' ')} Registration
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Thank you for your interest in joining the campaign. Complete this form to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-gray-200" data-aos="fade-up">
              <CardContent className="pt-6">
                <h3 className="text-2xl mb-6">Sign Up</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="zip">ZIP Code *</Label>
                    <Input id="zip" required />
                  </div>
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Textarea
                      id="availability"
                      placeholder="Tell us about your schedule and availability"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="skills">Relevant Skills or Experience</Label>
                    <Textarea
                      id="skills"
                      placeholder="Any experience or skills that might be helpful"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="why">Why do you want to join? (Optional)</Label>
                    <Textarea
                      id="why"
                      placeholder="Share what motivates you"
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}