import { Route, Switch } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <switch>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:productId'>
            <ProductDetails />
          </Route>
        </switch>
      </main>
    </div>
  );
}

export default App;
