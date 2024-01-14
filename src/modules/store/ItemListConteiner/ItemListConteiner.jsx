import { getProducts, getProductsByCategory } from '@/mocks/asyncMock';
import ItemList from '@/modules/store/ItemList/ItemList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className='container flex flex-col items-center gap-4 mx-auto'>
      {/* Optional: Include props.children if needed */}
      {/* {props.children} */}
      
      {loading ? <p>Cargando...</p> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;


