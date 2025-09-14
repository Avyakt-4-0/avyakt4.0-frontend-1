'use client'
import React from 'react'
import GoogleDocsViewer from '@/components/google_docs_viewer'
import { useSearchParams } from 'next/navigation'
import NavBar from '@/components/nav-bar'

export default function page() {
    const docsId = useSearchParams().get("docsId")

    return (
        <div>
            <NavBar />
            <GoogleDocsViewer docUrlOrId={docsId || ""} />
        </div>
    )
}
