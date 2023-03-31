import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const CreateProduct = ({ onCreateProductSubmit }) => {
  const [titleError, setTitleError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [imageUrlError, setImageUrlError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const { values, changeHandler, onSubmit } = useForm(
    {
      title: '',
      category: '',
      imageUrl: '',
      description: '',
    },
    onCreateProductSubmit
  );

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
    <section id="create-page" className="auth">
      <form id="create" method="post" onSubmit={onSubmit}>
        <div className="container">
          <h1>Create Review</h1>

          <label htmlFor="leg-title">Product:</label>
          <input
            value={values.title}
            onChange={changeHandler}
            onBlur={validateTitle}
            type="text"
            id="title"
            name="title"
            placeholder="Enter product title"
            />
            {titleError && <span className="error">{titleError}</span>}

          <label htmlFor="category">Category:</label>
          <input
            value={values.category}
            onChange={changeHandler}
            onBlur={validateCategory}
            type="text"
            id="category"
            name="category"
            placeholder="Enter product category"
          />
           {categoryError && <span className="error">{categoryError}</span>}

          <label htmlFor="game-img">Image:</label>
          <input
            value={values.imageUrl}
            onChange={changeHandler}
            onBlur={validateImageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo"
          />
          {imageUrlError && <span className="error">{imageUrlError}</span>}

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            value={values.description}
            onChange={changeHandler}
            onBlur={validateDescription}
          ></textarea>
          {descriptionError && <span className="error">{descriptionError}</span>}

          <input className="btn submit" type="submit" disabled={!values.title || !values.category || !values.imageUrl || !values.description} value="Create Review" />
        </div>
      </form>
    </section>
  );
};
