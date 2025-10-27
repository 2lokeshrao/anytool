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
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group relative h-full flex flex-col min-h-[200px]">
        <div className="absolute top-3 right-3">
          <Star className="w-4 h-4 text-gray-300 hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-colors" />
        </div>
        
        <div className="flex items-center justify-center mb-3">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg className="w-full h-full text-purple-500" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
              <circle cx="18" cy="22" r="3" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
              <path d="M28 24L31 27L38 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            </svg>
          </div>
        </div>
        
        <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors flex items-center gap-1 flex-wrap">
          <span>{title}</span>
          {badge && (
            <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded font-medium">
              {badge}
            </span>
          )}
        </h3>
        
        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  )
}
