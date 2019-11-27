import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/Booklist";
import Form from "../components/Form";

class Search extends Component {
    state = {
        books: [],
        q: "",
    };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.fetchBooks();
    }

    fetchBooks = () => {
        API.fetchBooks(this.state.q)
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(() =>
                this.setState({
                    books: [],
                    message: "No New Books Found, Try a Different Query"
                })
            );
    };

    handlesavedbooks = id => {
        const book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            infoLink: book.volumeInfo.infoLink,
            thumbnail: book.volumeInfo.imageLinks.thumbnail,
        }).then(() => this.fetchBooks());
    };

    render() {
        return (

            <Container>
                <Row>
                    <Col size="md-12">
                        <Card title="Book Search">
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                q={this.state.q}
                            />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col size="xs-12">
                        {!this.state.books.length ? (
                            <h1 id="display" className="text-center">No Books to Display</h1>
                        ) : (
                                <BookList>
                                    {this.state.books.map(book => {
                                        return (
                                            <BookListItem
                                                key={book.id}
                                                title={book.volumeInfo.title}
                                                authors={book.volumeInfo.authors}
                                                description={book.volumeInfo.description}
                                                infoLink={book.volumeInfo.infoLink}
                                                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                                Button={() => (
                                                    <button
                                                      onClick={() => this.handlesavedbooks(book.id)}
                                                      className="btn btn-primary ml-2"
                                                    >
                                                      Save
                                                    </button>
                                                )}
                                            />
                                        )
                                    })}

                                </BookList>
                            )}
                    </Col>
                </Row>
            </Container>

        )
    }

}
export default Search;

