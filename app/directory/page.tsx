import React from 'react';
import { MyHeader } from '@/components/MyHeader';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, MapPin } from "lucide-react";
import { Mail } from "lucide-react";

type ContactPerson = {
  role?: string;
  name: string;
  ext?: string;
  email?: string;
  direct?: string;
  phone?: string;
};

type ContactOffice = {
  value: string;
  label: string;
  contacts: ContactPerson[];
};

const contacts: ContactOffice[] = [
  {
    value: "executive",
    label: "Executive Team",
    contacts: [
      { role: "President/Owner", name: "Zan Sharp", ext: "106" },
      { role: "CEO", name: "Vivian Sharp", ext: "100" },
    ],
  },
  {
    value: "recruitment",
    label: "Recruitment",
    contacts: [
      {
        role: "Head of Recruitment/Marketing",
        name: "Candy Marshall",
        ext: "142",
        email: "candy@sharptrucking.com",
      },
      {
        role: "Recruiter",
        name: "Tasia Hatch",
        ext: "134",
        email: "tasia@sharptrucking.com",
      },
      {
        role: "Recruiter",
        name: "Bruce Peterson",
        ext: "133",
        email: "bruce@sharptrucking.com",
      },
    ],
  },
  {
    value: "driver-managers",
    label: "Driver Managers",
    contacts: [
      {
        role: "Driver Manager",
        name: "Tracy Rigby",
        ext: "120",
        email: "Tracy@sharptrucking.com",
      },
      {
        role: "Driver Manager",
        name: "Grace Crowson",
        ext: "138",
        email: "grace@sharptrucking.com",
      },
      {
        role: "Driver Manager",
        name: "Felicia McMichael",
        ext: "140",
        email: "felicia@sharptrucking.com",
      },
      {
        role: "Driver Manager",
        name: "Todd Gunter",
        ext: "144",
        email: "todd@sharptrucking.com",
      },
      {
        role: "After Hours",
        name: "After Hours",
        ext: "122",
        email: "nightdispatch@sharptrucking.com",
      },
    ],
  },
  {
    value: "operations",
    label: "Operations",
    contacts: [
      {
        role: "Operations Manager",
        name: "Rochelle Genera",
        ext: "128",
        email: "Rochelle@sharptrucking.com",
      },
    ],
  },
  {
    value: "accounting",
    label: "Accounting",
    contacts: [
      {
        role: "Controller",
        name: "Emili Culp",
        ext: "143",
        email: "Emili@sharptrucking.com",
      },
      {
        role: "Accountant",
        name: "June Bruagh",
        ext: "132",
        email: "june@sharptrucking.com",
      },
      {
        role: "Payroll",
        name: "Holli McBride",
        ext: "102",
        email: "holli@sharptrucking.com",
        direct: "435-227-2178",
      },
      {
        role: "Accounts Payable/Receivable",
        name: "Vivian Sharp",
        ext: "100",
        email: "vivian@sharptrucking.com",
        direct: "435-227-2175",
      },
      {
        name: "Ashley Anderson",
        ext: "117",
        email: "ashley@sharptrucking.com",
      },
    ],
  },
  {
    value: "safety",
    label: "Safety",
    contacts: [
      {
        role: "Safety Director",
        name: "Chris Petersen",
        ext: "103",
        email: "chris@sharptrucking.com",
        direct: "435-227-2172",
      },
      {
        name: "Kevin Boydstun",
        ext: "107",
        direct: "435-227-2162",
      },
      {
        role: "Safety Clerk",
        name: "Angela Jones",
        ext: "131",
        email: "angela@sharptrucking.com",
      },
    ],
  },
  {
    value: "customer-service",
    label: "Customer Service",
    contacts: [
      {
        role: "Head of Customer Service",
        name: "Heather Hervey",
        ext: "118",
        email: "heather@sharptrucking.com",
        direct: "435-227-2171",
      },
    ],
  },
  {
    value: "dispatch",
    label: "Dispatch",
    contacts: [
      {
        role: "Southwestern States / Utah Outbound",
        name: "Rikki Anderson",
        ext: "136",
        email: "randerson@sharptrucking.com",
      },
      {
        role: "Eastern States",
        name: "Stephanie Bingham",
        ext: "111",
        email: "Stephanie@sharptrucking.com",
      },
      {
        role: "Western States",
        name: "Holly Hoover",
        ext: "141",
        email: "Holly@sharptrucking.com",
      },
      {
        role: "Pacific Northwest",
        name: "Ken Moss JR.",
        phone: "208-766-2905",
        email: "Kenjr@sharptrucking.com",
      },
    ],
  },
  {
    value: "it",
    label: "IT",
    contacts: [
      {
        name: "Luke Ercanbrack",
        ext: "110",
        email: "Luke@sharptrucking.com",
        direct: "435-227-0902",
      },
      {
        name: "Jaden Anderson",
        ext: "203",
      },
    ],
  },
];

export default function Directory() {
  return (
  <div className="flex min-h-screen flex-col">
  <MyHeader />
  <main className="flex-1 container mx-auto px-4 py-8">
<section className="bg-gray-50 py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Sharp Staff Directory</h2>
          <div className="flex items-center justify-center mb-4">
            <Phone className="h-5 w-5 text-primary mr-2" />
            <p className="text-lg font-medium">Main: 435-245-6053</p>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find the right person and extension. Tap/click an email to contact directly.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={contacts[0].value} className="w-full">
            {/* Tab headers */}
            <TabsList className="flex flex-wrap gap-2 justify-center mb-8">
              {contacts.map(({ value, label }) => (
                <TabsTrigger key={value} value={value} className="min-w-[140px]">
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            {/* Tab content */}
            {contacts.map(({ value, label, contacts: group }) => (
              <TabsContent key={value} value={value}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      {label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {group.map((person, idx) => (
                        <li
                          key={person.name + (person.ext || "")}
                          className={
                            "flex flex-col md:flex-row md:items-center md:justify-between border-b pb-2" +
                            (idx === group.length - 1 ? " border-none pb-0" : "")
                          }
                        >
                          <div>
                            {person.role && (
                              <div className="font-semibold text-sm text-primary mb-1">{person.role}</div>
                            )}
                            <span className="font-medium text-lg">{person.name}</span>
                          </div>
                          <div className="flex flex-col md:items-end md:text-right">
                            {person.ext && (
                              <span className="text-muted-foreground text-sm">Ext. {person.ext}</span>
                            )}
                            {person.direct && (
                              <span className="text-muted-foreground text-sm">Direct: {person.direct}</span>
                            )}
                            {person.phone && (
                              <span className="text-muted-foreground text-sm">Phone: {person.phone}</span>
                            )}
                            {person.email && (
                              <a
                                href={`mailto:${person.email}`}
                                className="flex items-center text-blue-600 hover:underline text-sm mt-1 justify-end"
                              >
                                <Mail className="w-4 h-4 mr-1" />
                                {person.email}
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  </main>
  </div>
  );
};
