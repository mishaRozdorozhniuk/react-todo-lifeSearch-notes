import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import './FetchedPost.css'
import PostServise from '../../API/PostServise'
import {useFetch} from '../../hooks/useFetch'

export const FetchedPost = () => {
    let { postId } = useParams();
    const [post, setPosts] = useState([])
    const [comments, setComments] = useState([])

    const PostURL = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const CommentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`

    const fetchPostsData = useFetch(setPosts, PostURL);
    const fetchCommentsData = useFetch(setComments, CommentsURL);

    return (
        <article>
            <h2>{post.id}</h2>
            <p>Заголовок:{post.title}</p>
            <span>Коментарии</span>
            <address>
                {comments.map(c => (
                    <article className="comment" key={c.id}>
                        <p>name: {c.name}</p>
                        <p>email: {c.email}</p>
                        <p>body: {c.body}</p>
                    </article>
                ))}
                
            </address>
        </article>
    )
}