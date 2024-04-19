import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../../auth/useAuth";
import useFetch from "../../../helpers/useFetch";
import Cargando from "../../../components/Cargando";
import { Link } from "react-router-dom";
import routes from "../../../helpers/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTabletButton } from "@fortawesome/free-solid-svg-icons";

function Devices() {
  const { bitacora } = useAuth();
  const { data, loading } = useFetch("http://localhost:4000/getbitacoras/bitacora", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const formatFecha = (fecha) => {
    return new Date(fecha).toLocaleString();
  };

  return (
    <Container className="mt-3">
      <div style={{ display: "flex", alignContent: "center" }}>
        <FontAwesomeIcon
          className="me-3"
          icon={faTabletButton}
          style={{ color: "#000000", height: 40 }}
        />
        <h1>Dispositivos</h1>
      </div>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Mensaje</th>
            <th>Código de Puerta</th>
            <th>Estado de la Puerta</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <Cargando />
          ) : (
            data &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{item._id}</td>
                <td>{formatFecha(item.fecha_hora)}</td>
                <td>{item.mensaje}</td>
                <td>{item.codigo_tarjeta}</td>
                <td>{item.estado_puerta}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Devices;
