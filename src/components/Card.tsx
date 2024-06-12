import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function Caard(props) {
  return (
    <Card>
      <CardBody>{props.children}</CardBody>
    </Card>
  );
}
