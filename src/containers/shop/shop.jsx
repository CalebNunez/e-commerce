import React, { useState } from 'react';
import CollectionPreview from '../../components/collect-preview/collection-preview';
import SHOP_DATA from './shopData';

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className='shop-page'>
      {
        collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))
      }
    </div>
  )
};

export default ShopPage;
