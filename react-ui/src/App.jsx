import Product from './pages/Product';
import Home from './pages/ Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import styled from 'styled-components';
import Payments from './pages/Payments';

const App = () => {
  const Container = styled.div``;
  return (
    <Container>
      <Register />
      <Login />
      <Home />
      <ProductList />
      <Product />
      <Cart />
      <Payments />
    </Container>
  );
};

export default App;
