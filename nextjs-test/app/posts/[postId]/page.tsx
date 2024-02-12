import { getSortedPostsData } from '@/lib/posts'
import { notFound } from 'next/navigation';
import React from 'react'

export function generateMetaData({params}:{params:{postId:string}}) {
    const posts = getSortedPostsData();
    const {postId} = params;
    const post = posts.find(post => post.id === postId)

    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({params}:{params:{postId:string}}) {
    const posts = getSortedPostsData();
    const {postId} = params;
    if(!posts.find(post => post.id === postId)) {
        return notFound();
    }

  return (
    <div>page</div>
  )
}
