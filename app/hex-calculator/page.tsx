"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HexCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Hex Calculator</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
          <Input placeholder="Enter hex value..." className="mb-4" />
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Calculate</Button>
        </div>
      </div>
    </div>
  )
}
