export const Home = () => {
    return (
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>Welcome to FitReviews</h2>
          <h3>Your go-to source for fitness product reviews</h3>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBRptfp7P9FJstotLpQIZQGysDaw6JWPJFZwUb-uI-9v8BhaajzTToELqcJfm6rDOHu0&usqp=CAU" alt="product" />
  
        <div id="home-page">
          <h1>Latest Reviews</h1>
  
          {/* Display div with information about every product (if any) */}
          <div className="product">
            <div className="image-wrap">
              <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2023%2F03%2F03%2FWhat-Happens-to-Your-Body-When-You-Take-Protein-Powder-Every-Day.jpg" alt="product image" />
            </div>
            <h3>Protein Powder</h3>
            <div className="rating">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
              <a href="#" className="btn details-btn">Details</a>
            </div>
          </div>
  
          <div className="product">
            <div className="image-wrap">
              <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1663005594-hovr-infinite-4-1663005562.jpg?crop=1xw:1xh;center,top&resize=980:*" alt="shoe image" />
            </div>
            <h3>Workout Shoes</h3>
            <div className="rating">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
              <a href="#" className="btn details-btn">Details</a>
            </div>
          </div>
  
          <div className="product">
            <div className="image-wrap">
              <img src="https://cdn.mos.cms.futurecdn.net/E6ADsCBuwyLiEb5XCGq2XX.jpg" alt="tracker" />
            </div>
            <h3>Fitness Tracker</h3>
            <div className="rating">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <div className="data-buttons">
              <a href="#" className="btn details-btn">Details</a>
            </div>
          </div>
  
          {/* Display paragraph if there are no products */}
          <p className="no-articles">No products yet</p>
        </div>
      </section>
    );
  }
  