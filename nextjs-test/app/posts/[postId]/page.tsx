import getFormattedDate from '@/lib/getFormattedDate';
import { getPostData, getSortedPostsData } from '@/lib/posts'
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map(post => {
        postId: post.id
    })
}

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
    const {title, date, contentHtml} = await getPostData(postId);

    const formatDate = getFormattedDate(date);

  return (
    <main className="px-6 prose prose-xl flex flex-col gap-4 prose-slate mx-auto text-white">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <p className="mt-0">{formatDate}</p>
        <article className='flex flex-col gap-5'>
            <section dangerouslySetInnerHTML={{__html: contentHtml}}/>
            <p className='underline'>
                <Link href="/">Back to home</Link>
            </p>
        </article>
    </main>
  )
}
