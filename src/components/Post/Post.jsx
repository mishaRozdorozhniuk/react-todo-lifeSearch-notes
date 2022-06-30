import React from 'react';
import {useNavigate} from 'react-router-dom'
import './Post.css'

export const Post = ({posts}) => {
    const navigate = useNavigate()

    return (
        <div className="post">
            <span className="post-number">{posts.id}</span>
            <span>{posts.title}</span>
            <p>{posts.body}</p>
            <button className="post-btn" onClick={() => navigate(`/fetch/${posts.id}`)}>Читать пост</button>
        </div>
    )
}