import { FormEvent, useState } from 'react';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setComments([...comments, newComment]);
        setTempComment('');
    }

    return (
        <div>
            <ul>
                {comments.map(({ comment, id }) => (
                    <li>
                        <p>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} >
                <textarea/>
                <button type="submit">
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;