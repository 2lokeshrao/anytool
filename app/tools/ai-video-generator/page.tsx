"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function AIVideoGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          {" / "}
          <Link href="/" className="hover:text-purple-600">Toolboxs</Link>
          {" / "}
          <span>AI Video Generator</span>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">AI Video Generator</h1>
          <p className="text-center text-gray-600 mb-8">
            Turn text and images into captivating videos with our free AI video generator. Fast, easy, and no watermark—create yours in seconds.
          </p>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Enter your video prompt:</label>
              <Textarea
                placeholder="Describe the video you want to create..."
                className="min-h-[150px]"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Or upload an image:</label>
              <Button className="bg-green-500 hover:bg-green-600">
                Upload Image
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Duration (seconds):</label>
                <Input type="number" defaultValue="5" min="1" max="30" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Style:</label>
                <select className="w-full border rounded-md p-2">
                  <option>Realistic</option>
                  <option>Animated</option>
                  <option>Cinematic</option>
                  <option>Abstract</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Aspect Ratio:</label>
                <select className="w-full border rounded-md p-2">
                  <option>16:9 (Landscape)</option>
                  <option>9:16 (Portrait)</option>
                  <option>1:1 (Square)</option>
                </select>
              </div>
            </div>
            
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">
              Generate Video
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">How to Use AI Video Generator</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Enter a detailed text description of your desired video</li>
              <li>Or upload an image to use as a starting point</li>
              <li>Select your preferred duration, style, and aspect ratio</li>
              <li>Click "Generate Video" and wait for AI to create your video</li>
              <li>Download and share your video on social media</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
