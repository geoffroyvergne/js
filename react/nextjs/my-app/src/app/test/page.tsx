'use client'

import { useState, useEffect } from 'react'
 
export default function Test() {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('http://localhost:3000/api/hello')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  //console.log(posts)

  if (!posts) return <div>Loading...</div>

  return (
  
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <span>Message : {posts.message}</span>
    </div>
  )
}