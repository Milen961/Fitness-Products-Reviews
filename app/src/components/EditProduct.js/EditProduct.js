import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService"
import { productServiceFactory } from "../../services/productService"

export const EditProduct = ({
    onProductEdit,
}) => {
    const { productId} = useParams();
    const productService = useService(productServiceFactory);
    const { values, onSubmit, changeValues, changeHandler  } = useForm({
        _id: '',
        title: '',
        category:'',
        imageUrl: '',
        description: '',

    }, onProductEdit);

    useEffect(() => {
        productService.getOne(productId)
        .then(result => {
            changeValues(result)
        });

    }, [productId])

     return (

        <section id="edit-page" className="auth">
    <form id="edit" method="post" onSubmit={onSubmit}>
        <div className="container">
            <h1>Edit Fitness Product</h1>
        <label htmlFor="routine-title">Title:</label>
        <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={changeHandler}
        />

        <label htmlFor="category">Category:</label>
        <input
            type="text"
            id="category"
            name="category"
            value={values.category}
            onChange={changeHandler}
        />

        <label htmlFor="routine-img">Image:</label>
        <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
        />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>
        
        <input className="btn submit" type="submit" value="Edit" />
    </div>
</form>
</section>



     );
}