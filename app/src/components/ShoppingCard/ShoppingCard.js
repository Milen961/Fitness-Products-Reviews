import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    title,
    description,
    imageUrl,
    category
}) => {
    return (
        <div className="ALL">
            <div className="allProducts-info">
                <div className="product-image-container">
                  <img className="productImg" src={imageUrl} alt={`Product ${title}`} /> 
                </div>
                <div className="product-details">
                    <h2 className="product-title">Product: {title}</h2>
                    <h3 className="product-category">Category: {category}</h3>
                    <textarea className="product-description" value={description} style={{width: "300px", height: "100px"}} readOnly />
                    <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
                </div>
            </div>
        </div>     
    );
}
