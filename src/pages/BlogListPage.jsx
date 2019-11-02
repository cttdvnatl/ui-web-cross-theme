import React from 'react';
import blogContent from '../database/blog-content';
import BlogList from '../components/BlogList';


const BlogListPage = () => (
    <>
    <h1>Blogs</h1>
    <BlogList blog={blogContent} />
    </>
);

export default BlogListPage;