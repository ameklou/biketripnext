"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Header from '@/components/header'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

export default function SignupPage() {
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
    sexe: "",
    attendee:""
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
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   // if (formData.password !== formData.confirmPassword) {
  //   //   console.log("[v0] Password mismatch")
  //   //   return
  //   // }
  //   setIsLoading(true)
  //   // Simulate signup process
  //   await new Promise((resolve) => setTimeout(resolve, 1000))
  //   setIsLoading(false)
  //   console.log("[v0] Signup attempt:", formData)
  // }

  return (
    <div className="min-h-screen w-full relative bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />
      <Header/>
    <div className="flex items-center justify-center p-4 mt-15 ">


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[70rem]"
      >
        {/* Header */}
        <div className="text-center mb-8">

          <h1 className="text-3xl font-bold text-white mb-2"> Formulaire d’inscription</h1>
          <p className="text-zinc-400">Merci de remplir ce formulaire pour vous inscrir et nous permettre de mieux vous connaître</p>
        </div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8"
        >

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email and Full Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide"> Nom et prénom </label>
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
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Numéro de téléphone (WhatsApp de préférence)
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+228 90 999 999"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Sexe</label>
                  <Select value={formData.sexe} onValueChange={(value) => handleSelectChange("sexe", value)}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Selectionner votre sexe" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="software-engineer">Femme</SelectItem>
                      <SelectItem value="designer">Homme</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Statut actuel </label>
                  <Select value={formData.profession} onValueChange={(value) => handleSelectChange("profession", value)}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select your profession" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="etudiant">Étudiant(e)</SelectItem>
                      <SelectItem value="entrepreneur">Entrepreneur(e)</SelectItem>
                      <SelectItem value="salarie">Salarié(e)</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="fonctionnaire">Fonctionnaire</SelectItem>
                      <SelectItem value="autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* Organisation Row */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Nom de votre organisation / école / entreprise </label>
                  <Input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    placeholder="Nom de votre organisation / école / entreprise "
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:ring-accent"
                    required
                  />
                </div>

              </div>



              {/* Age Range and Level Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Tranche d'âge</label>
                  <Select value={formData.ageRange} onValueChange={(value) => handleSelectChange("ageRange", value)}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="-18">Inférieur à 18 ans</SelectItem>
                      <SelectItem value="18-25">18 - 25 ans</SelectItem>
                      <SelectItem value="26-35">26 - 35ans</SelectItem>
                      <SelectItem value="36-45">36 - 45 ans</SelectItem>
                      <SelectItem value="45+">Supérieur à 45 ans</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide"> Avez-vous déjà participé à une précédente édition du LBT ? </label>
                  <Select value={formData.attendee} onValueChange={(value) => handleSelectChange("attendee", value)}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Select your level" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="beginner">Oui, 1ere édition</SelectItem>
                      <SelectItem value="intermediate">Oui, 2e édition</SelectItem>
                      <SelectItem value="non">Non</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">

                  <div className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border">
                    <Checkbox
                      checked={formData.haveABike}
                      onCheckedChange={(checked) => handleCheckboxChange("haveABike", checked as boolean)}
                      className="border-accent"
                    />
                    <label className="text-sm font-medium text-foreground cursor-pointer flex-1">Avez-vous un vélo personnel ?</label>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Comment évaluez-vous votre niveau à vélo ? </label>
                  <Select value={formData.level} onValueChange={(value) => handleSelectChange("level", value)}>
                    <SelectTrigger className="bg-input border-border text-foreground">
                      <SelectValue placeholder="Comment évaluez-vous votre niveau à vélo ? " />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="beginner">Débutant</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                </div>


              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border">
                    <Checkbox
                      required={true}
                      checked={formData.bikeLanding}
                      onCheckedChange={(checked) => handleCheckboxChange("bikeLanding", checked as boolean)}
                      className="border-accent"
                    />
                    <label className="text-sm font-medium text-foreground cursor-pointer flex-1">
                      Souhaitez-vous louer un vélo pour la balade ? (5000 FCFA)
                    </label>
                  </div>
                </div>
                <div className="space-y-2">



                  <div className="flex items-center space-x-3 bg-input/50 p-4 rounded-lg border border-border">
                    <Checkbox
                      checked={formData.needTshirt}
                      onCheckedChange={(checked) => handleCheckboxChange("needTshirt", checked as boolean)}
                      className="border-accent"
                    />
                    <label className="text-sm font-medium text-foreground cursor-pointer flex-1">
                      Souhaitez-vous acheter le maillot officiel ? (5000 FCFA)
                      *
                    </label>
                  </div>

                  {formData.needTshirt && (
                    <div className="space-y-2 pl-8">
                      <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Taille du T-Shirt</label>
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
              </div>


              <div className="w-full flex justify-center items-center">
                <button
                  type="submit"
                  data-tally-open="w8j1kA"
                  data-tally-layout="modal"
                  data-tally-hide-title="1"
                  data-tally-emoji-text="Engage"
                  data-tally-emoji-animation="heart-beat"
                  data-tally-auto-close="0"
                  className="relative z-10 group w-fit"
                >
                  <div className="relative z-10 px-5 py-3 text-sm lg:text-base font-bold text-primary border transition-all duration-300 rounded-md bg-yellow-400 border-green-900">
                    <div className="flex items-center gap-2 text-cream">
                      <p>Reservation</p>
                    </div>
                  </div>
                  <div className="group-hover:left-[2px] group-hover:top-[2px] absolute h-full w-full left-1 top-1 transition-all duration-200 ease-in-out rounded-md bg-green-900"></div>
                </button>
              </div>


            </form>

        </motion.div>

      </motion.div>
    </div>
    </div>
  )
}
