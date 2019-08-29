import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
import { BookList, BookListItem } from "../components/Booklist";
import Button from "../components/Button";

class Search extends Component {
    state = {
        books: [],
        bookSearch: ""
    };

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => this.setState({ books: res.data }))
            .catch(err => console.log(err));
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
        }).then(() => this.loadBooks());
    };

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col size="md-12">
                            <Card title="Book Search">
                                <form>
                                    <Container>
                                        <Row>
                                            <Col size="xs-9 sm-10">
                                                <Input
                                                    name="bookSearch"
                                                    value={this.state.bookSearch}
                                                    onChange={this.handleInputChange}
                                                    placeholder="Search the title of a book"
                                                />
                                            </Col>
                                            <Col size="xs-3 sm-2">
                                                <Button
                                                    onClick={this.handleFormSubmit}
                                                    type="success"
                                                    className="input-lg"
                                                >
                                                    Search
                      </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </form>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12">
                            {!this.state.books.length ? (
                                <h1 className="text-center">No Books to Display</h1>
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
                                                        <button onClick={() => this.handlesavedbooks(book.id)}>
                                                         Save Book
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
            </div>
        )
    }

}
export default Search;

