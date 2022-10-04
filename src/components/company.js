import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
<<<<<<< HEAD
import Station from "./station";
=======
import Offcanvas from "react-bootstrap/Offcanvas";
>>>>>>> 4826ec73f935e6563bf39bf046558026e595f663

function Companys() {
  const [networks, setNetworks] = useState([]);
  const [company, setcompany] = useState([]);
<<<<<<< HEAD
  const [show, setShow] = useState(null);
=======
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
>>>>>>> 4826ec73f935e6563bf39bf046558026e595f663

  var url = "http://api.citybik.es/v2/networks";

  const consumirAPI = async () => {
    const response = await fetch(url, { method: "GET" })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    setNetworks(response.networks);
  };

  const consumirAPI2 = async (href) => {
    let newUrl = "http://api.citybik.es" + href;
<<<<<<< HEAD
    const response = await fetch(newUrl, { method: "GET" })
    .then((response) => response.json())
    .catch((error) => console.log(error));

    setcompany(response.network);
    setShow(true);
=======
    const response = await fetch(newUrl, { method: "GET" }).then((response) =>
      response.json()
    );

    setcompany(response.networks);
>>>>>>> 4826ec73f935e6563bf39bf046558026e595f663
  };

  useEffect(() => {
    consumirAPI();
  }, []);

<<<<<<< HEAD
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
=======
  console.log(networks);

  return (
    <div className="div_container">
      <h1>Empresas</h1>
>>>>>>> 4826ec73f935e6563bf39bf046558026e595f663
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
<<<<<<< HEAD
              <Button
                variant="primary"
                onClick={() => consumirAPI2(network.href)}
              >
=======
              <Button variant="primary" onClick={handleShow}>
>>>>>>> 4826ec73f935e6563bf39bf046558026e595f663
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
