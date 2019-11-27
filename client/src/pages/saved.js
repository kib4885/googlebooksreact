import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/Booklist";
import Button from "../components/Button";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";

class Saved extends Component {
    state = {
        books: []
    };
    componentDidMount() {
        this.loadsavedbooks();
    }
    loadsavedbooks = () => {
        API.getSaved()
            .then(res =>
                this.setState({
                    books: res.data
                }))
            .catch(err => console.log(err));
    };

    handledeletebook = id => {
        API.deleteBook(id).then(res => this.loadsavedbooks());
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <Card title="Saved Books">
                            {this.state.books.lengh ? (
                                <h2 className="text-center">No Saved Books</h2>
                            ) : (
                                    <BookList>
                                        <h2 className="text-center">No Saved Books</h2>
                                        {this.state.books.map(book => (

                                            <BookListItem
                                                key={book.id}
                                                title={book.volumeInfo.title}
                                                authors={book.volumeInfo.authors}
                                                description={book.volumeInfo.description}
                                                infoLink={book.volumeInfo.infoLink}
                                                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                                Button={() => (
                                                    <button onClick={() => this.handledeletebook(book.id)}>
                                                        Delete
</button>
                                                )}
                                            />
                                        ))}
                                    </BookList>

                                )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Saved;
