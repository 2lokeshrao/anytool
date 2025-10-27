import { Header } from "@/components/header"
import { ToolCard } from "@/components/tool-card"

const convertTools = [
  { title: "PDF to Word", description: "Convert PDF to Word documents", icon: "📄", href: "/tools/pdf-to-word-converter" },
  { title: "PDF to Image", description: "Convert PDF to images", icon: "🖼️", href: "/tools/pdf-to-image" },
  { title: "Base64 to PDF", description: "Convert Base64 to PDF", icon: "📋", href: "/tools/base64-to-pdf" },
  { title: "Audio to Base64", description: "Convert audio to Base64", icon: "🎵", href: "/tools/audio-to-base64" },
]

export default function ConvertToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Convert Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {convertTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </div>
  )
}
