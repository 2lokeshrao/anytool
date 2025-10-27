import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { ToolCard } from "@/components/tool-card"

const categories = [
  { name: "ALL", active: true },
  { name: "Favorite", active: false },
  { name: "Development", active: false },
  { name: "Runs", active: false },
  { name: "Base64", active: false },
  { name: "AI", active: false },
  { name: "Toolboxs", active: false },
  { name: "Converts", active: false },
  { name: "PDF", active: false },
]

const tools = [
  {
    title: "AI Image To Video",
    description: "Convert images or text into pro-quality videos with AI. Free, fast, and easy. Create stunning content now!",
    icon: "🎬",
    badge: "PRO",
    href: "/tools/ai-image-to-video"
  },
  {
    title: "AI Video Generator",
    description: "Turn text and images into captivating videos with our free AI video generator. Fast, easy, and no watermark—create yours in seconds.",
    icon: "🎥",
    badge: "PRO",
    href: "/tools/ai-video-generator"
  },
  {
    title: "AI Image Generator",
    description: "Generate stunning images from text prompts free with AnyTool's AI. Choose styles, get unique visuals in seconds—no signup.",
    icon: "🖼️",
    badge: "PRO",
    href: "/tools/ai-image-generator"
  },
  {
    title: "Background Remover",
    description: "Remove image backgrounds instantly with our free AI tool. Get transparent PNGs, offline support, and unlimited uses—no signup needed.",
    icon: "✂️",
    badge: "PRO",
    href: "/tools/background-remover"
  },
  {
    title: "Image Beautifier",
    description: "Beautify photos online: crop, annotate, zoom, and export HD images for social media. Fast and free—try now!",
    icon: "✨",
    badge: "PRO",
    href: "/tools/image-beautifier"
  },
  {
    title: "Online Drawing Board",
    description: "Use our free online drawing board to paint, sketch, and try unique effects. No download needed, easy and fun.",
    icon: "🎨",
    badge: "PRO",
    href: "/tools/online-drawing-board"
  },
  {
    title: "Image Watermark & Beautifier",
    description: "Protect and enhance photos online: add watermarks, beautify images, and export in HD quality. Fast, free, and easy to use. Try now!",
    icon: "💧",
    badge: "PRO",
    href: "/tools/image-watermark-beautifier"
  },
  {
    title: "Image to Prompts",
    description: "Convert images to detailed, high-quality AI art prompts instantly for Midjourney & Stable Diffusion. Free, fast.",
    icon: "🔮",
    badge: "PRO",
    href: "/tools/image-to-prompts"
  },
  {
    title: "Free Image Recognition",
    description: "Unlock powerful, free image recognition capabilities. Instantly detect objects, extract text (OCR), and analyze faces with our advanced AI tool.",
    icon: "👁️",
    badge: "PRO",
    href: "/tools/free-image-recognition"
  },
  {
    title: "Free Nanobanana Image Generator",
    description: "Use the Free Nano Banana AI to create stunning visuals & smooth video transitions. Generate pro-quality video from two images with seamless, fast edits.",
    icon: "🍌",
    badge: "PRO",
    href: "/tools/free-nanobanana-image-generator"
  },
  {
    title: "Free Turbo Image Generator",
    description: "Use the Free Turbo AI Image Generator for real-time art creation. Get SDXL Turbo speed, generating high-quality images in a single, fast click.",
    icon: "⚡",
    badge: "PRO",
    href: "/tools/free-turbo-image-generator"
  },
  {
    title: "Free Flux Image Generator",
    description: "Create stunning, high-quality images instantly with the Free Flux AI Image Generator. Enjoy the speed, superior prompt adherence, and easy Text-to-Image art.",
    icon: "🌊",
    badge: "PRO",
    href: "/tools/free-flux-image-generator"
  },
  {
    title: "Free Seedream Image Generator",
    description: "The Free Seedream AI Image Generator is an advanced AI Image Generator that creates images via text input and generates visuals with perfect character consistency.",
    icon: "🌱",
    badge: "PRO",
    href: "/tools/free-seedream-image-generator"
  },
  {
    title: "Chinese Calendar",
    description: "Explore the Chinese Yellow Calendar to find lucky dates, gender predictions, and auspicious times. Free online tool with accurate results.",
    icon: "📅",
    href: "/tools/chinese-calendar"
  },
  {
    title: "Online Code Compiler",
    description: "Write, run, and share code online with support for C#, VB.NET, PHP, Java, and more. Fast, reliable, and no installation needed.",
    icon: "💻",
    href: "/tools/online-code-compiler"
  },
  {
    title: "Base64 to PDF",
    description: "Convert Base64 to PDF files online for free. Preview decoded PDFs in your browser instantly. Fast, simple, no signup required. Try it now!",
    icon: "📄",
    href: "/tools/base64-to-pdf"
  },
  {
    title: "AI ID Photo Generator",
    description: "Generate professional AI ID photos for passport, visa, and ID cards online for free. Fast, accurate, and easy—try HivisionIDPhotos now!",
    icon: "📸",
    href: "/tools/ai-id-photo-generator"
  },
  {
    title: "APK Decompiler",
    description: "Easily decompile Android APKs and recompile them online. Extract source code, make edits, and rebuild APKs for free. Get started now!",
    icon: "📦",
    href: "/tools/apk-decompiler"
  },
  {
    title: "QR Code Generator",
    description: "Generate free QR codes for business cards, URLs, WiFi, and more. Easy to scan and download instantly. Try our QR code generator now!",
    icon: "📱",
    href: "/tools/qr-code-generator"
  },
  {
    title: "PHP Encrypt Decrypt",
    description: "Protect PHP source code with our free online encrypt/decrypt tool. Ensure security with fast, efficient PHP encryption and decryption.",
    icon: "🔐",
    href: "/tools/php-encrypt-decrypt"
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-4">
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                  category.active 
                    ? "bg-purple-600 text-white shadow-sm" 
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="tools-grid">
            {tools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
