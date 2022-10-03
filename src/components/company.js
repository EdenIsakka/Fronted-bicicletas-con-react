import { useEffect, useState } from "react"
import Card from 'react-bootstrap/Card';


function Companys() {


    const[networks, setNetworks] = useState([])

    var url = "http://api.citybik.es/v2/networks"
    


    const consumirAPI = async() => {
       const response = await fetch(url, { method: 'GET' }).then(response => response.json())
       .catch(error => console.log(error))


       setNetworks(response.networks)
    }

    useEffect(() => {
        consumirAPI()
    }, [])

    console.log(networks)


    return(
        <div className="div_container">
            <h1>Empresas</h1>
            {
                networks.map((network) => {
                    return(
                        <div className="card" key={network.id}>
                            
                        <Card className="cards_style" border="primary">
                            <Card.Body>
                            <Card.Title>Nombre de la compañia: {network.company}</Card.Title>
                            <Card.Text>Nombre de la red: {network.name}</Card.Text>
                            <Card.Text>Localicacion del país: {network.location.country}</Card.Text>
                            </Card.Body>
                        </Card>
                                
                            
                            
                            
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Companys