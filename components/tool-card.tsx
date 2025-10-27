import Link from "next/link"
import { Star } from "lucide-react"

interface ToolCardProps {
  title: string
  description: string
  icon: string
  badge?: string
  href: string
}

export function ToolCard({ title, description, icon, badge, href }: ToolCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 cursor-pointer group relative h-full flex flex-col">
        <div className="absolute top-4 right-4">
          <Star className="w-5 h-5 text-gray-300 hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-colors" />
        </div>
        
        <div className="flex items-center justify-center mb-5 mt-2">
          <div className="w-16 h-16 flex items-center justify-center">
            <svg className="w-full h-full text-purple-500" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="12" y="16" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2.5" opacity="0.8"/>
              <circle cx="24" cy="28" r="4" stroke="currentColor" strokeWidth="2.5" opacity="0.8"/>
              <path d="M36 32L40 36L50 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
            </svg>
          </div>
        </div>
        
        <h3 className="text-base font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors flex items-center gap-2 flex-wrap">
          <span>{title}</span>
          {badge && (
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-medium">
              {badge}
            </span>
          )}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  )
}
