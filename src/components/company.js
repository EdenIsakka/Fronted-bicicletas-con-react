import { useEffect, useState } from "react"


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
        <div>
            <h1>Empresas</h1>
            {
                networks.map((network) => {
                    return(
                        <div key={network.id}>
                            {network.name}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Companys