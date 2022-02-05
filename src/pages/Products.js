import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book 1</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Candy 2</Link>
        </li>
        <li>
          <Link to='/products/p3'>A Sandy 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
