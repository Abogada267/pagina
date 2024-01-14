/* eslint-disable eol-last */
import clsx from 'clsx'
import ShoppingBagIcon from '../../ui/Icons/ShoppingBaglcon'
import Tooltip from '../../ui/Tooltip/Tooltip'

function QuickAddToCart (props) {
  return (
    <Tooltip className='tooltip-primary' text='Agregar al carrito'>
      <button
        tabIndex={0}
        className={clsx('btn', props.className)}
        {...props}
      >
        <ShoppingBagIcon />
      </button>
    </Tooltip>
  )
}

export default QuickAddToCart 