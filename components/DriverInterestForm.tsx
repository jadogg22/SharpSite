
"use client"

import React, { useState } from "react"
import Link from "next/link" // Import Link
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"

import { ButtonProps } from "@/components/ui/button"

interface DriverInterestFormProps {
  buttonVariant?: ButtonProps["variant"];
  buttonClassName?: string;
}

export function DriverInterestForm({ buttonVariant, buttonClassName }: DriverInterestFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [state, setState] = useState("")
  const [experience, setExperience] = useState("")
  const [contactAuth, setContactAuth] = useState(false)
  const [termsConditions, setTermsConditions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ]

  const drivingExperiences = [
    "Select the Best Match",
    "Less than 1 year",
    "1-3 years",
    "3-5 years",
    "5+ years",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/submit-interest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, phone, zipCode, state, experience, contactAuth, termsConditions }),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your interest has been submitted. We'll be in touch soon!",
        })
        setIsOpen(false)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
        setZipCode("")
        setState("")
        setExperience("")
        setContactAuth(false)
        setTermsConditions(false)
      } else {
        const errorData = await response.json()
        toast({
          title: "Submission Failed",
          description: errorData.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Error",
        description: "Could not connect to the server. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant={buttonVariant} className={buttonClassName}>
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-4 overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Apply to Drive</DialogTitle>
          <DialogDescription className="text-center">
            At Sharp Transportation, truck driving isn’t just a job. It’s a chance to make a difference. Fill out the form below to apply to drive today.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-2 py-2">
          <div className="space-y-1">
            <Label htmlFor="firstName">
              First Name *
            </Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">
              Last Name *
            </Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">
              Phone *
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="10 digit phone number"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="zipCode">
                Zip code *
              </Label>
              <Input
                id="zipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="(5 digit zip code)"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="state">
                State
              </Label>
              <Select value={state} onValueChange={setState} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="experience">
              Experience Level *
            </Label>
            <Select value={experience} onValueChange={setExperience} required>
              <SelectTrigger>
                <SelectValue placeholder="Select the Best Match" />
              </SelectTrigger>
              <SelectContent>
                {drivingExperiences.map((exp) => (
                  <SelectItem key={exp} value={exp}>
                    {exp}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2 mt-4">
            <p className="text-sm font-semibold">Contact Authorizations *</p>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="contactAuth"
                checked={contactAuth}
                onCheckedChange={(checked) => setContactAuth(checked as boolean)}
                required
              />
              <label
                htmlFor="contactAuth"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive job alerts and opportunities from Sharp Transportation and its representatives by call or text.
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="termsConditions"
                checked={termsConditions}
                onCheckedChange={(checked) => setTermsConditions(checked as boolean)}
                required
              />
              <label
                htmlFor="termsConditions"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the Terms and Conditions and the Privacy Policy.
              </label>
            </div>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-end sm:space-x-2 space-y-2 sm:space-y-0">
            <Button type="submit" disabled={isLoading || !contactAuth || !termsConditions}>
              {isLoading ? "Submitting..." : "Submit Interest"}
            </Button>
            <Link href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647" passHref>
              <Button variant="outline">
                Submit Full Application
              </Button>
            </Link>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
