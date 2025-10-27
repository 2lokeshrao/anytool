import { Header } from "@/components/header"
import { ToolCard } from "@/components/tool-card"

export default function JSONToolPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">JSON Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ToolCard title="JSON Editor" description="Edit and format JSON" icon="📝" href="/tools/json-editor" />
        </div>
      </div>
    </div>
  )
}
