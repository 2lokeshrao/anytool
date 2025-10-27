"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function QRCodeGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>QR Code Generator</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">QR Code Generator</h1>
          <p className="text-center text-gray-600 mb-8">Generate free QR codes for URLs, text, WiFi, and more.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Input placeholder="Enter URL or text..." className="mb-4" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Generate QR Code</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
