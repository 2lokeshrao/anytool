import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CN2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">CN2 Services</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 mb-4">Premium CN2 GIA network services for better connectivity.</p>
          <Button className="bg-purple-600 hover:bg-purple-700">Learn More</Button>
        </div>
      </div>
    </div>
  )
}
