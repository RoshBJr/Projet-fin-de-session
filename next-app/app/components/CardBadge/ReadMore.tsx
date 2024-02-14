import React from 'react'
import Link from 'next/link';
interface Props {
    id:number;
}

const ReadMore = ({id}:Props) => {
    return (
        <Link
            href={`/users/${id}`}
            className='inline-flex justify-end underline'>
            Lire plus
        </Link>
    )
}

export default ReadMore;