import { memo } from 'react';
import { Link } from 'react-router-dom';

const LatestReview = ({
    _id,
    imageUrl,
    title,
    category,
    onLikeClick
}) => {
    // let stars = [];
    // for (let i = 0; i < rating; i++) {
    //     stars.push(<span>☆</span>);
    // }

    return (
        <div key={_id} className="review">
            <div className="image-wrap">
                <img src={imageUrl} />
            </div>
            <h2>Product: {title}</h2>
            <h3>Category: {category}</h3>
            <div className="data-buttons">
                <Link to={`/catalog/${_id}`} className="btn details-btn">Details</Link>
                <button className='likeBtn'>Like</button>
            {/* <button className="btn details-btn" onClick={() => onLikeClick(_id)}>Like</button> */}
            </div>
        </div>
    );
}

export default memo(LatestReview);