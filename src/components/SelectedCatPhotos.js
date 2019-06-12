import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import uuid from 'uuid'

export default class SelectedCatPhotos extends Component {
    state = {
        photos:[]
    }

    componentDidMount() {
        let fetchLink = `https://api.thecatapi.com/v1/images/search?mime_types=${this.props.selectedType}&breed_ids=${this.props.selectedCat}&limit=6`
        fetch(fetchLink, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key':'888aced5-5167-475e-93e0-a2d76ff35627'
            }
        })
        .then(res => res.json())
        .then(res => this.setState(
            {photos:res}
        ))

    }
    render() {
        return ( 
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <h1>{this.props.selectedCat} page</h1>
                <p>Не расстраивайтесь если страница пуста, в базе не так много фотографий форматов gif и png, жмите в поиске jpeg для большего количества фотографий!</p>
                <Link to='/'><div onClick={this.props.resetSelectState}>back</div></Link>
                {this.state.photos.map(e => <img src={e.url} alt="cat" width='300px' key={uuid.v4()}></img>)}
            </div>
        )
    }
}
