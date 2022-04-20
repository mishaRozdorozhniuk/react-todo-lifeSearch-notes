import React, {useState, useEffect, useCallback} from 'react'
import { useParams } from 'react-router-dom';
import './FetchedPost.css'
import axios from 'axios';

export const FetchedPost = () => {
    let { postId } = useParams();
    const [post, setPosts] = useState('')
    const [comments, setComments] = useState([])

    const fetchPosts = useCallback(async () => {
        const data = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPosts(data.data);
      }, [])
      
      useEffect(() => {
        fetchPosts()
      }, [])

      const fetchComments = useCallback(async () => {
        const data = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        console.log(data);
        setComments(data.data);
      }, [])
      
      useEffect(() => {
        fetchComments()
      }, [])

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