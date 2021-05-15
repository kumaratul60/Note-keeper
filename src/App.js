import './App.css';
import React, {useState} from 'react';
import Header from './noteComponent/Header';
import Footer from './noteComponent/Footer';
import Note from './noteComponent/Note';
import Adder from './noteComponent/HitToAdd';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Adder onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
