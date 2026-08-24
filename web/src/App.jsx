import { useEffect } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './assets/css/owl.css';
import './assets/css/fontawesome.css';
import '../src/assets/css/templatemo-finance-business.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogPost from './pages/BlogPost';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="blog/:slug" element={<BlogPost />} />
    </Route>
  )
);

function App() {
  useEffect(() => {
    if (window.NSMSticky) {
      window.NSMSticky();
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
