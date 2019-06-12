import React, { Component } from 'react';
import uuid from 'uuid';
import {StyledForm} from '../styledComponents/elements'

export default class Select extends Component {
    

    render() {
        let selectOptions = this.props.breeds.map(e => (
            <option value={e.id} key={uuid.v4()}>{e.name}</option>
        ))
        return (
            <StyledForm>
                <h3>Select a breed for more photos</h3>
                <select defaultValue='DEFAULT' name="catlist" onChange={this.props.handleCategories}>
                <option value='DEFAULT' disabled>Choose a breed ...</option>
                {selectOptions}
                </select>
                <select name='typeList' onChange={this.props.handleType}>
                    <option value='jpg'>jpg</option>
                    <option value='gif'>gif</option>
                    <option value='png'>png</option>
                </select>
            </StyledForm>
        )
        
    }
}
