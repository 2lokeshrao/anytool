"use client"

import Link from "next/link"
import { Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center">
            <div className="bg-gradient-to-r from-purple-600 to-purple-400 px-4 py-2 rounded">
              <span className="text-white font-bold text-xl">anytool</span>
              <span className="text-white font-normal text-xl">.com</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-purple-600">Home</Link>
            <Link href="/cn2" className="hover:text-purple-600">CN2</Link>
            <Link href="/convert-tools" className="hover:text-purple-600">Convert Tools</Link>
            <Link href="/ai-writer" className="hover:text-purple-600">AI Writer</Link>
            <Link href="/hex-calculator" className="hover:text-purple-600">Hex Calculator</Link>
            <Link href="/image-tools" className="hover:text-purple-600">Image Tools</Link>
            <Link href="/sora2-video-generator" className="hover:text-purple-600">Sora2 Video Generator</Link>
            <Link href="/crazygames" className="hover:text-purple-600">Crazygames</Link>
            <Link href="/pdf-converter" className="hover:text-purple-600">PDF Converter</Link>
            <Link href="/json-tool" className="hover:text-purple-600">JSON Tool</Link>
            <Link href="/js-obfuscation" className="hover:text-purple-600">JS Obfuscation</Link>
            <Link href="/register" className="hover:text-purple-600">Register or Log In</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4 pb-3">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <Select defaultValue="en">
              <SelectTrigger className="w-[120px] border-0">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="zh">简体中文</SelectItem>
                <SelectItem value="tw">繁體中文</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="ko">한국어</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex-1 max-w-md relative">
            <Input 
              placeholder="Select directly or search for options" 
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          
          <span className="text-sm text-gray-600">4 Tools</span>
        </div>
      </div>
    </header>
  )
}
