import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionFetching} from '../../Redux/Shop/shop.selector';
import WithSpinner from '../With-Spinner/with-spinner';
import CollectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
});

const CollectionsOverviewContainer =  compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionsOverview);

export default CollectionsOverviewContainer;