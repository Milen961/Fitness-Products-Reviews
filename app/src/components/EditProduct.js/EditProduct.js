import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { productServiceFactory } from "../../services/productService";
import { useProductContext } from "../../contexts/ProductContext";

export const EditProduct = () => {
  const {onProductEdit} = useProductContext()
  const { productId } = useParams();
  const productService = useService(productServiceFactory);
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [imageUrlError, setImageUrlError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: '',
      title: '',
      category: '',
      imageUrl: '',
      description: '',
    },
    onProductEdit
  );

  useEffect(() => {
    productService.getOne(productId)
      .then(result => {
        changeValues(result)
      });
  }, [productId])

  const validateTitle = () => {
    if (values.title.trim() === '') {
      setTitleError('Please enter a product title');
    } else {
      setTitleError('');
    }
  };

  const validateCategory = () => {
    if (values.category.trim() === '') {
      setCategoryError('Please enter a product category');
    } else {
      setCategoryError('');
    }
  };

  const validateImageUrl = () => {
    if (values.imageUrl.trim() === '') {
      setImageUrlError('Please enter an image URL');
    } else {
      setImageUrlError('');
    }
  };

  const validateDescription = () => {
    if (values.description.trim() === '') {
      setDescriptionError('Please enter a product description');
    } else {
      setDescriptionError('');
    }
  };

  return (
    <section id="edit-page" className="auth">
      <form id="edit" method="post" onSubmit={onSubmit}>
        <div className="Edit-Container">
          <h1>Edit Fitness Product</h1>

          <div className="form-group">
            <label htmlFor="routine-title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={values.title}
              onChange={changeHandler}
              onBlur={validateTitle}
            />
            {titleError && <span className="error">{titleError}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={values.category}
              onChange={changeHandler}
              onBlur={validateCategory}
            />
            {categoryError && <span className="error">{categoryError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="routine-img">Image:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={values.imageUrl}
              onChange={changeHandler}
              onBlur={validateImageUrl}
            />
            {imageUrlError && <span className="error">{imageUrlError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              id="description"
              value={values.description}
              onChange={changeHandler}
              onBlur={validateDescription}
            ></textarea>
            {descriptionError && (
              <span className="error">{descriptionError}</span>
            )}
          </div>

          <input className="btn submit" type="submit" disabled={!values.title || !values.category || !values.imageUrl || !values.description} value="Save" />
        </div>
      </form>
    </section>
  );
};
