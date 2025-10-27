import { Header } from "@/components/header"
import { ToolCard } from "@/components/tool-card"

const imageTools = [
  { title: "AI Image Generator", description: "Generate images with AI", icon: "🖼️", badge: "PRO", href: "/tools/ai-image-generator" },
  { title: "Background Remover", description: "Remove backgrounds from images", icon: "✂️", badge: "PRO", href: "/tools/background-remover" },
  { title: "Image Beautifier", description: "Beautify your images", icon: "✨", badge: "PRO", href: "/tools/image-beautifier" },
]

export default function ImageToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Image Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {imageTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </div>
  )
}
