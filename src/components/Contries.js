import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
// import CardDeck from 'react-bootstrap/CardDeck'
// import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'
import Columns from "react-columns"
import axios from "axios"

function Contries() {
    const [Result , setResult] = useState([])
    const [searchCountries, setSearchCountries] =  useState('')

    useEffect(() => {
        axios
        .get("https://corona.lmao.ninja/v2/countries")
        .then(Country =>{
        //    setlatest(res.data)
           setResult(Country.data)
        } )
        .catch(err => {
          console.log(err)
        })
      })
      var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];
  const filterCountries = Result.filter(item => {
return searchCountries !== "" ? item.country.includes(searchCountries): item;
  }) 
const Countries = filterCountries.map((data, i)  => {
    return (
        <div>
            
        <Card  bg="light" text="dark" 
        key={i}
        className="text-center" style={{margin: "10px"}}>
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
        <Card.Title>{data.country}</Card.Title>
        <Card.Text>Cases: {data.cases}</Card.Text>
        <Card.Text>Deaths: {data.deaths}</Card.Text>
        <Card.Text>Recovered: {data.recovered}</Card.Text>
        <Card.Text>Today's Cases: {data.todayCases}</Card.Text>
        <Card.Text>Today's Deaths: {data.todayDeaths}</Card.Text>
        <Card.Text>Active: {data.active}</Card.Text>
        <Card.Text>Critical: {data.critical}</Card.Text>
        </Card.Body>
        </Card>
       
        
        </div>
    )        
})
    return (
        <div>
            <Form>
  <Form.Group controlId="formBasicSearch">
    
    <Form.Control type="text" placeholder="Search a Country" 
    onChange={e => setSearchCountries (e.target.value)} />
  </Form.Group>
  </Form>

            <Columns queries={queries}>
             {Countries}
            </Columns>
           
           
        </div>
    )
}

export default Contries
