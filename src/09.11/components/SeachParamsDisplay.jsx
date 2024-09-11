import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

export default function SeachParamsDisplay() {
  const [searchparams] = useSearchParams();
  console.log([...searchparams.entries()]);
  return (
    <ListGroup>
      {[...searchparams.entries()].map(([key, value]) => (
        <ListGroup.Item key={key}>
          {key}: {value}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
