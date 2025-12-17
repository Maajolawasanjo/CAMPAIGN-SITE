import { Card, CardContent } from '../components/ui/card';

export function PrivacyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl text-gray-900 mb-4" data-aos="fade-up">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="100">
              Effective Date: December 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card data-aos="fade-up">
              <CardContent className="pt-6">
                <h2 className="text-3xl mb-6">Privacy Policy</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="mb-2">Information We Collect</h3>
                    <p>
                      We collect information you provide directly to us, including name, email address, phone number, mailing address, and donation information. We also collect information about your interactions with our website and communications.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">How We Use Your Information</h3>
                    <p>
                      Your information is used to:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Process donations and volunteer applications</li>
                      <li>Send campaign updates and event invitations</li>
                      <li>Comply with federal election law reporting requirements</li>
                      <li>Improve our website and campaign operations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2">Information Sharing</h3>
                    <p>
                      We do not sell your personal information. Donor information may be shared as required by federal and state election laws. We may share information with trusted service providers who assist our campaign operations.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Your Rights</h3>
                    <p>
                      You may unsubscribe from our communications at any time. You can request access to your personal information or request corrections by contacting us at privacy@campaign2025.com.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Data Security</h3>
                    <p>
                      We implement reasonable security measures to protect your information. However, no internet transmission is completely secure. We cannot guarantee absolute security.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Children's Privacy</h3>
                    <p>
                      Our services are not directed to individuals under 18. We do not knowingly collect information from children.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terms of Use */}
            <Card data-aos="fade-up">
              <CardContent className="pt-6">
                <h2 className="text-3xl mb-6">Terms of Use</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="mb-2">Acceptance of Terms</h3>
                    <p>
                      By accessing and using this website, you accept and agree to be bound by these terms and conditions.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Use License</h3>
                    <p>
                      Permission is granted to temporarily access the materials on this website for personal, non-commercial use only. This license does not include: modifying or copying materials; using materials for commercial purposes; attempting to reverse engineer any software; or removing copyright or proprietary notations.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">User Conduct</h3>
                    <p>
                      You agree not to use this website to transmit, distribute, or store material that is unlawful, threatening, defamatory, obscene, or otherwise objectionable.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Disclaimer</h3>
                    <p>
                      The materials on this website are provided "as is." We make no warranties, expressed or implied, and disclaim all other warranties including, without limitation, implied warranties of merchantability or fitness for a particular purpose.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Campaign Disclaimer */}
            <Card data-aos="fade-up">
              <CardContent className="pt-6">
                <h2 className="text-3xl mb-6">Campaign Disclaimer</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="mb-2">Political Advertising</h3>
                    <p>
                      Political advertising paid for by Campaign 2025, [Address]. Not authorized by any candidate or candidate's committee.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Federal Election Law Compliance</h3>
                    <p>
                      Contributions to Campaign 2025 are not tax-deductible for federal income tax purposes. Federal law requires us to use our best efforts to collect and report the name, mailing address, occupation, and employer of individuals whose contributions exceed $200 in an election cycle.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Contribution Limits</h3>
                    <p>
                      Federal law prohibits contributions from corporations, labor unions, and foreign nationals. Contributions must come from personal funds and not from funds provided by another person for the purpose of making the contribution.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Maximum Contribution</h3>
                    <p>
                      The maximum amount an individual may contribute is $2,900 per election. The primary and general elections are considered separate elections.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card data-aos="fade-up">
              <CardContent className="pt-6">
                <h2 className="text-3xl mb-6">Data Protection</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="mb-2">Cookies and Tracking</h3>
                    <p>
                      We use cookies and similar technologies to understand how visitors use our website, remember your preferences, and improve your experience. You can control cookies through your browser settings.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Third-Party Services</h3>
                    <p>
                      We may use third-party services (such as email platforms, payment processors, and analytics tools) that have their own privacy policies. We encourage you to review the privacy policies of these services.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2">Do Not Track</h3>
                    <p>
                      Some browsers have "Do Not Track" features. Currently, we do not respond to Do Not Track signals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Legal Matters */}
            <Card className="bg-blue-50 border-blue-200" data-aos="fade-up">
              <CardContent className="pt-6">
                <h2 className="text-2xl mb-4">Questions About These Policies?</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about our privacy policy, terms of use, or data protection practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@campaign2025.com</p>
                  <p><strong>Mail:</strong> Campaign 2025, 456 Oak Avenue, Springfield, ST 12345</p>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Last Updated: December 17, 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}