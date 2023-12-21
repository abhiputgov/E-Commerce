import Product from './pages/Product';
import Home from './pages/ Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import styled from 'styled-components';
import Payments from './pages/Payments';
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from 'react-router-dom';

const App = () => {
  const loggedIn = false;
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/products', element: <ProductList /> },
        { path: '/products/:category', element: <ProductList /> },
        { path: '/products/product/:id', element: <Product /> },
        { path: '/cart', element: <Cart /> },
        {
          path: '/login',
          element: <Login />,
          loader: async () => {
            if (loggedIn) {
              return redirect('/');
            } else {
              return null;
            }
          },
        },
        {
          path: '/register',
          element: <Register />,
          loader: async () => {
            if (loggedIn) {
              return redirect('/');
            } else {
              return null;
            }
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
