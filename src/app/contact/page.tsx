import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import { Facebook, MessageCircle, BeakerIcon as Bear } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  // Replace these with your actual contact details
  const whatsappNumber = "+1234567890"
  const facebookPage = "https://facebook.com/bearztock"

  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Bear className="h-8 w-8" />
              <span className="text-xl font-bold">bearztock</span>
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/shop" className="hover:text-gray-300 transition-colors">
                Shop
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
              <p className="text-gray-400">
                Have questions about our products? Want to collaborate? Reach out to us through any of these channels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* WhatsApp Card */}
              <Card className="bg-zinc-900 border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-green-600/10 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <h2 className="text-xl font-semibold">WhatsApp</h2>
                    <p className="text-gray-400">Chat with us directly through WhatsApp for quick responses</p>
                    <Button asChild className="bg-green-600 hover:bg-green-700 text-white w-full">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Message on WhatsApp</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Facebook Card */}
              <Card className="bg-zinc-900 border-white/10">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600/10 flex items-center justify-center">
                      <Facebook className="h-6 w-6 text-blue-500" />
                    </div>
                    <h2 className="text-xl font-semibold">Facebook</h2>
                    <p className="text-gray-400">Follow us on Facebook for updates and exclusive content</p>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                      <a
                        href={facebookPage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Facebook className="h-5 w-5" />
                        <span>Visit Facebook Page</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Contact Information */}
            <Card className="mt-8 bg-zinc-900/50 border-white/10">
              <CardContent className="p-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                  <p className="text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                  <p className="mt-4 text-gray-400">We typically respond within 24 hours during business hours.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bear className="h-6 w-6" />
              <span className="font-bold">bearztock</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} bearztock. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

