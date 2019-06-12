import React, { Component } from 'react';
import uuid from 'uuid'

export default class Slect extends Component {
    

    render() {
        let selectOptions = this.props.breeds.map(e => (
            <option value={e.id} key={uuid.v4()}>{e.name}</option>
        ))
        return (
            <div style={{marginTop:'40px', borderStyle:'solid', padding:'10px'}}>
                <h3>select a breed for more photos</h3>
                <select name="catlist" onChange={this.props.handleCategories}>{selectOptions}</select>
                <select name='typeList' onChange={this.props.handleType}>
                    <option value='jpg'>jpg</option>
                    <option value='gif'>gif</option>
                    <option value='png'>png</option>
                </select>

                
            </div>
        )
        
    }
}
