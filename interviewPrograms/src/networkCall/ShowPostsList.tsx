// src/components/PostsList.tsx  (Note the .tsx extension)

import { useState, useEffect } from 'react';

// 1. Define the type for a single post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const ShowPostsList = () => {
  // 2. Type your state variables
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // TypeScript knows `data` will be an array of Post objects
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    // timeout to execute the below code after 10 seconds
    setTimeout(() => {
      fetchPosts();
    }, 10000); // 10 seconds

  }, []);

  if (loading) {
    return <progress value={null} />
  }

  if (error) {
    return <p>Error fetching posts: {error}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          // TypeScript will give you autocomplete for post.id, post.title, etc.
          <li key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem', paddingBottom: '1rem' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowPostsList;