import React from 'react';
import Post from './post';

export default function Posts() {

    const posts = [
        {
          id: 1,
          title: "How to write clean react code",
        },
        {
          id: 2,
          title: "Eat, sleep, code, repeat",
        },
      ];
  return (
    <div>
        <ul>
            {posts.map((post) => (
                <Post key={post.id} title={post.title} />
            ))}
            </ul>
    </div>
  )
}
