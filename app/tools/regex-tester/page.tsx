"use client"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function RegexTesterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Regex Tester</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Regex Tester</h1>
          <p className="text-center text-gray-600 mb-8">Test and debug regular expressions online.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Input placeholder="Enter regex pattern..." className="mb-4 font-mono" />
            <Textarea placeholder="Enter test string..." className="min-h-[200px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
