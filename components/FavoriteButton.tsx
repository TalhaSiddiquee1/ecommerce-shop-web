import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Product } from '@/sanity.types';

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product: Product | null | undefined;
}) => {
  return (
    <>
      {!showProduct ? (
        <Link href={'/wishlist'} className="group relative">
          <Heart className="w-5 h-5 hover:text-shop-light-green hoverEffect" />
          <span className="absolute -top-1 -right-1 bg-shop-dark-green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
            0
          </span>
        </Link>
      ) : (
        <button className='group relative hover:text-shop-light-green hoverEffect border border-shop-light-green/80 hover:border-shop-light-green p-1.5 rounded-sm'>
          <Heart className='text-shop-light-green/80 group-hover:text-shop-light-green hoverEffect mt-0.5 w-5 h-5' />
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
