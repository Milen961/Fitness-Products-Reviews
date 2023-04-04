import { useEffect, useCallback, useState, useMemo } from "react";
import LatestReview from "./LatestReviews"

export const Home = () => {
  const [latestReviews, setLatestReviews] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:3030/data/products`)
          .then(res => res.json())
          .then(result => {
            setLatestReviews(result.map(x => ({ ...x, rating: 0 })));
          });
  }, []);

  const onLikeClick = useCallback((productId) => {
    setLatestReviews(state => state.map(x => x._id ===  productId ? { ...x, rating: x.rating + 1 } : x));
  }, [])

  return (
      <section id="welcome-world">

          <div className="welcome-message">
              {/* <h2>ALL new Review are</h2> */}
          </div>
          <img src="https://img.freepik.com/premium-vector/gym-logo-design-template-fitness-club-creative-symbols_487414-2141.jpg?w=2000" alt="fit" />

          <div id="home-page">
              <h1>Latest Reviews </h1>

              {latestReviews.map(product => <LatestReview key={product._id} {...product} onLikeClick={onLikeClick} />)}

              {latestReviews.length === 0 && <p className="no-articles">No reviews yet</p>}
          </div>
      </section>
  );
  }
  