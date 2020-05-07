import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Vertical = () => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item action href="#link1">Cras justo odio</ListGroup.Item>
      <ListGroup.Item action href="#link1">Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item action href="#link1">Morbi leo risus</ListGroup.Item>
      <ListGroup.Item action href="#link1">Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
  );
};

export default Vertical;
