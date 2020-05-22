import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {selectIsCollectionsLoaded} from '../../Redux/Shop/shop.selector';
import WithSpinner from '../../components/With-Spinner/with-spinner';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer =  compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionPage);

export default CollectionPageContainer;