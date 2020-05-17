import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../Collection-Preview/collection-preview';

import {selectCollectionsForPreview} from '../../Redux/Shop/shop.selector';

import {CollectionsOverviewContainer} from './collections-overview.styles';

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}/>
        ))} 
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
