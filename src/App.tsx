import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Note } from "./models/note.model";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Welcome",
      text: "Type and save your notes",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNote notes={notes} setNotes={setNotes} />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
