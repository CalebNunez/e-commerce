import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import {selectCollectionsForPreview} from "../../redux/shop/shopSelectors";
import CollectionPreview from "../collect-preview/collection-preview";

import './collections-overview-styles.scss';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
      collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))
    }
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
