import { Header } from "@/components/header"
import { ToolCard } from "@/components/tool-card"

const aiWriterTools = [
  { title: "AI Article Generator", description: "Generate articles with AI", icon: "📝", href: "/tools/ai-article-generator" },
  { title: "AI Poem Generator", description: "Create poems with AI", icon: "✍️", href: "/tools/ai-poem-generator" },
]

export default function AIWriterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI Writer Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aiWriterTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </div>
  )
}
