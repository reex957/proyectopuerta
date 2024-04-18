import React from 'react';
import { Card } from 'react-bootstrap';

export default function ProductoCard({ titulo, descripcion, imagenUrl }) {
  return (
    <Card className="producto-card">
      <div className="image-box">
        <Card.Img variant="top" src={imagenUrl} />
      </div>
      <Card.Body className="content">
        <Card.Text className="text-white">{titulo}</Card.Text>
        <Card.Text>{descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}
