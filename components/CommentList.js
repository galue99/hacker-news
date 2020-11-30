import React from 'react';
import Comment from './Comment.js';

export default ({ comments }) => (
    <React.Fragment>
        {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
        ))}
    </React.Fragment>
)