
import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, Component } from "react";
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Arizona from "./Components/Cities/Arizona";
import Atlanta from "./Components/Cities/Atlanta";
import Baltimore from "./Components/Cities/Baltimore";
import Houston from "./Components/Cities/Houston";
import axios from 'axios';
import { Container } from "react-bootstrap";
import Black from "./imgs/Black.png";

const api = axios.create({
  baseURL: `https://obscure-basin-88823.herokuapp.com/https://api.printify.com/v1/shops/2861059/products.json`
})
/*2861059*/
const options = {
  headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRlZTc0NDU5Y2FhZGQ1YjUwYjExNGZhNDk0NmRlNWI5NGE4NjMxNjc5ZTEwYzYyODYyMGMxZjY2ZTFhOGVhODY4ZDU0NGU4MTQwN2NhMTI5In0.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImRlZTc0NDU5Y2FhZGQ1YjUwYjExNGZhNDk0NmRlNWI5NGE4NjMxNjc5ZTEwYzYyODYyMGMxZjY2ZTFhOGVhODY4ZDU0NGU4MTQwN2NhMTI5IiwiaWF0IjoxNjE5OTMxOTU4LCJuYmYiOjE2MTk5MzE5NTgsImV4cCI6MTY1MTQ2Nzk1OCwic3ViIjoiNjczMzE0MyIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.AsqvnqCSTMUvBbOzmeCwYX465bCqR8avfhXoxJCtrx3KSjN4eIYt1wyd0NJmwybABZoE229rUcJTGEaDCng'}
};

export default class App extends Component {
  
  state = {
    shirts: [],
    houstonshirts: [],
  }

  constructor(props) { 
    super(props);
    /*this.renderHoustonShirts = this.renderHoustonShirts.bind(this);*/
    this.gethoustonshirts = this.gethoustonshirts.bind(this);
    this.state = {
      shirts: [],
      houstonshirts: [],
    }
  }

  gethoustonshirts = async () => {

    api.get("/", options).then(res => {
      console.log(res.data);
      this.setState({
        shirts: res.data.data,
        houstonshirts: res.data.data.filter(_shirt => _shirt.title.includes("Houston"))
       });
   });
/*
    let houArray
    let data
    api.get('/', options).then(res => {
      console.log(res.data)
      this.setState({ shirts: res.data.data })
    })
      data = this.state.shirts
      houArray = [];
    for(let i = 0; i < data.length; i++) {
      if (data[i].title.includes("Astros")){
        houArray.push(data[i]);
        this.setState({houstonshirts: houArray})
        console.log("houstonshirts = " + houArray)
        } 
    }
    */
}
componentDidMount() {
  this.gethoustonshirts();
}
    /*
    this.setState(state => {
      const houstonshirts = this.state.houstonshirts.concat(state.value);

filterHoustonShirts = houShirts => {
  let tempArr = [];
  let imagesLength = this.state.images.length;
  let processedLength = 0
  this.state.images.map(image => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key={some api key}&photo_id=${
        image.id}&format=json&nojsoncallback=1`)
      .then(result => {
        processedLength++;
        if (result.data.photo.title._content.indexOf(title) > -1) {
          tempArr.push(image);
        }
        if(processesLength ==  imagesLength){
           this.setState({
             images: tempArr // update the images
           });
        }
      });
  });
  
};

  renderHoustonShirts() {
    let houArray;
    for(let i = 0; i < this.state.shirts.length; i++) {
      if (this.state.shirts[i].title.includes("Astros")){
        
        this.setState({houstonshirts: this.state.houstonshirts.p([i])})
      
        this.setState(state => {
          const houstonshirts = this.state.houstonshirts.concat(state.value);
        
      } else {

      }
    } 
    {console.log(this.state.houstonshirts)}
    return
        this.setState({houstonshirts: houArray})
  }
*/


render() {
  
  setTimeout(() => {
    console.log(
      this.state.houstonshirts 
    );
  }, 1000);
  return (
    <BrowserRouter className="globalbackgroundandtext"
    style={{ backgroundImage: `url(${Black})` }}>
    <div className="App globalbackgroundandtext">
      <Navbar></Navbar>
      <Main houstonshirtsmainlevel={this.state.houstonshirts}></Main>
      

      <Switch>
      <Route path="/arizona"> <Arizona /> </Route>
      <Route path="/atlanta"> <Atlanta /> </Route>
      <Route path="/Baltimore"> <Baltimore /> </Route>
      <Container>
      <Route path="/Houston"> <Houston  houstonshirtscitylevel={this.state.houstonshirts}>{this.state.shirts.map(shirt => <div key={shirt.id}>{shirt.title}</div>)} /> </Houston></Route>
       
      </Container>
      </Switch>
      <Footer></Footer>
      
    </div>
    </BrowserRouter>
  );
  }
}
/*
{this.state.houstonshirts.map(shirt => <div key={shirt.id}>{shirt.description}</div>)} */