import React, { Component } from 'react';
import { Card,CardDeck,CardBody,CardImg } from "react-bootstrap";
import './dashboard.css';

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div class='body'>
            <div class='card-item'>
                <br/>
                <h5>Dashboard Components/ Product Admin Dashboard</h5>
                <br/>
                <CardDeck>
  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Clients</b></Card.Title>
            <Card.Text>
                15 
             </Card.Text>
             <img  src={require('../assets/img/clients.png')} width='120px' height='100px' />
             </div>
      
    </Card.Body>
  </Card>

  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Platinum Licensed</b></Card.Title>
            <Card.Text>
                10
             </Card.Text>
             <img  src={require('../assets/img/platinum.png')} width='70px'  />
             </div>
      
    </Card.Body>
  </Card>

  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Gold Licensed</b></Card.Title>
            <Card.Text>
                5 
             </Card.Text>
             <img  src={require('../assets/img/gold.png')} width='65px'  />
             </div>
      
    </Card.Body>
  </Card>

  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Silver Licensed</b></Card.Title>
            <Card.Text>
                5 
             </Card.Text>
             <img  src={require('../assets/img/silver.png')} width='70px'  />
             </div>
      
    </Card.Body>
  </Card>

  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Bronze Licensed</b></Card.Title>
            <Card.Text>
                5 
             </Card.Text>
             <img  src={require('../assets/img/bronze.png')} width='65px'  />
             </div>
      
    </Card.Body>
  </Card>

  
</CardDeck>

  <div lass= 'bar'>
  <CardDeck>
<Card>
    <Card.Body >
    <div class= 'bar-item'>
             <Card.Title><b>Bronze Licensed</b></Card.Title>
            <Card.Text>
                5 
             </Card.Text>
             <img  src={require('../assets/img/barchart.png')} width='500px' height='200px' />
             </div>
      
    </Card.Body>
  </Card>

  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Bronze Licensed</b></Card.Title>
            <Card.Text>
                5 
             </Card.Text>
             <img  src={require('../assets/img/bronze.png')} width='65px'  />
             </div>
      
    </Card.Body>
  </Card>
    
</CardDeck>
</div>

<div class='graphs'>
<CardDeck>
<Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Bronze Licensed</b></Card.Title>
            <Card.Text>
                5 
             </Card.Text>
             <img  src={require('../assets/img/bronze.png')} width='65px'  />
             </div>
      
    </Card.Body>
  </Card>

  <Card>
    <Card.Body >
    <div class= 'img'>
             <Card.Title><b>Bronze Licensed</b></Card.Title>
            <Card.Text>
                5 
             </Card.Text>
             <img  src={require('../assets/img/bronze.png')} width='65px'  />
             </div>
      
    </Card.Body>
  </Card>
    
</CardDeck>

  </div>

            </div>

            </div>
         );
    }
}
 
export default Dashboard;
