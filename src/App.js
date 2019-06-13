import React, { Component } from 'react';
import AllBreeds from './components/AllBreeds';
import Select from './components/Select';
import Search from './components/Search';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Found from './components/Found';
import SelectedCatPhotos from './components/SelectedCatPhotos';
import uuid from 'uuid';
import {AppStyled,HeaderStyled} from './styledComponents/elements'


export default class App extends Component {
  state = {
    breeds: [],
    searchInput:'',
    searchStatus:'',
    foundBreed: {},
    itemSelected: '',
    typeSelected: 'jpg'
}

componentDidMount() { 
  fetch('https://api.thecatapi.com/v1/breeds', {
      method:'GET',
      headers: {
          'Content-Type' : 'application/json',
          'x-api-key': '888aced5-5167-475e-93e0-a2d76ff35627'
      }})
  .then(res => res.json())
  .then(res => this.setState({
      breeds : res
  }))
}

handleInputChange = (e) => {
  this.setState({
      searchInput:e.target.value
  });
}

handleSearch = (event) => {
  let searchResult = this.state.breeds.find(e => e.name.toUpperCase() === this.state.searchInput.toUpperCase().trim().replace(/\s+/g, " "));
  if(searchResult) {
    this.setState({searchStatus: 'Found!',foundBreed:searchResult});
  } else {
    this.setState({searchStatus: 'Did not find!'})
  }

}

handleSelect = (e) => {
  this.setState(
      {itemSelected:e.target.value}
      )
}

handleType = (e) => {
  this.setState(
      {typeSelected:e.target.value}
      )
}


resetFoundState = (e) => {
  this.setState({
    searchStatus:'',
    foundBreed:{}
  })
}

resetSelectState = (e) => {
  this.setState({
    itemSelected: '',
    typeSelected: 'jpg'

  })
}

 
  
  render() {
    let exactPath = (this.state.foundBreed.name) ? <Redirect to='/found' /> : (this.state.itemSelected ? <Redirect to={'/' + this.state.itemSelected} /> : 
    <div>
    <Search breeds={this.state.breeds} status={this.state.searchStatus} input={this.state.searchInput} handleChange={this.handleInputChange}  handleSearch={this.handleSearch} />
    <Select breeds={this.state.breeds} handleCategories={this.handleSelect} handleType={this.handleType} itemSelected={this.itemSelected} />
    <AllBreeds breeds={this.state.breeds} />
    </div> )
    
    let personalUrls = this.state.breeds.map(e => (
    <Route path={'/' + e.id} key={uuid.v4()} render ={props=> <SelectedCatPhotos selectedCat={this.state.itemSelected} selectedType={this.state.typeSelected} resetSelectState={this.resetSelectState} />} />
    ))
    return (
      <BrowserRouter>
      <AppStyled>
      <HeaderStyled>
      Cat api app
      </HeaderStyled>
      <Route exact path='/' render={props=>(exactPath)} />
      <Route path='/found' render={props=>(<div><Found breed = {this.state.foundBreed} resetFoundState={this.resetFoundState} /></div>)} />
      {personalUrls}
    </AppStyled>
    </BrowserRouter>
    )
  }
}


