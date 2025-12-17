import { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <Card className="max-w-md w-full border-2 border-gray-200">
          <CardContent className="pt-12 pb-10 px-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl text-[#0B3D91] mb-4">Message Sent</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thank you for reaching out. We'll respond to your message within 48 hours.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="bg-[#0B3D91] hover:bg-[#0A2F6E]"
            >
              Send Another Message
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-[#0B3D91] mb-6" data-aos="fade-up" data-aos-delay="100">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Have questions about our campaign, policies, or how to get involved? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Layout: Form + Contact Details */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              
              {/* Left Column: Contact Form - First on Mobile */}
              <div className="order-1" data-aos="fade-up">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl text-[#0B3D91] mb-3">
                    Send a Message
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 48 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <Label htmlFor="firstName" className="text-gray-900 mb-2 block text-sm sm:text-base">
                        First Name *
                      </Label>
                      <Input 
                        id="firstName" 
                        className="h-11 sm:h-12 border-2 text-base" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-gray-900 mb-2 block text-sm sm:text-base">
                        Last Name *
                      </Label>
                      <Input 
                        id="lastName" 
                        className="h-11 sm:h-12 border-2 text-base" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-900 mb-2 block text-sm sm:text-base">
                      Email *
                    </Label>
                    <Input 
                      id="email" 
                      type="email" 
                      className="h-11 sm:h-12 border-2 text-base" 
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-900 mb-2 block text-sm sm:text-base">
                      Phone Number
                    </Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      className="h-11 sm:h-12 border-2 text-base" 
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-900 mb-2 block text-sm sm:text-base">
                      Subject *
                    </Label>
                    <Select required>
                      <SelectTrigger className="h-11 sm:h-12 border-2 text-base">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="press">Press/Media Inquiry</SelectItem>
                        <SelectItem value="event">Event Information</SelectItem>
                        <SelectItem value="donation">Donation Question</SelectItem>
                        <SelectItem value="policy">Policy Question</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 mb-2 block text-sm sm:text-base">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={6}
                      className="border-2 text-base"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-[#0B3D91] hover:bg-[#0A2F6E] h-12 text-base sm:text-lg min-h-[48px]"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Right Column: Contact Details - Second on Mobile */}
              <div className="order-2" data-aos="fade-up" data-aos-delay="150">
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl text-[#0B3D91] mb-3">
                    Contact Information
                  </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Reach out through any of these official channels.
                  </p>
                </div>

                <div className="space-y-5 sm:space-y-6">
                  {/* Office Address */}
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <MapPin className="text-[#0B3D91]" size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-2">
                            Campaign Headquarters
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            Plot 45, Campaign Office Complex<br />
                            Central Business District<br />
                            Abuja, Nigeria
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <Phone className="text-[#0B3D91]" size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-2">
                            Phone
                          </h3>
                          <p className="text-gray-600">
                            Main: +234 (0) 800 LAWASANJO<br />
                            Press: +234 (0) 800 PRESS-ML
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Email */}
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <Mail className="text-[#0B3D91]" size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-2">
                            Email
                          </h3>
                          <p className="text-gray-600">
                            General: info@maajolawasanjo.ng<br />
                            Press: press@maajolawasanjo.ng
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Office Hours */}
                  <Card className="border-2 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                          <Clock className="text-[#0B3D91]" size={22} />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-2">
                            Office Hours
                          </h3>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 3:00 PM<br />
                            Sunday: Closed
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8">
                  <div className="bg-gray-100 border-2 border-gray-200 rounded h-64 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin size={48} className="mx-auto mb-3" />
                      <p className="text-sm">Map Location</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Inquiries Section */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl text-[#0B3D91] mb-4">
                  Media Inquiries
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Journalists and media professionals should contact our press team directly for interview requests, press credentials, or media resources.
                </p>
                <div className="space-y-2 text-gray-700 mb-6">
                  <p><span className="font-semibold">Press Contact:</span> press@maajolawasanjo.ng</p>
                  <p><span className="font-semibold">Press Phone:</span> +234 (0) 800 PRESS-ML</p>
                  <p><span className="font-semibold">Response Time:</span> Within 24 hours on business days</p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white"
                >
                  Visit Media Page
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}