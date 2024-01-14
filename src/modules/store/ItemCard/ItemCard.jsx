/* eslint-disable eol-last */
import clsx from 'clsx'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Balancer from 'react-wrap-balancer'

import { CartContext } from '../../../Context/CartContext'

// Componentes
import Price from '../../item/Price'
import TextWithLineBreaks from '../../item/TextWithLineBreaks'
import ItemPreview from '../ItemPreview/ItemPreview'
import QuickAddToCart from '../QuickAddToCart/QuickAddToCart'

function ItemCard ({ ...props }) {
  const { id, name, category, price, priceCurrency, images, stock, enabled } = props
  const { addItemToCart } = useContext(CartContext)
  const styles = clsx(props.className,
                      `mx-4 sm:mx-0 border border-1 border-border card bg-background relative p-1 rounded-2xl
                       relative group`)

  const handleChildClick = (event) => {
    event.stopPropagation()
    event.preventDefault()
  }

  return (
    <article className={styles}>
      <Link to={`/${id}`}>
        <p className='absolute z-40 text-xs font-bold uppercase text-background badge badge-primary top-2 right-2'>
          {category}
        </p>
        <div
          className='absolute z-10 hidden group-hover:block top-56 left-4'
          onClick={handleChildClick}
        >
          {
            (stock > 0 && enabled)
              ? <QuickAddToCart
                  className='p-2 btn-primary' onClick={() => addItemToCart({ id, name, price, quantity: 1 }, stock)}
                />
              : <p className='z-40 text-xs font-bold uppercase badge'>Sin stock</p>
          }
        </div>
        <div className='p-4 pt-0 card-body'>
          <ItemPreview className='' id={id} images={images} alt={name} />
          <h3>
            <Balancer ratio={0.5}>
              <TextWithLineBreaks onlyBreakFirstLine styled>{name}</TextWithLineBreaks>
            </Balancer>
          </h3>
          <Price className='text-xl text-green-500 sm:text-base' price={price} currency={priceCurrency} />
        </div>
      </Link>
    </article>
  )
}

export default ItemCard