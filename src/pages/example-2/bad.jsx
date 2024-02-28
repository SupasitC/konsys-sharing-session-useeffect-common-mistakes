import { ProductCard } from '@/components';
import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
]

function ParentComponent() {
  const [carts, setCarts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(carts.reduce((acc, product) => acc + product.price, 0))
  },[carts])

  return (
    <div>
      <div className='grid grid-flow-row grid-cols-4 gap-2'>
        {
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                addToCart={() => setCarts([...carts, product])}
                removeFromCart={() => setCarts(carts.filter((cart) => cart.id !== product.id))}
                carts={carts}
              />
            )
          })
        }
      </div>
      <p className='text-2xl my-4'>Total Price: {totalPrice}</p>
    </div>
  )
}

export default ParentComponent;