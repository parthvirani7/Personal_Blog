import React from 'react';
import BlogPosts from './components/BlogPosts';

function App() {
    return (
        <div>
            <header>
                <h1>Personal Blog</h1>
                <p>Sharing thoughts, stories, and tutorials with the world</p>
            </header>
            <BlogPosts />
        </div>
    );
}

export default App;
