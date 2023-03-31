import { useEffect, useContext, useState, useReducer } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { productServiceFactory } from "../../services/productService";
import { useService } from "../../hooks/useService";
import { productReducer } from "../../reducer/productReducer";
import * as commentService from '../../services/commentService';
import { AddComment } from "./AddComment/AddComment";

export const ProductDetails = () => {
    
    const { productId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const [product, dispatch] = useReducer(productReducer, {});
    const productService = useService(productServiceFactory)
    const { accessToken } = useContext(AuthContext);
    const navigate = useNavigate();
    


    // const [username, setUsername] = useState('');
    // const [comment, setComment] = useState('');



    useEffect(() => {
        Promise.all([
            productService.getOne(productId),
            commentService.getAll(productId),
        ]).then(([productData, comments]) => {
            const productState = {
                ...productData,
                comments,
            };
            
            dispatch({type: 'PRODUCT_FETCH', payload: productState})
        });
    }, [productId]);

    const onCommentSubmit = async (values) => {
        if (!accessToken) {
            // User is not authenticated, handle it here
            console.log('User is not authenticated');
            return;
        }
    
        const response = await commentService.create(productId, values.comment, {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
    
        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
        });
    };
    
    

    const isOwner = product._ownerId === userId;
        
   const onDelete = () => {
    window.location.reload()
   }
     
    const onDeleteClick = async () => {
        await productService.delete(product._id);
        dispatch({ type: 'PRODUCT_DELETE' });
        navigate('/catalog');
        onDelete()
    };
    return (
        <section id="product-details">
            <h1>Product Details</h1>
            <div className="info-section">

                <div className="product-header">
                    <img className="product-img" src={product.imageUrl} />
                    <h1>{product.title}</h1>
                    <p className="type">{product.category}</p>
                </div>

                <p className="text">{product.description}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {product.comments && product.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!product.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>


            {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${product._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

        </section>
    );
};

