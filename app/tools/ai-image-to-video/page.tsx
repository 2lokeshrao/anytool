"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import Link from "next/link"

export default function AIImageToVideoPage() {
  const [description, setDescription] = useState("")
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link>
          {" / "}
          <Link href="/" className="hover:text-purple-600">Toolboxs</Link>
          {" / "}
          <span>AI Image To Video</span>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">AI Image To Video</h1>
          <p className="text-center text-gray-600 mb-8">
            Convert images or text into pro-quality videos with AI. Free, fast, and easy. Create stunning content now!
          </p>
          
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <Button className="bg-green-500 hover:bg-green-600 mb-6">
              Select Image
            </Button>
            
            <div className="mb-6">
              <Textarea
                placeholder="Text description of the video"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[200px]"
              />
              <p className="text-sm text-gray-500 mt-2">
                💡 Please enter your description in English for better results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Quality:</label>
                <Select defaultValue="speed">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="speed">Speed (default)</SelectItem>
                    <SelectItem value="quality">Quality</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">With Audio:</label>
                <Select defaultValue="yes">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">FPS:</label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30</SelectItem>
                    <SelectItem value="60">60</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Video Size:</label>
                <Select defaultValue="auto">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto (Default)</SelectItem>
                    <SelectItem value="1080x1920">1080x1920</SelectItem>
                    <SelectItem value="1024x1024">1024x1024</SelectItem>
                    <SelectItem value="1920x1080">1920x1080</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Execute</Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600">Watermark Remover</Button>
              <Button className="bg-orange-500 hover:bg-orange-600">
                🔥 Pro: 10-second no watermark
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Recommended tools</h2>
            <div className="flex flex-wrap gap-2 text-sm text-purple-600">
              <Link href="/tools/free-flux-image-generator" className="hover:underline">Free Flux Image Generator</Link>
              <span>-</span>
              <Link href="/tools/video-parser" className="hover:underline">Video Parser</Link>
              <span>-</span>
              <Link href="/tools/chinese-bazi-calculator" className="hover:underline">Chinese Bazi Calculator</Link>
              <span>-</span>
              <Link href="/tools/qr-code-generator" className="hover:underline">QR Code Generator</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
