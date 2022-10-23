import { Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from '../product/context/UserProvider';
import { ProductPage, ProductDetail } from '../product/pages';
import { Header } from '../ui';

const AppRouter = () => {
  return (
    <UserProvider>
        <Header />

        <Routes>
                <Route path="product" element={<ProductPage />} />
                <Route path="detail/:id" element={<ProductDetail />} />


                <Route path="/" element={<Navigate to="/product" />} />
        </Routes>
    </UserProvider>
  )
}

export default AppRouter
