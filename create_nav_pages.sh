#!/bin/bash

# Create CN2 page
mkdir -p app/cn2
cat > app/cn2/page.tsx << 'EOF'
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
EOF

# Create Convert Tools page
mkdir -p app/convert-tools
cat > app/convert-tools/page.tsx << 'EOF'
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
EOF

# Create AI Writer page
mkdir -p app/ai-writer
cat > app/ai-writer/page.tsx << 'EOF'
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
EOF

# Create Hex Calculator page
mkdir -p app/hex-calculator
cat > app/hex-calculator/page.tsx << 'EOF'
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
EOF

# Create Image Tools page
mkdir -p app/image-tools
cat > app/image-tools/page.tsx << 'EOF'
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
EOF

# Create Sora2 Video Generator page
mkdir -p app/sora2-video-generator
cat > app/sora2-video-generator/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Sora2VideoGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Sora2 Video Generator</h1>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
          <Textarea placeholder="Describe your video..." className="min-h-[200px] mb-4" />
          <Button className="bg-purple-600 hover:bg-purple-700 w-full">Generate Video</Button>
        </div>
      </div>
    </div>
  )
}
EOF

# Create Crazygames page
mkdir -p app/crazygames
cat > app/crazygames/page.tsx << 'EOF'
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
EOF

# Create PDF Converter page
mkdir -p app/pdf-converter
cat > app/pdf-converter/page.tsx << 'EOF'
import { Header } from "@/components/header"
import { ToolCard } from "@/components/tool-card"

const pdfTools = [
  { title: "PDF to Word", description: "Convert PDF to Word", icon: "📄", href: "/tools/pdf-to-word-converter" },
  { title: "PDF to Image", description: "Convert PDF to images", icon: "🖼️", href: "/tools/pdf-to-image" },
  { title: "Base64 to PDF", description: "Convert Base64 to PDF", icon: "📋", href: "/tools/base64-to-pdf" },
]

export default function PDFConverterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">PDF Converter</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pdfTools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </div>
  )
}
EOF

# Create JSON Tool page
mkdir -p app/json-tool
cat > app/json-tool/page.tsx << 'EOF'
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
EOF

# Create JS Obfuscation page
mkdir -p app/js-obfuscation
cat > app/js-obfuscation/page.tsx << 'EOF'
import { Header } from "@/components/header"
import { ToolCard } from "@/components/tool-card"

export default function JSObfuscationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">JavaScript Obfuscation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ToolCard title="JS Code Obfuscator" description="Obfuscate JavaScript code" icon="🔒" href="/tools/js-code-obfuscator" />
        </div>
      </div>
    </div>
  )
}
EOF

# Create Register page
mkdir -p app/register
cat > app/register/page.tsx << 'EOF'
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
EOF

echo "All navigation pages created successfully!"
