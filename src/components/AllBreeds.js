import React, { Component } from 'react';
import Breed from './Breed';

export default class AllBreeds extends Component {
    render() {
        return this.props.breeds.map((e, index) =>(
            <Breed name={e.name} description={e.description} key={index} id={e.id} />
        ) )
    }
}
