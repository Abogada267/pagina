import ItemCard from '../ItemCard'

function ItemList ({ products }) {
  return (
    <div
      className='grid justify-center grid-cols-1 gap-4 sm:grid-cols-4'
    >
      {products.map((product) =>
        <ItemCard
          key={product.id} {...product}
        />)}
    </div>
  )
}

export default ItemList