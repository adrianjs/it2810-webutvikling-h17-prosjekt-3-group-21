import React from 'react';
import { Text, View, Button } from 'react-native';

/*
    Component for rendering saved notes in a list.
 */

export default class NoteList extends React.Component {
    render() {
        var items = this.props.notes.map((element, i) => {
            return <View className="note" key={i} id={i}>
                <View className="noteContainer">
                    <Text className="noteTitle">{element[0]}</Text>
                    <Text className="noteText">{element[1]}</Text>
                    <Text className="notePrior">{element[2]} priority</Text>
                </View>
                <Button onPress={(e) => this.props.remove(i)} title="Delete" color="#ff4081" />
            </View>
        });
        return (
            <View id="allNotes">{items}</View>
        );
    }
}