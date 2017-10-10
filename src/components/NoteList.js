import React from 'react';
import { Button } from 'react-bootstrap';

export class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    //removes tasks by comparing the text of the task with the text of the parentnode of the button
    remove(element) {
        var value = element.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render() {
        var items = this.props.notes.map((element, i) => {
            return <div className="note" key={i}>
                <div className="noteContainer">
                    <span className="noteTitle">{element[0]}</span><br/>
                    <span className="noteText">{element[1]}</span><br/>
                    <span className="notePrior">{element[2]} priority</span>
                </div>

                <Button className="noteBtn" bsStyle="danger" bsSize="small" onClick={this.remove}>Delete</Button><br/>
            </div>
        });
        return (
            <div id="allNotes">{items}</div>
        );
    }
}