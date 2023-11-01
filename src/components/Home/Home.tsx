import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const movies = useLoaderData()
  return <div>Home</div>
}
