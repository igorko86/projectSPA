import React from 'react';

const PostItem = () => {
    return (
        <div>
            <img src="data:image/png;base64,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" alt="avatar" />
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

export default PostItem;