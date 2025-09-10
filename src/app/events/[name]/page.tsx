'use client'
import ComingSoon from '@/components/ComingSoon'
import { use } from 'react'

export default function BlogPostPage({
    params,
}: {
    params: Promise<{ name: string }>
}) {
    const { name } = use(params)
    const isCompleted = false
    return (
        <div>
            {isCompleted ? <p>{name}</p> : <ComingSoon />}
        </div>
    )
}