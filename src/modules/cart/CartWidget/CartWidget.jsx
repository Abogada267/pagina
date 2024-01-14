import { CartContext } from '@/Context/CartContext.jsx';
import { LOAD_CART_MOCK } from '@/Utilis/globalConstants.jsx';
import { pluralize } from '@/Utilis/textUtils.jsx';
import useCartMock from '@/mocks/useCartMock';
import Price from '@/modules/item/Price/Price.jsx';
import Badge from '@/modules/ui/Badge/Badge';
import IconButton from '@/modules/ui/IconButton/IconButton.jsx';
import CartIcon from '@/modules/ui/Icons/CartIcon.jsx';
import CrossIcon from '@/modules/ui/Icons/CrossIcon.jsx';
import clsx from 'clsx';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function CartWidget({ ...props }) {
  const { cartQuantity, cartTotalAmount, clearCart } = useContext(CartContext);
  const quantity = cartQuantity();
  useCartMock(LOAD_CART_MOCK);

  return (
    <div className={clsx('dropdown dropdown-end', props.className)}>
      {/* Badge */}
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <CartIcon />
          {quantity > 0 && <Badge>{quantity}</Badge>}
        </div>
      </label>

      {/* Cart badge menu */}
      <div tabIndex={0} className='mt-3 shadow card card-compact dropdown-content w-60 bg-base-100'>
        <div className='text-center card-body'>
          {quantity === 0 ? (
            <span className='text-lg font-bold'>El carrito está vacío</span>
          ) : (
            <>
              <span className='text-lg font-bold'>{pluralize(quantity, 'artículo')}</span>
              <Price className='text-lg text-info' price={cartTotalAmount()} currency='ARS' />
              <div className='card-actions'>
                <IconButton
                  className='w-full mt-0 btn-error btn-outline'
                  icon={<CrossIcon />}
                  onClick={() => {
                    clearCart();
                    toast.success(<p>Carrito eliminado.</p>);
                  }}
                >
                  Limpiar carrito
                </IconButton>
                <IconButton className='btn-primary btn-sm sm:btn-md btn-block' icon={<CartIcon />}>
                  <Link to='/cart'>Ver carrito</Link>
                </IconButton>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartWidget;