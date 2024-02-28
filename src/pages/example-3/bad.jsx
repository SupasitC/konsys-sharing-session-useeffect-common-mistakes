import { useEffect, useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const cart = [
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

export const ChildComponent = ({
  wrapperClassName, wrapperStyle, relative, minHeight = 364, maxHeight, selectedRows, setSelectedRows,
}) => {
  const [isAllChecked, setIsAllChecked] = useState(false)

  useEffect(() => {
    if (isAllChecked) {
      setSelectedRows(cart || [])
    } else {
      setSelectedRows([])
    }
  }, [isAllChecked])

  return (
    <div
      className={`${relative && 'relative'} overflow-x-auto ${wrapperClassName}`}
      style={{
        ...wrapperStyle,
        minHeight,
        maxHeight,
      }}
    >
      <div className="items-top flex space-x-2">
        <Checkbox id="terms1" checked={isAllChecked} onCheckedChange={() => setIsAllChecked(!isAllChecked)} />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Select All
          </label>
        </div>
      </div>
      {
        cart.map((product) => (
          <div key={product.id} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 my-4">
            <div>
              <Checkbox
                checked={selectedRows.some((row) => row.id === product.id)}
                onCheckedChange={(isChecked) => {
                  if (isChecked) {
                    setSelectedRows([...selectedRows, product])
                    if (selectedRows.length + 1 === cart.length) setIsAllChecked(true)
                  } else {
                    setSelectedRows(selectedRows.filter((row) => row.id !== product.id))
                    setIsAllChecked(false)
                  }
                }}
              />
            </div>
            <div className="space-y-2 leading-none">
              <p className='font-semibold'>
                {product.name}
              </p>
              <p className='font-light'>
              {product.price} Baht
              </p>
            </div>
          </div>
        ))
      }
      <Button className='bg-green-500'>Checkout</Button>
    </div>
  )
}

export const ParentComponent = () => {
  const [selectedRows, setSelectedRows] = useState([])
  return (
    <ChildComponent
      selectedRows={selectedRows}
      setSelectedRows={setSelectedRows}
    />
  )
}

export default ParentComponent
