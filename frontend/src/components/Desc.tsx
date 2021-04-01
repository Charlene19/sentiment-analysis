import React from "react";
import Card from "react-bootstrap/Card";

export default Desc;
type Props = {
  tweets: number;
};

export function Desc({ tweets }: Props) {
  const pluralize = (count: number, noun: string, suffix = "s") =>
    `${count} ${noun}${count && count !== 1 ? suffix : ""}`;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{pluralize(tweets, "tweet")} analysés</Card.Title>
        Les tweets sont analysées à partir de Twitter en utilisant
        Stanford CoreNLP library.
      </Card.Body>
    </Card>
  );
}
