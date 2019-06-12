import React, { Component } from 'react'

export default class Search extends Component {
    
    

    render() {
        return (
            <div style={{borderStyle:'solid', marginTop:'10px', padding:'10px'}}>
                <h3 style={{margin:0}}>Search for a breed</h3>
                <input type='search' onChange={this.props.handleChange} value={this.props.input}></input>
                <button onClick={this.props.handleSearch}>search</button>
                <div>{this.props.status}</div>
            </div>
        )
    }
}
