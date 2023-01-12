import {Link} from "react-router-dom"
import products from "../../data";


const Product = () => {
  return (
    <section>
        <h2>Product Page</h2>
        <div className="products">
        {products.map((product)=>{
          return <article key={product.id}>
            <h5>{product.name}</h5>
          <Link to={`/products/${product.id}`} >more info</Link>
          </article>
        })}
        </div>
    </section>
  );
}

export default Product;
