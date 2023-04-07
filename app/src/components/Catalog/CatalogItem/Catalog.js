
import { useProductContext } from "../../../contexts/ProductContext";
import { CatalogItem } from "./CatalogItem";

export const Catalog = () => {
    const { products } = useProductContext();

    return (
        <section id="catalog-page">
          <div className="allReviews">
             <h1>All Reviews</h1> 
          </div>
            {products.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {products.length === 0 && (
                <h3 className="no-articles"></h3>
            )}
        </section>
    );
};