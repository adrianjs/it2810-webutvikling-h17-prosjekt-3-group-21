import React from 'react';
import './ToDo.css';

export class AddList extends React.Component {
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
        //holds control over the list by adding/removing elements and buttons whenever a task is added/removed
        var items = this.props.tasks.map((element, i) => {
            return <div className="todoTask" key={i}><span className="todoTxt">{element}</span><button className="todoBtn" onClick={this.remove}>Slett</button><br/></div>
        });
        return (
            <div id="allTasks">{items}</div>
        );
    }
}