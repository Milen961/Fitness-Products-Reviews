import { useEffect, useCallback, useState } from "react";
import LatestReview from "./LatestReviews";

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
    setLatestReviews(state => state.map(x => x._id === productId ? { ...x, rating: x.rating + 1 } : x));
  }, [])

  const latestThreeReviews = latestReviews.slice(-2).reverse();

  return (
    <section id="welcome-world">
      {/* <div className="logo">
      <img  src="https://img.freepik.com/premium-vector/gym-logo-design-template-fitness-club-creative-symbols_487414-2141.jpg?w=2000" alt="fit" />
      </div> */}
      <div className="home-page">
        <h1>Welcome to Fitness Product Reviews
          <p>Your source for quality information</p>
        </h1>
        <h2>Latest Reviews </h2>
        <div className="allReviews">
        {latestThreeReviews.map(product => <LatestReview key={product._id} {...product} onLikeClick={onLikeClick} />)}
        </div>
        {latestReviews.length === 0 && <p className="no-articles"></p>}
      </div>
    </section>
  );
}
