#!/bin/bash

# Create AI Image Generator
mkdir -p app/tools/ai-image-generator
cat > app/tools/ai-image-generator/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function AIImageGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>AI Image Generator</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">AI Image Generator</h1>
          <p className="text-center text-gray-600 mb-8">Generate stunning images from text prompts free with AnyTool AI.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Textarea placeholder="Describe the image you want to create..." className="min-h-[150px] mb-4" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Generate Image</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create Background Remover
mkdir -p app/tools/background-remover
cat > app/tools/background-remover/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BackgroundRemoverPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Background Remover</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Background Remover</h1>
          <p className="text-center text-gray-600 mb-8">Remove image backgrounds instantly with our free AI tool.</p>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Button className="bg-green-500 hover:bg-green-600 mb-4">Upload Image</Button>
            <p className="text-gray-500">Drag and drop your image here or click to upload</p>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create QR Code Generator
mkdir -p app/tools/qr-code-generator
cat > app/tools/qr-code-generator/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function QRCodeGeneratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>QR Code Generator</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">QR Code Generator</h1>
          <p className="text-center text-gray-600 mb-8">Generate free QR codes for URLs, text, WiFi, and more.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Input placeholder="Enter URL or text..." className="mb-4" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Generate QR Code</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create JSON Editor
mkdir -p app/tools/json-editor
cat > app/tools/json-editor/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function JSONEditorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>JSON Editor</span>
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">JSON Editor</h1>
          <p className="text-center text-gray-600 mb-8">Edit, format, and validate JSON online.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Textarea placeholder='{"key": "value"}' className="min-h-[400px] font-mono mb-4" />
            <div className="flex gap-2">
              <Button className="bg-purple-600 hover:bg-purple-700">Format</Button>
              <Button variant="outline">Validate</Button>
              <Button variant="outline">Minify</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create Base64 to PDF
mkdir -p app/tools/base64-to-pdf
cat > app/tools/base64-to-pdf/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Base64ToPDFPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Base64 to PDF</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Base64 to PDF Converter</h1>
          <p className="text-center text-gray-600 mb-8">Convert Base64 encoded strings to PDF files.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Textarea placeholder="Paste Base64 string here..." className="min-h-[200px] mb-4" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Convert to PDF</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

echo "Tool pages created successfully!"
