import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Card from "react-bootstrap/Card";

function Station(props) {
  if(!props.data.stations) console.log("Cargando");
  let stations = props.data.stations
  console.log(stations);
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.data.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          {stations.map(station => {
        return (
          <div key={station.id}>
            <Card>
              <Card.Body>
                <Card.Title>
                  Nombre de la estacion: {station.name}
                </Card.Title>
                <Card.Text>Ultima actualizacion: {station.timestamp}</Card.Text>
                <Card.Text>Bicicletas libres: {station.free_bikes}</Card.Text>
                <Card.Text>Espacios libres: {station.free_slots}</Card.Text>
              </Card.Body>
              
            </Card>
          </div>
        );
      })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Station;
