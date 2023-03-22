export const Home = () => {
    return (
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>Welcome to FitReviews</h2>
          <h3>Your go-to source for fitness product reviews</h3>
        </div>
        <img src="./images/fitness_hero.png" alt="hero" />
  
        <div id="home-page">
          <h1>Latest Reviews</h1>
  
          {/* Display div with information about every product (if any) */}
          <div className="product">
            <div className="image-wrap">
              <img src="./images/protein_powder.png" alt="product image" />
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
              <img src="./images/workout_shoes.png" alt="product image" />
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
              <img src="./images/fitness_tracker.png" alt="product image" />
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
  