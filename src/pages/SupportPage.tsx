import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { CheckCircle2, Shield, Lock, FileText } from 'lucide-react';

export function SupportPage() {
  const [amount, setAmount] = useState('5000');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = ['2000', '5000', '10000', '25000', '50000', 'custom'];

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
            <h2 className="text-3xl text-[#0B3D91] mb-4">Thank You for Your Support!</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your contribution powers real change. You'll receive a confirmation email shortly with your donation details.
            </p>
            <div className="space-y-3">
              <Link to="/">
                <Button size="lg" className="w-full bg-[#0B3D91] hover:bg-[#0A2F6E]">Return to Home</Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline" className="w-full border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white">Get More Involved</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero - Strong Urgency */}
      <section className="relative py-32 bg-gradient-to-br from-[#0B3D91] via-[#0A2F6E] to-[#082654] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                SUPPORT THE CAMPAIGN
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8" data-aos="fade-up" data-aos-delay="100">
              Power the Movement
            </h1>
            <p className="text-2xl text-blue-100 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Change happens when committed citizens invest in a vision. Your contribution directly supports grassroots mobilization, policy research, and campaign operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Support - Impact Cards */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-6">
              Why Your Contribution Matters
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every contribution, no matter the size, strengthens this movement. Here's how your support translates to real impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 bg-white hover:border-[#0B3D91] transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-3xl text-[#0B3D91] mb-3">₦2,000</h3>
                <p className="text-gray-600">
                  Supports outreach materials and community engagement
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#FF6F00] bg-white shadow-md">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🗳️</div>
                <h3 className="text-3xl text-[#FF6F00] mb-3">₦10,000</h3>
                <p className="text-gray-600">
                  Funds grassroots activities and voter education
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-200 bg-white hover:border-[#0B3D91] transition-all">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">📢</div>
                <h3 className="text-3xl text-[#0B3D91] mb-3">₦50,000</h3>
                <p className="text-gray-600">
                  Sponsors a town hall or community event
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form - Focused Layout */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-4">
                Make Your Contribution
              </h2>
              <p className="text-lg text-gray-600">
                Secure, transparent, and handled with care.
              </p>
            </div>
            
            <Card className="border-2 border-gray-200 shadow-lg bg-white">
              <CardContent className="p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Frequency */}
                  <div>
                    <Label className="mb-4 block text-base text-gray-900">Contribution Type</Label>
                    <RadioGroup value={frequency} onValueChange={setFrequency} className="flex gap-6">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="cursor-pointer font-normal text-gray-700">One-time</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer font-normal text-gray-700">Monthly</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="mb-4 block text-base text-gray-900">Amount (₦)</Label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setAmount(preset)}
                          className={`py-4 px-3 rounded border-2 transition-all text-sm ${
                            amount === preset
                              ? 'border-[#0B3D91] bg-[#0B3D91] text-white'
                              : 'border-gray-300 bg-white text-gray-700 hover:border-[#0B3D91]'
                          }`}
                        >
                          {preset === 'custom' ? 'Custom' : `₦${parseInt(preset).toLocaleString()}`}
                        </button>
                      ))}
                    </div>
                    {amount === 'custom' && (
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="h-12 border-2"
                        required
                      />
                    )}
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <Label htmlFor="firstName" className="text-base text-gray-900">First Name *</Label>
                        <Input id="firstName" className="h-12 mt-2 border-2" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-base text-gray-900">Last Name *</Label>
                        <Input id="lastName" className="h-12 mt-2 border-2" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base text-gray-900">Email *</Label>
                      <Input id="email" type="email" className="h-12 mt-2 border-2" required />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base text-gray-900">Phone Number *</Label>
                      <Input id="phone" type="tel" className="h-12 mt-2 border-2" required />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-base text-gray-900">Location *</Label>
                      <Input id="location" placeholder="City, State" className="h-12 mt-2 border-2" required />
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="bg-blue-50 border-2 border-blue-100 p-6 rounded">
                    <div className="flex items-start gap-3 mb-4">
                      <Shield className="text-[#0B3D91] flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="font-semibold text-[#0B3D91] mb-2">Secure & Transparent</p>
                        <ul className="text-sm text-gray-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <Lock size={14} className="flex-shrink-0 mt-1 text-gray-500" />
                            <span>All transactions are secure and encrypted</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <FileText size={14} className="flex-shrink-0 mt-1 text-gray-500" />
                            <span>You will receive a receipt for your contribution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-1 text-gray-500" />
                            <span>Handled in accordance with applicable laws and ethical standards</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#FF6F00] hover:bg-[#E66300] text-white h-14 text-lg"
                  >
                    Contribute ₦{amount === 'custom' ? (customAmount || '0') : parseInt(amount).toLocaleString()}
                    {frequency === 'monthly' && '/month'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Alternative Support Methods */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 text-base">
                Other ways to support the campaign:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-8"
                >
                  Bank Transfer Details
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white px-8"
                >
                  Event Sponsorship
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Footer */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              All contributions will be used exclusively for campaign activities. Donations are handled in accordance with applicable electoral and financial regulations. 
              This platform does not collect or secure personally identifiable information (PII) or sensitive financial data beyond what is necessary for campaign contact and transparency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}