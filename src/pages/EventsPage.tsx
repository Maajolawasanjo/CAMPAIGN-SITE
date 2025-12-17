import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

export function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Town Hall: Education & Opportunity',
      date: 'December 22, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Community Center, 123 Main St, Springfield',
      description: 'Join us for a community conversation about improving our schools, expanding Pre-K, and making college affordable.',
      capacity: '200 seats available',
      image: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjU5NTE5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Volunteer Training & Canvass Launch',
      date: 'December 20, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Campaign Headquarters, 456 Oak Ave, Springfield',
      description: 'Learn effective canvassing techniques and hit the streets with fellow volunteers. Lunch provided!',
      capacity: 'Open to all volunteers',
      image: 'https://images.unsplash.com/photo-1761666507437-9fb5a6ef7b0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjU4NjA5NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Healthcare Policy Discussion',
      date: 'December 27, 2025',
      time: '7:00 PM - 9:00 PM',
      location: 'Public Library Auditorium, 789 Elm St, Springfield',
      description: 'In-depth discussion on expanding healthcare access, reducing prescription drug costs, and improving mental health services.',
      capacity: '150 seats available',
      image: 'https://images.unsplash.com/photo-1563233269-7e86880558a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzY1ODk5ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Small Business Owners Roundtable',
      date: 'December 29, 2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Chamber of Commerce, 321 Business Blvd, Springfield',
      description: 'Direct conversation with local business owners about economic challenges and our small business support plan.',
      capacity: 'Limited to 40 participants - RSVP required',
      image: 'https://images.unsplash.com/photo-1534951009808-766178b47a4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29ub21pYyUyMGdyb3d0aCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NTg4MzUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const pastEvents = [
    {
      title: 'Town Hall on Healthcare Access',
      date: 'December 17, 2025',
      attendance: '500+ attendees',
      summary: 'Record-breaking attendance for healthcare discussion. Key concerns: prescription costs and mental health access.',
    },
    {
      title: 'Community Canvassing Day',
      date: 'December 8, 2025',
      attendance: '1,200 volunteers',
      summary: 'Volunteers knocked on 50,000 doors across 12 cities in coordinated day of action.',
    },
    {
      title: 'Youth Leadership Summit',
      date: 'December 1, 2025',
      attendance: '300+ young people',
      summary: 'Next generation of leaders gathered to discuss climate, education, and economic opportunity.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0B3D91] via-[#0A2F6E] to-[#082654] text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-4" data-aos="fade-up">
              <span className="text-[#FF6F00] text-xs font-bold uppercase tracking-[0.3em]">
                CAMPAIGN CALENDAR
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
              Events & Town Halls
            </h1>
            <p className="text-2xl text-blue-100 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Join us at upcoming campaign events, town halls, and community meetings across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-[#0B3D91] mb-12" data-aos="fade-up">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={event.id} className="border-2 border-gray-200 hover:border-[#0B3D91] transition-all" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="md:flex">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full md:w-64 h-48 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                    <CardContent className="pt-6 flex-1">
                      <h3 className="mb-3">{event.title}</h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Calendar size={16} className="text-blue-600" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Clock size={16} className="text-blue-600" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <MapPin size={16} className="text-blue-600" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <Users size={16} className="text-blue-600" />
                          {event.capacity}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                      <Button>Register for Event</Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center">Recent Events</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pastEvents.map((event, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <h3 className="mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-500 mb-3">{event.date}</div>
                  <div className="text-sm text-blue-600 mb-3">{event.attendance}</div>
                  <p className="text-gray-600 text-sm">{event.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Host an Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h2 className="text-3xl mb-4 text-center">Host an Event in Your Community</h2>
                <p className="text-gray-700 mb-6 text-center">
                  Want to organize a house party, voter registration drive, or community meet-and-greet? We'll provide the materials and support.
                </p>
                <div className="flex justify-center">
                  <Button size="lg">Get Started as Event Host</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Updates */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-4">Never Miss an Event</h2>
            <p className="text-xl text-blue-100 mb-8">
              Sign up to receive event notifications and updates about activities in your area.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                required
              />
              <Button variant="secondary" size="lg">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}