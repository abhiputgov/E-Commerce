import Product from './pages/Product';
import Home from './pages/ Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import styled from 'styled-components';

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
    </Container>
  );
};

export default App;
