import Product from './pages/Product';
import Home from './pages/ Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ErrorPage from './pages/RouteError';
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
        { path: '/', element: <Home />, errorElement: <ErrorPage /> },
        {
          path: '/products',
          element: <ProductList />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/products/:category',
          element: <ProductList />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/products/product/:id',
          element: <Product />,
          errorElement: <ErrorPage />,
        },
        { path: '/cart', element: <Cart />, errorElement: <ErrorPage /> },
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
          errorElement: <ErrorPage />,
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
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
