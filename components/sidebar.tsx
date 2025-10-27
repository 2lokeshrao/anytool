"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const tools = [
  { name: "AI Image To Video", href: "/tools/ai-image-to-video" },
  { name: "AI Video Generator", href: "/tools/ai-video-generator" },
  { name: "AI Image Generator", href: "/tools/ai-image-generator" },
  { name: "Background Remover", href: "/tools/background-remover" },
  { name: "Image Beautifier", href: "/tools/image-beautifier" },
  { name: "Online Drawing Board", href: "/tools/online-drawing-board" },
  { name: "Image Watermark & Beautifier", href: "/tools/image-watermark-beautifier" },
  { name: "Image to Prompts", href: "/tools/image-to-prompts" },
  { name: "Free Image Recognition", href: "/tools/free-image-recognition" },
  { name: "Free Nanobanana Image Generator", href: "/tools/free-nanobanana-image-generator" },
  { name: "Free Turbo Image Generator", href: "/tools/free-turbo-image-generator" },
  { name: "Free Flux Image Generator", href: "/tools/free-flux-image-generator" },
  { name: "Free Seedream Image Generator", href: "/tools/free-seedream-image-generator" },
  { name: "Chinese Calendar", href: "/tools/chinese-calendar" },
  { name: "Online Code Compiler", href: "/tools/online-code-compiler" },
  { name: "Base64 to PDF", href: "/tools/base64-to-pdf" },
  { name: "AI ID Photo Generator", href: "/tools/ai-id-photo-generator" },
  { name: "APK Decompiler", href: "/tools/apk-decompiler" },
  { name: "QR Code Generator", href: "/tools/qr-code-generator" },
  { name: "PHP Encrypt Decrypt", href: "/tools/php-encrypt-decrypt" },
  { name: "PDF to Word Converter", href: "/tools/pdf-to-word-converter" },
  { name: "URL Shortener", href: "/tools/url-shortener" },
  { name: "AI Poem Generator", href: "/tools/ai-poem-generator" },
  { name: "Text to Speech", href: "/tools/text-to-speech" },
  { name: "AI Article Generator", href: "/tools/ai-article-generator" },
  { name: "HTTP Simulator", href: "/tools/http-simulator" },
  { name: "Python Obfuscator & Encryption Tool", href: "/tools/python-obfuscator" },
  { name: "Video Parser", href: "/tools/video-parser" },
  { name: "SQL Designer", href: "/tools/sql-designer" },
  { name: "Base64 Audio Converter", href: "/tools/base64-audio-converter" },
  { name: "Chinese Bazi Calculator", href: "/tools/chinese-bazi-calculator" },
  { name: "Regex Tester", href: "/tools/regex-tester" },
  { name: "htaccess2Nginx", href: "/tools/htaccess2nginx" },
  { name: "Online PS", href: "/tools/online-ps" },
  { name: "JS Code Obfuscator", href: "/tools/js-code-obfuscator" },
  { name: "PHP Base64 Encrypt & Decrypt Tool", href: "/tools/php-base64-encrypt-decrypt" },
  { name: "PDF to Image", href: "/tools/pdf-to-image" },
  { name: "Haskell Online Compiler", href: "/tools/haskell-online-compiler" },
  { name: "Website Mirror Tool", href: "/tools/website-mirror-tool" },
  { name: "Chinese ID Lookup", href: "/tools/chinese-id-lookup" },
  { name: "Audio to Base64", href: "/tools/audio-to-base64" },
  { name: "Chinese Text Converter", href: "/tools/chinese-text-converter" },
  { name: "Barcode Generator", href: "/tools/barcode-generator" },
  { name: "Mind Mapper", href: "/tools/mind-mapper" },
  { name: "Jigsaw Puzzle Tool", href: "/tools/jigsaw-puzzle-tool" },
  { name: "JSON Editor", href: "/tools/json-editor" },
  { name: "Morse Translator", href: "/tools/morse-translator" },
]

export function Sidebar() {
  const pathname = usePathname()
  
  return (
    <aside className="w-64 border-r bg-white h-[calc(100vh-140px)] overflow-y-auto sticky top-[140px]">
      <div className="p-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className={cn(
              "flex items-center gap-2 py-2 px-3 rounded text-sm hover:bg-purple-50 hover:text-purple-600 transition-colors",
              pathname === tool.href && "bg-purple-50 text-purple-600"
            )}
          >
            <span className="text-green-500">T</span>
            <span>{tool.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  )
}
