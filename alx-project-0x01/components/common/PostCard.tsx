import React from 'react';

interface PostCardProps {
  // Just a placeholder for now; we’ll extend these later.
  title?: string;
  body?: string;
}

const PostCard: React.FC<PostCardProps> = ({ title = 'Title', body = 'Body' }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
