#!/bin/bash

# Create Image Beautifier
mkdir -p app/tools/image-beautifier
cat > app/tools/image-beautifier/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ImageBeautifierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Image Beautifier</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Image Beautifier</h1>
          <p className="text-center text-gray-600 mb-8">Beautify photos online: crop, annotate, zoom, and export HD images.</p>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Button className="bg-green-500 hover:bg-green-600">Upload Image</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create Online Drawing Board
mkdir -p app/tools/online-drawing-board
cat > app/tools/online-drawing-board/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function OnlineDrawingBoardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Online Drawing Board</span>
        </div>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Online Drawing Board</h1>
          <p className="text-center text-gray-600 mb-8">Free online drawing board to paint and sketch.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="border-2 border-dashed border-gray-300 h-96 flex items-center justify-center">
              <p className="text-gray-400">Canvas Area - Drawing tools will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create PDF to Word Converter
mkdir -p app/tools/pdf-to-word-converter
cat > app/tools/pdf-to-word-converter/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PDFToWordPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>PDF to Word Converter</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">PDF to Word Converter</h1>
          <p className="text-center text-gray-600 mb-8">Convert PDF files to editable Word documents.</p>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <Button className="bg-red-500 hover:bg-red-600">Upload PDF</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create Text to Speech
mkdir -p app/tools/text-to-speech
cat > app/tools/text-to-speech/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function TextToSpeechPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Text to Speech</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Text to Speech</h1>
          <p className="text-center text-gray-600 mb-8">Convert text to natural-sounding speech.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Textarea placeholder="Enter text to convert to speech..." className="min-h-[200px] mb-4" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Generate Speech</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create Regex Tester
mkdir -p app/tools/regex-tester
cat > app/tools/regex-tester/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function RegexTesterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>Regex Tester</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Regex Tester</h1>
          <p className="text-center text-gray-600 mb-8">Test and debug regular expressions online.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Input placeholder="Enter regex pattern..." className="mb-4 font-mono" />
            <Textarea placeholder="Enter test string..." className="min-h-[200px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

# Create URL Shortener
mkdir -p app/tools/url-shortener
cat > app/tools/url-shortener/page.tsx << 'EOF'
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function URLShortenerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>URL Shortener</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">URL Shortener</h1>
          <p className="text-center text-gray-600 mb-8">Shorten long URLs for easy sharing.</p>
          <div className="bg-white rounded-lg shadow p-6">
            <Input placeholder="Enter long URL..." className="mb-4" />
            <Button className="bg-purple-600 hover:bg-purple-700 w-full">Shorten URL</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF

echo "Additional tool pages created!"
