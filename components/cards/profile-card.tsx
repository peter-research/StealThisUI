import React from "react"
import { cn } from "@/lib/cn"

export interface ProfileCardProps {
  name: string
  role?: string
  bio?: string
  avatarUrl?: string
  className?: string
}

export function ProfileCard({ name, role, bio, avatarUrl, className }: ProfileCardProps) {
  return (
    <div className={cn("max-w-sm rounded-xl border border-border bg-card p-6 shadow-sm", className)}>
      <div className="flex items-center gap-4">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-lg font-semibold">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-semibold">{name}</h3>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
      {bio && <p className="mt-4 text-sm text-muted-foreground">{bio}</p>}
    </div>
  )
}
