import { urlFor } from '@/sanity/lib/image';
import { Flame } from 'lucide-react';
import { p } from 'motion/react-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border-[1px] border-shop-dark-blue/20 rounded-md bg-white group">
      <div className="relative group overflow-hidden bg-shop-light-bg">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={700}
            height={700}
          />
        )}
        {product?.status === 'sale' && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-shop-dark-color/50 px-2 rounded-full group-hover:border-shop-light-green group-hover:text-shop-light-green hoverEffect">
            Sale!
          </p>
        )}
        {product?.status === 'new' && (
          <p className="absolute top-2 left-2 z-10 text-xs border border-shop-dark-color/50 px-2 rounded-full group-hover:border-shop-light-green group-hover:text-shop-light-green hoverEffect">
            New!
          </p>
        )}
        {product?.status === 'hot' && (
          <Link
            href={'/deal'}
            className="absolute top-2 left-2 z-10 border border-shop-orange/50 p-1 rounded-full group-hover:border-shop-orange hover:text-shop-dark-green hoverEffect"
          >
            <Flame
              size={18}
              fill="#fb6c08"
              className="text-shop-orange/50 group-hover:text-shop-orange hoverEffect"
            />
          </Link>
        )}
      </div>
      <div className="p-3">Product details</div>
    </div>
  );
};

export default ProductCard;
