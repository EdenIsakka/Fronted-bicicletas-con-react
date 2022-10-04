import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Station from "./station";

function Companys() {
  const [networks, setNetworks] = useState([]);
  const [company, setcompany] = useState([]);
  const [show, setShow] = useState(null);

  var url = "http://api.citybik.es/v2/networks";

  const consumirAPI = async () => {
    const response = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    setNetworks(response.networks);
  };

  const consumirAPI2 = async (href) => {
    let newUrl = "http://api.citybik.es" + href;
    const response = await fetch(newUrl, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => console.log(error));

    setcompany(response.network);
    setShow(true);
  };

  useEffect(() => {
    consumirAPI();
  }, []);

  return (
    <div className="div_container">
      <h1>Empresas</h1>
      {show ? 
      <Station
      show={show}
      data={company}
      handleClose={() => setShow(false)}
    ></Station>
      : null}
      {networks.map((network) => {
        return (
          <div className="card" key={network.id}>
            <Card className="cards_style" border="primary">
              <Card.Body>
                <Card.Title>
                  Nombre de la compañia: {network.company}
                </Card.Title>
                <Card.Text>Nombre de la red: {network.name}</Card.Text>
                <Card.Text>
                  Localicacion del país: {network.location.country}
                </Card.Text>
              </Card.Body>
              <Button
                variant="primary"
                onClick={() => consumirAPI2(network.href)}
              >
                Launch
              </Button>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
export default Companys;
