"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OnlineDrawingBoardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Online Drawing Board</span>
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Online Drawing Board</h1>
          <p className="text-center text-gray-600 mb-8">Free online drawing board to paint and sketch.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="border-2 border-dashed border-gray-300 h-96 flex items-center justify-center">
              <p className="text-gray-400">Canvas Area - Drawing tools will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
