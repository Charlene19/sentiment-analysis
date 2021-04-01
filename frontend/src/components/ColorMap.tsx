import React from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

export function ColorMap() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Répartition</Card.Title>
        <Badge variant="danger">Vraiment Negatif</Badge>
        <Badge variant="warning">Negatif</Badge>
        <Badge variant="secondary">Neutre</Badge>
        <Badge variant="info">Positif</Badge>
        <Badge variant="success">Vraiment Positif</Badge>
      </Card.Body>
    </Card>
  );
}

export default ColorMap;
