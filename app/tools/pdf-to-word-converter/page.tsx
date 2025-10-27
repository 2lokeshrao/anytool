"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PDFToWordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>PDF to Word Converter</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">PDF to Word Converter</h1>
          <p className="text-center text-gray-600 mb-8">Convert PDF files to editable Word documents.</p>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Button className="bg-red-500 hover:bg-red-600">Upload PDF</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
