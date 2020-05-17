import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../Redux/Directory/directory.selector';

import MenuItem from '../Menu-Item/menu-item';

import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({sections}) => (
    <DirectoryMenuContainer>
        {sections.map(({id, ...otherSectionProps})=> (
            <MenuItem key={id} {...otherSectionProps}/>
        ))}
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);