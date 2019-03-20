import React from 'react';
import PostItem from './Post';

const Posts = () => {
    return (
        <div>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <PostItem />
        </div>
    );
};

export default Posts;