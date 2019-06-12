import React, { Component } from 'react';
import {StyledForm} from '../styledComponents/elements'

export default class Search extends Component {
    render() {
        return (
            <StyledForm>
                <h3>Search for a breed</h3>
                <input type='search' onChange={this.props.handleChange} value={this.props.input}></input>
                <button onClick={this.props.handleSearch}>search</button>
                <div>{this.props.status}</div>
            </StyledForm>
        )
    }
}
