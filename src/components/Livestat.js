import React, { useEffect , useState } from 'react'
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import axios from "axios"



function Livestat() {
  const [latest, setlatest] = useState([])
  const date = new Date(parseInt(latest.updated))
  const lastUpdated = date.toString()
  
  useEffect(() => {
    axios
    .get("https://corona.lmao.ninja/v2/all")
    .then(res =>{
       setlatest(res.data)
      //  console.log(res.data)
    } )
    // .catch(err => {
    //   console.log(err)
    // })
  })
    return (
        <div>
          <CardDeck style={{margin: "10px"}}>
  <Card bg="dark" text="white" >
    <Card/>
    <Card.Body>
    <Card.Title style={{fontFamily: "Meera"}} >Total Cases</Card.Title>
    <Card.Text>{latest.cases}</Card.Text>
    </Card.Body>
    
    <Card.Footer>
    <small>Last Update: <Moment format="YYYY/MM/DD">{lastUpdated}</Moment></small>
    </Card.Footer>
  </Card>
  <Card bg="success" text="white" >
    <Card />
    <Card.Body>
      <Card.Title style={{fontFamily: "Meera"}} >Recovered Cases</Card.Title>
    <Card.Text>{latest.recovered}</Card.Text>
    </Card.Body>
    <Card.Footer>
   <small>Last Update: <Moment format="YYYY/MM/DD">{lastUpdated}</Moment></small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white">
    <Card />
    <Card.Body>
    <Card.Title  style={{fontFamily: "Meera"}} >Deaths</Card.Title>
    <Card.Text>{latest.deaths}</Card.Text>
     
    </Card.Body>
    <Card.Footer>
    <small>Last Update: <Moment format="YYYY/MM/DD">{lastUpdated}</Moment></small>

    </Card.Footer>
  </Card>
</CardDeck>
        </div>
    )
}

export default Livestat
