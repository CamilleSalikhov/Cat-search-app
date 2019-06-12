import React, { Component } from 'react'

export default class Breed extends Component {
    state = {
        imgLink: ''
    }
    componentDidMount() {
        
        let fetchLink = `https://api.thecatapi.com/v1/images/search?breed_ids=${this.props.id}&size=small`
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
    



    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img src={this.state.imgLink} alt="cat" width='300px'></img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
