import { CatalogItem } from "./Catalog";
 
export const Catalog = ({
    products,
}) => {
    return (
        <section id="catalog-page">
            <h1>All Products</h1>

            {products.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {products.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
};