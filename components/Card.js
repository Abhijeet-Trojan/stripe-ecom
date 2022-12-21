/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cartState';
// import { quantityState } from '../atoms/quantityState';
import { useToast } from '@chakra-ui/react'

const Card = ({ price }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState)
  // const [quantityItem, setQuantityItem] = useRecoilState(quantityState)
  const toast = useToast()
  const statuses = ['success', 'error']
  const positions = [
    'top',
  ]

  // const addItemToCart = () => {
  //   if(cartItem.findIndex(pro => pro.id === price.id) === -1){
  //     setCartItem(prevState => [...prevState, price ])
  //   }else{
  //     setCartItem(prevState => {
  //       return prevState.map((item) => {
  //         return item.id === price.id ? {...item, quantity: item.quantity + 1}
  //         : item
  //       })
  //     })
  //   }
  // }
  const addItemToCart = price => {
    const found = cartItem.find(p => p.id === price.id)
    if (found) {
      toastError();
      return
    }else{
      setCartItem(prevState => [...prevState, price]);
      toastBlock();
    }
  }

  const toastBlock = () => {
    toast({
      title: `${product.name} Added to your cart`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: positions,
    })
  }

  const toastError = () => {
    toast({
      title: 'Item has been added!',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position: positions,
    })
  }

  // const addQuantity = () => {
  //   setQuantityItem(prevState => [...prevState, price])
  // }

  const { product, unit_amount } = price

  return (
    <div>
      <div className='relative'>
        <div className='relative w-full h-72 rounded-lg overflow-hidden'>
          <img
            src={product.images[0]}
            alt={product.description}
            className='w-full h-full object-center object-cover'
          />
        </div>
        <div className='relative mt-4'>
          <h3 className='text-sm font-medium text-gray-900'>{product.name}</h3>
          {/* <h3 className='text-sm font-medium text-gray-900'>{product.unit_label}</h3> */}
          <p className='mt-1 text-sm text-gray-500'>{product.description}</p>
        </div>
        <div className='absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50'
          />
          <p className='relative text-lg font-semibold text-white'>
            {(unit_amount / 100).toLocaleString('en-CA', {
              style: 'currency',
              currency: 'CAD',
            })}
          </p>
        </div>
      </div>
      <div className='mt-6'>
        <button
          onClick={() => {
            addItemToCart(price);
            // toastBlock();
          }}
          className='relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200'
        >
          Add to Cart
          <span className='sr-only'>, {product.name}</span>
        </button>
        {error && <p className='text-sm text-red-400'>{error}</p>}
      </div>
    </div>
  )
}

export default Card
