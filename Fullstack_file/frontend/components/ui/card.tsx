import * as React from "react"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function Card({ className, ...props }: CardProps) {
  return <div className={`rounded-lg border bg-white shadow-sm ${className}`} {...props} />
}

function CardHeader({ className, ...props }: CardProps) {
  return <div className={`p-4 border-b ${className}`} {...props} />
}

function CardTitle({ className, ...props }: CardProps) {
  return <h3 className={`font-semibold text-lg ${className}`} {...props} />
}

function CardContent({ className, ...props }: CardProps) {
  return <div className={`p-4 ${className}`} {...props} />
}

export { Card, CardHeader, CardTitle, CardContent }
