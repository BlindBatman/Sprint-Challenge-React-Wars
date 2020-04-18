import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

export default function Character(props) {
   
      //name,height,mass,hair_color,skin_color
    return (           
        <Col xs="6" md="4">
           
              <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>          
                <CardBody>
                  <CardTitle>{props.person.name}</CardTitle>
                  <CardText>Height: {props.person.height}</CardText>
                  <CardText>Mass: {props.person.mass}</CardText>
                  <CardText>Hair Color: {props.person.hair_color}</CardText>
                  <CardText>Skin Color: {props.person.skin_color}</CardText>
                </CardBody>
              </Card>
            
        </Col>
    );
  }