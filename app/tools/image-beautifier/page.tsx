"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ImageBeautifierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Image Beautifier</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Image Beautifier</h1>
          <p className="text-center text-gray-600 mb-8">Beautify photos online: crop, annotate, zoom, and export HD images.</p>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Button className="bg-green-500 hover:bg-green-600">Upload Image</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
