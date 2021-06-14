import React, { Component } from 'react';
import {Card,Button,CardGroup} from 'react-bootstrap';

 class Digimon extends Component {
    render() {
        return (
        
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.digimon.img} />
  <Card.Body>
    <Card.Title>{this.props.digimon.name}</Card.Title>
  {this.props.digimon.level}<br/>
    <Button variant="primary" onClick={()=>this.props.AddToFav(this.props.digimon)}>Add to Fv</Button>
  </Card.Body>
</Card>


        )
    }
}

export default Digimon;
