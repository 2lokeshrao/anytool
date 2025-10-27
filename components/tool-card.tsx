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
      <div className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-xl transition-all duration-200 cursor-pointer group relative h-full flex flex-col">
        <div className="absolute top-4 right-4">
          <Star className="w-5 h-5 text-gray-300 hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-colors" />
        </div>
        
        <div className="flex items-center justify-center mb-4 mt-2">
          <div className="w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full text-purple-500" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="10" width="60" height="60" rx="6" stroke="currentColor" strokeWidth="2.5" opacity="0.3"/>
              <rect x="20" y="30" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="30" cy="42" r="3" fill="currentColor"/>
              <path d="M45 42L50 47L60 37" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors flex items-center gap-2 flex-wrap">
          <span>{title}</span>
          {badge && (
            <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded font-medium">
              {badge}
            </span>
          )}
        </h3>
        
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 flex-grow">
          {description}
        </p>
      </div>
    </Link>
  )
}
