import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap';


 class FavDigimon extends Component {
    render() {
        return (
           
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={this.props.digimon.img} />
    <Card.Body>
        <Card.Title>{this.props.digimon.name}</Card.Title>
        {this.props.digimon.level}<br />
        <Button variant="primary" onClick={() => this.props.Delete(this.props.idx)}>Delete</Button>
        <Button variant="primary" onClick={() => this.props.Update(this.props.idx)}>Update</Button>
    </Card.Body>
</Card>

        )
    }
}

export default FavDigimon;
