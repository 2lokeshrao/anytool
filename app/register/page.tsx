"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Register or Log In</h1>
          <div className="space-y-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Sign In</Button>
            <Button variant="outline" className="w-full">Create Account</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
