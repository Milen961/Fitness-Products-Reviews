import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    title,
    description,
    imageUrl,
    category,
}) => {
    return (
        <div className="allProducts">
            <div className="allProducts-info">
                <div className="product-image-container">
                    <img src={imageUrl} alt={`Product ${title}`} />
                </div>
                <div className="product-details">
                    <h2 className="product-title">{title}</h2>
                    <h3 className="product-category">{category}</h3>
                    <p className="product-description">{description}</p>
                    <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
                </div>
            </div>
        </div>
    );
}