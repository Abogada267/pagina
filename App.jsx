import { CartProvider } from "@/Context/CartContext";
import Cart from "@/modules/cart/Cart/Cart.jsx";
import ItemDetailConteiner from "@/modules/item/ItemDetailConteiner/ItemDetailConteiner";
import Footer from "@/modules/layout/Footer/Footer";
import Header from "@/modules/layout/Header";
import ItemListConteiner from "@/modules/store/ItemListConteiner/ItemListConteiner";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globals.css";

function App() {
  return (
    <div>
      {/* Configuración del toast para notificaciones */}
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 4000,
        }}
      />
      {/* Contenedor principal de la aplicación */}
      <div className="container flex flex-col gap-5 m-auto max-w-7xl">
        {/* Configuración de las rutas con React Router */}
        <BrowserRouter>
          {/* Proveedor del contexto del carrito */}
          <CartProvider>
            {/* Encabezado de la aplicación */}
            <Header />
            {/* Contenido principal */}
            <div className="h-screen">
              {/* Definición de las rutas */}
              <Routes>
                <Route path="/" element={<ItemListConteiner />} />
                <Route path="/category/:categoryId" element={<ItemListConteiner />} />
                <Route path="/:productId" element={<ItemDetailConteiner />} />
                <Route path="/cart" element={<Cart />} />
                {/* Ruta por defecto en caso de no coincidir ninguna */}
                <Route path="*" element={<h1 className="flex-1">404 - NO ENCONTRADO</h1>} />
              </Routes>
            </div>
          </CartProvider>
        </BrowserRouter>
        {/* Pie de página de la aplicación */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
