import React from 'react';
import { NewNote } from './NewNote';
import { NoteList } from './NoteList';
import { Button } from 'react-bootstrap';
import SmallModal from "./SmallModal";

export class MainNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes,
            showModal: false
        };
        this.newNote = this.newNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }

    updateLocalStorage(updatedNotes) {
        console.log("updated");
        localStorage.setItem('savedNotes', JSON.stringify(updatedNotes));
    }

    //this.updateLocalStorage(updatedTasks) updates the local storage everytime a task gets added or removed
    newNote(text) {
        var updatedNotes = this.state.notes;
        updatedNotes.unshift([text[0], text[1], text[2]]);
        this.setState({notes: updatedNotes})
        this.updateLocalStorage(updatedNotes);
    }

    removeNote(text) {
        var updatedNotes = this.state.notes;
        updatedNotes.splice(updatedNotes.indexOf([text]), 1);
        this.setState({notes: updatedNotes});
        this.updateLocalStorage(updatedNotes);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        let modalClose = () => this.setState({ showModal: false });
        return (
            <div id="noteMain">
                <div class="mainTitles"><h1>Notes</h1></div>
                <NoteList notes={this.state.notes} remove={this.removeNote} />
                <Button id="newNoteBtn"bsStyle="primary" bsSize="small" onClick={()=>this.setState({showModal: true})}>New note</Button><br/><br/>
                <NewNote newNote={this.newNote} />

                <SmallModal show={this.state.showModal} onHide={modalClose}/>
            </div>
        );
    }
}