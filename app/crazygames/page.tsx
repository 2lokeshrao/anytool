import { Header } from "@/components/header"

export default function CrazygamesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Crazy Games</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <p className="text-gray-600 text-center">Fun games collection coming soon!</p>
        </div>
      </div>
    </div>
  )
}
