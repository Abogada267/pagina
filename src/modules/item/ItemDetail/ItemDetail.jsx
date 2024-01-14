import ItemCount from '@/modules/item/ItemCount/ItemCount'
import ProductImage from '@/modules/item/ProductImage/ProductImage'
import ProductInfo from '@/modules/item/ProductInfo/ProductInfo'
import ProductSpecs from '@/modules/item/ProductSpecs/ProductSpecs'
import ProductTags from '@/modules/item/ProductTags/ProductTags'
import { useContext } from 'react'
import { CartContext } from '../../../Context/CartContext'
import ProductDescription from '../ProductDescription/ProductDescription'

function ItemDetail ({ ...props }) {
  const {
    id, name, category, brand,
    stock, price, priceCurrency, enabled,
    images, banner, description, features
  } = { ...props }
  const { addItemToCart } = useContext(CartContext)
  const initialCount = 1
  const handleOnAdd = (quantity) => {
    const item = { id, name, price, quantity }
    addItemToCart(item, stock)
  }

  return (
    <article className='container flex flex-col gap-6'>
      {/* Product header */}
      <header className='flex flex-col-reverse justify-between gap-6 mx-4 sm:flex-row-reverse'>
        <div className='flex flex-col items-center gap-4 text-xl sm:items-start basis-2/5'>
          <ProductTags {...{ brand, category }} />
          <ProductInfo {...{ name, price, priceCurrency, stock }} />
          <div className='flex flex-col items-center w-full pt-0 sm:pt-10 sm:items-start'>
            {/* TODO: Agregar al carrito */}
            {enabled && stock > 0
              ? <ItemCount
                  initial={initialCount}
                  stock={stock}
                  onAdd={handleOnAdd}
                />
              : <p className='text-2xl font-bold text-center text-gray-500'>Producto no disponible</p>}
          </div>
        </div>
        <ProductImage id={id} src={images[0]} alt={name} className='basis-3/5' />
      </header>

      {/* Product Detail */}
      <main className='flex flex-col items-center gap-10 mx-4 card bg-base-100'>
        {
          banner && banner.length > 0 &&
            <ProductImage id={id} src={banner} alt={`Banner del producto ${name}`} />
        }
        <ProductDescription {...{ name, description }} />
        {features && <ProductSpecs features={features} />}
      </main>
    </article>
  )
}

export default ItemDetail