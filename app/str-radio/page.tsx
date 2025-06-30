import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Radio, Mail } from "lucide-react";

export default function RadioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <MyHeader />
      <main className="flex-1">
        {/* Radio Player Section */}
        <div className="container mx-auto px-4 py-12">
          <Card className="shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <iframe
                src="https://embed.radio.co/player/30a1e6b.html?popout"
                className="w-full rounded-lg"
                style={{ border: 0, height: '450px', display: 'block' }}
                allowFullScreen
                title="STR Radio Player"
              ></iframe>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Policy Section */}
        <div className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mobile & Web Privacy Policy
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">
                SharpTrucking.com & STR Radio
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Last updated: March 27, 2023
              </p>
            </div>

            <div className="space-y-8">
              {/* Radio Stream Card */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Radio className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Radio Stream</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    When connecting to our radio stream, your IP address will be sent
                    to our radio service provider to track listening trends and
                    provide royalty reports. Your IP is immediately anonymized and
                    deleted, and is never sold or passed on.
                  </p>
                </CardContent>
              </Card>

              {/* App Privacy Card */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>iOS & Android Apps</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">iOS App</h3>
                    <p>
                      The STR Radio iOS App does not collect any user data when
                      installed or launched on your device.
                    </p>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Android App</h3>
                    <p>
                      The STR Radio Android App does not collect user data. To
                      manage audio during calls, it monitors the phone state (e.g.,
                      idle, in-call) but never listens to calls or accesses phone
                      data. It also requires local storage access to save its
                      configuration for faster launch times.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Contact Information</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p className="font-semibold text-gray-800">Sharp Transportation, Inc.</p>
                  <p>390 N 900 E #9312</p>
                  <p>Wellsville, UT</p>
                  <p>Phone: 417-866-5993</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <MyFooter />
    </div>
  );
}