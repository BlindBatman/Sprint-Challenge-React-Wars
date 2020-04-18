import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row } from "reactstrap";
import Characters from "./Character"
export default function CharacterList() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        Axios
          .get("https://swapi.py4e.com/api/people")
          .then(response => {
            setPeople(response.data.results);
            console.log(response.data);
          })
          //references setState fn
          .catch(error => console.log("ERROR", error));
      }, []);
  
      return (
        <Container>       
          <Row >
            {people.map(person => {
              return <Characters person={person}/>;
            })}
          </Row>
        </Container>
      )};