import React from 'react'
import { Post } from '../Post/Post'

export const PostList = ({newPosts}) => {
    return (
        <>
         {newPosts.length ? newPosts.map((post, index) => (
                <Post key={index} posts={post} />
            )) : <span>Ничего не найдено</span>}
        </>
    )
}