import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Details() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts');
        const postsData = response.data;
        setPosts(postsData); 
        console.log('Fetched Posts:', postsData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts(); 
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${postId}`);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
      console.log('Post deleted successfully.');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">All Data:</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="border border-gray-200 rounded-md p-4 mb-4">
            <p className="text-lg font-semibold">Name: {post.name}</p>
            <p className="text-gray-600">E-mail: {post.email}</p>
            <p className="text-gray-600">Password: {post.password}</p>
            <div className="flex mt-2">
              <Link to={`/update/${post.id}`} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md hover:bg-blue-600">
                Update
              </Link>
              <button onClick={() => handleDelete(post.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
