"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function LbtRegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    profession: "",
    organisation: "",
    ageRange: "",
    level: "",
    bikeLanding: false,
    haveABike: false,
    needTshirt: false,
    tshirtSize: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 ">

      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Join Our Community</h1>
          <p className="text-white text-lg">Complete this form to get started</p>
        </div>

        {/* Form Card */}
        <div className=" border border-border rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email and Full Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className=" border-border text-foreground placeholder:text-muted-foreground focus:ring-accent"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Full Name</label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-accent"
                  required
                />
              </div>
            </div>

            {/* Phone and Profession Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Profession</label>
                <Select value={formData.profession} onValueChange={(value) => handleSelectChange("profession", value)}>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Select your profession" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Organisation Row */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Organisation</label>
              <Input
                type="text"
                name="organisation"
                value={formData.organisation}
                onChange={handleInputChange}
                placeholder="Your company or organization"
                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-accent"
                required
              />
            </div>

            {/* Age Range and Level Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Age Range</label>
                <Select value={formData.ageRange} onValueChange={(value) => handleSelectChange("ageRange", value)}>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Select your age range" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="18-25">18 - 25</SelectItem>
                    <SelectItem value="26-35">26 - 35</SelectItem>
                    <SelectItem value="36-45">36 - 45</SelectItem>
                    <SelectItem value="46-55">46 - 55</SelectItem>
                    <SelectItem value="56+">56+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Level</label>
                <Select value={formData.level} onValueChange={(value) => handleSelectChange("level", value)}>
                  <SelectTrigger className="bg-input border-border text-foreground">
                    <SelectValue placeholder="Select your level" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Checkboxes - Bike Landing, Have a Bike, Need Tshirt */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border">
                <Checkbox
                  checked={formData.bikeLanding}
                  onCheckedChange={(checked) => handleCheckboxChange("bikeLanding", checked as boolean)}
                  className="border-accent"
                />
                <label className="text-sm font-medium text-foreground cursor-pointer flex-1">
                  I'm interested in learning to land a bike
                </label>
              </div>

              <div className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border">
                <Checkbox
                  checked={formData.haveABike}
                  onCheckedChange={(checked) => handleCheckboxChange("haveABike", checked as boolean)}
                  className="border-accent"
                />
                <label className="text-sm font-medium text-foreground cursor-pointer flex-1">Do you have a bike?</label>
              </div>

              <div className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border">
                <Checkbox
                  checked={formData.needTshirt}
                  onCheckedChange={(checked) => handleCheckboxChange("needTshirt", checked as boolean)}
                  className="border-accent"
                />
                <label className="text-sm font-medium text-foreground cursor-pointer flex-1">
                  Do you need a t-shirt?
                </label>
              </div>

              {formData.needTshirt && (
                <div className="space-y-2 pl-8">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">T-Shirt Size</label>
                  <Select
                    value={formData.tshirtSize}
                    onValueChange={(value) => handleSelectChange("tshirtSize", value)}
                  >
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select your t-shirt size" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="xs">Extra Small (XS)</SelectItem>
                      <SelectItem value="s">Small (S)</SelectItem>
                      <SelectItem value="m">Medium (M)</SelectItem>
                      <SelectItem value="l">Large (L)</SelectItem>
                      <SelectItem value="xl">Extra Large (XL)</SelectItem>
                      <SelectItem value="xxl">2X Large (XXL)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 text-base rounded-lg transition-all duration-200"
            >
              Create Account
            </Button>

            {/* Footer Text */}
            <p className="text-center text-xs text-muted-foreground">
              By registering, you agree to our{" "}
              <a href="#" className="text-accent hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-accent hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
