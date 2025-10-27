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
      <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group relative flex flex-col min-h-[220px]">
        <div className="absolute top-3 right-3">
          <Star className="w-4 h-4 text-gray-300 hover:text-yellow-400 hover:fill-yellow-400 cursor-pointer transition-colors" />
        </div>
        
        <div className="flex items-center justify-center mb-3 mt-1">
          <div className="text-4xl">{icon}</div>
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
