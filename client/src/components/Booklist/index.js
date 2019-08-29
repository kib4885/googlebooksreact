import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
// import Button from "../Button";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  description,
  infoLink,
Button,

}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-6 sm-7">
            <h3>Book Title: {title}</h3>
            <h4>Authors: {authors}</h4>
            <p>Description: {description}</p>
           
          </Col>
          <Col size="xs-2 sm-3">
          <a rel="noopener noreferrer" href={infoLink} target="_blank"> View Book</a>
          <Button />

          </Col>
        </Row>
      </Container>
    </li>
  );
}