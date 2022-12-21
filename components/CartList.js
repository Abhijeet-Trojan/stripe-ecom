import React from 'react'
// import { quantityState } from '../atoms/quantityState'
// import { useRecoilState } from 'recoil';

const CartList = ({ price }) => {
const { product, unit_amount } = price
// const [quantityItem] = useRecoilState(quantityState)

  return (
    <div>

      <div className='bg-[#fff] max-w-[800px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between'>
        <img className='h-[100px]' src={product.images[0]} alt={product.description} />

        <div>
          <div className='font-bold text-2xl'>{product.name}</div>
          <div className='font-bold text-2xl'>{product.unit_label}</div>
          <div>Qty: 1</div>
        </div>


        <div className='text-3xl font-bold'>
            {(
                price.unit_amount / 100).toLocaleString('en-CA', 
                { style: 'currency', currency: 'CAD',}
            )}
        </div>

      </div>

    </div>
  )
}

export default CartList