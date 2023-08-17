import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
  title: 'blog'
}

const Blog = () => {
  return (
    <>
      <h1 className="text-3xl text-center my-6">{"Cv's"}</h1>

    </>
  );
};

export default Blog;