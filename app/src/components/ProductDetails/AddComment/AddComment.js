import { useState } from 'react';
import { useForm } from '../../../hooks/useForm';

export const AddComment = ({ onCommentSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      comment: '',
    },
    onCommentSubmit
  );

  const [commentError, setCommentError] = useState('');

  const validateComment = () => {
    if (values.comment.trim() === '') {
      setCommentError('Comment is required');
    } else {
      setCommentError('');
    }
  };

  return (
    <article className="create-comment">
      <label>Add new comment:</label>
      <form className="form" onSubmit={onSubmit}>
        <textarea
          name="comment"
          placeholder="Comment..."
          value={values.comment}
          onChange={changeHandler}
          onBlur={validateComment}
          required
        />
        {commentError && <span className="error">{commentError}</span>}
        <input className="btn submit" type="submit" value="Add Comment" />
      </form>
    </article>
  );
};
