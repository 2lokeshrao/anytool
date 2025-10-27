"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Sora2VideoGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Sora2 Video Generator</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <Textarea placeholder="Describe your video..." className="min-h-[200px] mb-4" />
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Generate Video</Button>
        </div>
      </div>
    </div>
  )
}
