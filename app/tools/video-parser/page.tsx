"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ToolPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Video Parser</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Video Parser</h1>
          <p className="text-center text-gray-600 mb-8">Parse and download videos</p>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <Textarea placeholder="Enter your input here..." className="min-h-[200px]" />
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">Process</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
