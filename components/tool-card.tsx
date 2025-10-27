import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <div className="text-4xl text-purple-500">{icon}</div>
            <Star className="w-5 h-5 text-gray-300 hover:text-yellow-400 cursor-pointer" />
          </div>
          <CardTitle className="text-lg group-hover:text-purple-600 transition-colors flex items-center gap-2">
            {title}
            {badge && (
              <Badge variant="secondary" className="bg-purple-100 text-purple-600 text-xs">
                {badge}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm line-clamp-3">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
