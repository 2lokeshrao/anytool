"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function AIImageGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>AI Image Generator</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">AI Image Generator</h1>
          <p className="text-center text-gray-600 mb-8">Generate stunning images from text prompts free with AnyTool AI.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Textarea placeholder="Describe the image you want to create..." className="min-h-[150px] mb-4" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Generate Image</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
