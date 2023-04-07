import { useEffect, useReducer } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { productServiceFactory } from "../../services/productService";
import { useService } from "../../hooks/useService";
import { productReducer } from "../../reducer/productReducer";
import * as commentService from "../../services/commentService";
import { AddComment } from "./AddComment/AddComment";
import { useProductContext } from "../../contexts/ProductContext";


export const ProductDetails = () => {
  const { productId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { deleteProduct } = useProductContext();
  const [product, dispatch] = useReducer(productReducer, {});
  const productService = useService(productServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      productService.getOne(productId),
      commentService.getAll(productId),
    ]).then(([productData, comments]) => {
      const productState = {
        ...productData,
        comments,
      };

      dispatch({ type: "PRODUCT_FETCH", payload: productState });
    });
  }, [productId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(productId, values.comment);

    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userEmail,
    });
  };

  const isOwner = product._ownerId === userId;

  const onDeleteClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Are you sure you want to delete ${product.title}`);

    if (result) {
      await productService.delete(product._id);

      deleteProduct(product._id);

      navigate("/catalog");
    }
  };

  return (
    <section id="product-details">
      <h1>Product Details</h1>
      <div className="info-section">
        <div className="product-header">
          <img className="product-img" src={product.imageUrl} alt={product.title} />
          <div className="product-info">
            <h1 className="product-title">Product: {product.title}</h1>
            <p className="product-category">Category: {product.category}</p>
            <p>Description:</p>
            <textarea className="product-description" values={product.description} style={{width: "300px", height: "100px"}} readOnly />
          </div>
        </div>

        <div className="comments-section">
              {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
          <h2>Comments:</h2>
          <ul className="comments-list">
            {product.comments &&
              product.comments.map((x) => (
                <li key={x._id} className="comment">
                  <p className="comment-text">{`${x.author.email}: ${x.comment}`}</p>
                </li>
              ))}
          </ul>

          {!product.comments?.length && <p className="no-comment">No comments.</p>}
        </div>


        {isOwner && (
          <div className="buttons">
            <Link to={`/catalog/${product._id}/edit`} className="edit-button">
              Edit
            </Link>
            <button className="delete-button" onClick={onDeleteClick}>
              Delete
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
