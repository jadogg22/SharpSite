import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
    <p className="text-lg text-center text-gray-600 mb-12">
      We&apos;re here to help. Whether you have a question about our services, need a quote, or want to join our team, we&apos;d love to hear from you.
    </p>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent className="flex items-start space-x-4">
            <MapPin className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Sharp Transportation</h3>
              <p className="text-gray-600">390 N 900 E</p>
              <p className="text-gray-600">Wellsville, UT 84339</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Phone</CardTitle>
          </CardHeader>
          <CardContent className="flex items-start space-x-4">
            <Phone className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">Main Office</h3>
              <p className="text-gray-600">(435) 245-6053</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
          </CardHeader>
          <CardContent className="flex items-start space-x-4">
            <Mail className="h-8 w-8 text-primary mt-1" />
            <div>
              <h3 className="font-semibold">General Inquiries</h3>
              <p className="text-gray-600">info@sharptruck.com</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Form */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Send us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Question about services" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default ContactPage;