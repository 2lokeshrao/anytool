"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function JSONEditorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>JSON Editor</span>
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">JSON Editor</h1>
          <p className="text-center text-gray-600 mb-8">Edit, format, and validate JSON online.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Textarea placeholder='{"key": "value"}' className="min-h-[400px] font-mono mb-4" />
            <div className="flex gap-2">
              <Button className="bg-purple-600 hover:bg-purple-700">Format</Button>
              <Button variant="outline">Validate</Button>
              <Button variant="outline">Minify</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
