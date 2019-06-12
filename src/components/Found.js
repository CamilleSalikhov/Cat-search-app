import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FoundDiv} from '../styledComponents/elements'

export default class Found extends Component {
    state = {
        imgLink: ''
    }
    componentDidMount() {
        console.log(this.props.breed.id)
        if(this.props.breed.id) {

        
        let fetchLink = `https://api.thecatapi.com/v1/images/search?breed_ids=${this.props.breed.id}&size=small`
        fetch(fetchLink, {
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                'x-api-key':'888aced5-5167-475e-93e0-a2d76ff35627'
            }
        })
        .then(res => res.json())
        .then(res => this.setState(
            {imgLink:res[0].url}
        ))

    }
}
    


    render() {
        
        return (
            <FoundDiv>
                found!
                <h3>{this.props.breed.name}</h3>
                <img src={this.state.imgLink} alt="cat" width='300px'></img>
                <p>{this.props.breed.description}</p>
                <Link to='/'><div onClick={this.props.resetFoundState}>back</div></Link>
            </FoundDiv>
        )
    }
}
