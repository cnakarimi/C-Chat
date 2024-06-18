import React from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function Caard({ children }) {
  return (
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  );
}
