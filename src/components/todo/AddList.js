import React from 'react';
import '../../assets/ToDo.css';
import {RaisedButton} from "material-ui";

/*
    Component class for displaying to-dos in a list.
 */

export class AddList extends React.Component {
    render() {
        //holds control over the list by adding/removing elements and buttons whenever a task is added/removed
        var items = this.props.tasks.map((element, i) => {
            return <div className="todoTask" key={i} id={i}><span className="todoTxt">{element}</span><RaisedButton className="todoBtn" secondary={true} onClick={(e) => this.props.remove(i)}>Delete</RaisedButton><br/></div>
        });
        return (
            <div id="allTasks">{items}</div>
        );
    }
}