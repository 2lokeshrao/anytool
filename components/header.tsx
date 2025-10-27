"use client"

import Link from "next/link"
import { Search, Globe } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Navigation */}
        <div className="flex items-center justify-between py-3 border-b">
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 px-4 py-2 rounded-md">
              <span className="text-white font-bold text-xl">anytool</span>
              <span className="text-white font-normal text-xl">.com</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <Link href="/cn2" className="hover:text-purple-600 transition-colors">CN2</Link>
            <Link href="/convert-tools" className="hover:text-purple-600 transition-colors">Convert Tools</Link>
            <Link href="/ai-writer" className="hover:text-purple-600 transition-colors">AI Writer</Link>
            <Link href="/hex-calculator" className="hover:text-purple-600 transition-colors">Hex Calculator</Link>
            <Link href="/image-tools" className="hover:text-purple-600 transition-colors">Image Tools</Link>
            <Link href="/sora2-video-generator" className="hover:text-purple-600 transition-colors">Sora2 Video Generator</Link>
            <Link href="/crazygames" className="hover:text-purple-600 transition-colors">Crazygames</Link>
            <Link href="/pdf-converter" className="hover:text-purple-600 transition-colors">PDF Converter</Link>
            <Link href="/json-tool" className="hover:text-purple-600 transition-colors">JSON Tool</Link>
            <Link href="/js-obfuscation" className="hover:text-purple-600 transition-colors">JS Obfuscation</Link>
            <Link href="/register" className="hover:text-purple-600 transition-colors">Register or Log In</Link>
          </nav>
        </div>
        
        {/* Search Bar */}
        <div className="flex items-center gap-4 py-3">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-600" />
            <select className="text-sm border-0 bg-transparent focus:outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="zh">简体中文</option>
              <option value="tw">繁體中文</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
            </select>
          </div>
          
          <div className="flex-1 max-w-md relative">
            <Input 
              placeholder="Select directly or search for options" 
              className="pr-10 border-gray-300"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <span className="text-sm text-gray-600">4 Tools</span>
        </div>
      </div>
    </header>
  )
}
