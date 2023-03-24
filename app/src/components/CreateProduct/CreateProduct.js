import { useForm } from '../../hooks/useForm';

export const CreateProduct = ({
    onCreateProductSubmit,
}) => {
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        imageUrl: '',
        description: '',
    }, onCreateProductSubmit);

    return (
        <section id="create-page" className="auth">
            <form id="create" method="post" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Review</h1>

                    <label htmlFor="leg-title">Product:</label>
                    <input value={values.title} onChange={changeHandler} type="text" id="title" name="title" placeholder="Enter product title" />

                    <label htmlFor="category">Category:</label>
                    <input value={values.category} onChange={changeHandler} type="text" id="category" name="category" placeholder="Enter product category" />

                    <label htmlFor="game-img">Image:</label>
                    <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo" />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={values.description} onChange={changeHandler}></textarea>
                    <input className="btn submit" type="submit" value="Create Review" />
                </div>
            </form>
        </section>
    );
};
