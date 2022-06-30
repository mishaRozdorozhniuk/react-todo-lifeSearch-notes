import React, { useState, useEffect } from 'react';
import PostServise from '../../API/PostServise.js';
import { getPageArray, getPages } from '../../utils/pages.js';
import { Input } from '../Input/Input.jsx';
import { Loader } from '../Loader/Loader.jsx';
import { PostList } from '../PostList/PostList.jsx';
import './FetchedPosts.css';

export const FetchedPosts = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  let pagesArray = getPageArray(totalPages);

  let newPosts = [...posts];

  if (query !== '') {
    newPosts = posts.filter((post) => {
      return post.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  useEffect(() => {
    fetchedPosts();
  }, [page]);

  async function fetchedPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostServise.getAll(limit, page);
      setPosts(posts.data);
      const totalCount = posts.headers['x-total-count'];
      setTotalPages(getPages(totalCount, limit));
      setIsPostsLoading(false);
    }, 1000);
  }

  const searchInputHeandler = (e) => {
    setQuery(e.target.value);
  };

  const filterPostsHandler = (filteredBy) => {
    const newFilteredPosts = [...posts];
    newFilteredPosts.sort((x, y) => {
      if (x[filteredBy] < y[filteredBy]) return -1;
      if (x[filteredBy] > y[filteredBy]) return 1;
    });
    setPosts(newFilteredPosts);
  };

  const changeCurrentPage = (page) => {
    setPage(page);
  };

  return (
    <div className="fetched-posts">
      <div className="group-btn">
        <button onClick={() => filterPostsHandler('title')} className="get-posts">
          Фильтровать по названию
        </button>
        <button onClick={() => filterPostsHandler('body')} className="get-posts filter-body">
          Фильтровать по описанию
        </button>
      </div>
      <button onClick={fetchedPosts}>GET POSTS</button>
      <Input
        className="search-input"
        placeholder="What are you interesting in?"
        onChange={searchInputHeandler}
      />
      {isPostsLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      ) : (
        <PostList newPosts={newPosts} />
      )}
      <div className="btn-wrapper">
        {pagesArray.map((p) => (
          <button onClick={() => changeCurrentPage(p)} key={p} className="pagination-btn">
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

//

// https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10
