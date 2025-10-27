#!/bin/bash

# Array of tools to create
declare -a tools=(
  "image-watermark-beautifier:Image Watermark & Beautifier:Protect and enhance photos online"
  "image-to-prompts:Image to Prompts:Convert images to AI art prompts"
  "free-image-recognition:Free Image Recognition:Detect objects and extract text from images"
  "free-nanobanana-image-generator:Free Nanobanana Image Generator:Create stunning visuals with AI"
  "free-turbo-image-generator:Free Turbo Image Generator:Real-time AI art creation"
  "free-flux-image-generator:Free Flux Image Generator:Generate high-quality images instantly"
  "free-seedream-image-generator:Free Seedream Image Generator:Advanced AI image generation"
  "chinese-calendar:Chinese Calendar:Explore the Chinese Yellow Calendar"
  "online-code-compiler:Online Code Compiler:Write and run code online"
  "ai-id-photo-generator:AI ID Photo Generator:Generate professional ID photos"
  "apk-decompiler:APK Decompiler:Decompile and recompile Android APKs"
  "php-encrypt-decrypt:PHP Encrypt Decrypt:Protect PHP source code"
  "ai-poem-generator:AI Poem Generator:Generate creative poems with AI"
  "ai-article-generator:AI Article Generator:Create articles with AI"
  "http-simulator:HTTP Simulator:Test HTTP requests and responses"
  "python-obfuscator:Python Obfuscator:Encrypt and obfuscate Python code"
  "video-parser:Video Parser:Parse and download videos"
  "sql-designer:SQL Designer:Design database schemas visually"
  "base64-audio-converter:Base64 Audio Converter:Convert audio to Base64"
  "chinese-bazi-calculator:Chinese Bazi Calculator:Calculate Chinese Bazi"
  "htaccess2nginx:htaccess2Nginx:Convert htaccess to Nginx config"
  "online-ps:Online PS:Edit images like Photoshop online"
  "js-code-obfuscator:JS Code Obfuscator:Obfuscate JavaScript code"
  "php-base64-encrypt-decrypt:PHP Base64 Encrypt & Decrypt:Encrypt PHP with Base64"
  "pdf-to-image:PDF to Image:Convert PDF pages to images"
  "haskell-online-compiler:Haskell Online Compiler:Compile Haskell code online"
  "website-mirror-tool:Website Mirror Tool:Mirror websites offline"
  "chinese-id-lookup:Chinese ID Lookup:Lookup Chinese ID information"
  "audio-to-base64:Audio to Base64:Convert audio files to Base64"
  "chinese-text-converter:Chinese Text Converter:Convert Chinese text formats"
  "barcode-generator:Barcode Generator:Generate barcodes online"
  "mind-mapper:Mind Mapper:Create mind maps online"
  "jigsaw-puzzle-tool:Jigsaw Puzzle Tool:Create jigsaw puzzles"
  "morse-translator:Morse Translator:Translate text to Morse code"
)

for tool in "${tools[@]}"; do
  IFS=':' read -r slug title description <<< "$tool"
  
  mkdir -p "app/tools/$slug"
  
  cat > "app/tools/$slug/page.tsx" << EOF
"use client"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ToolPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600">Home</Link> / <span>$title</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">$title</h1>
          <p className="text-center text-gray-600 mb-8">$description</p>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <Textarea placeholder="Enter your input here..." className="min-h-[200px]" />
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">Process</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
EOF
  
  echo "Created: $slug"
done

echo "All remaining tool pages created successfully!"
