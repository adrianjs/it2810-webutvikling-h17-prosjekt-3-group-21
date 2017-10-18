import Drawer from 'react-native-drawer';
import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {NavBarContent} from './NavBarContent';

export class NavBarPanel extends React.Component{

    constructor(props){
        super();
        this.openNavBarPanel = this.openNavBarPanel.bind(this);
        this.closeNavBarPanel = this.openNavBarPanel.bind(this);
    }

    closeNavBarPanel = () => {
        this._drawer.close()
    };
    openNavBarPanel = () => {
        this._drawer.open()
    };

    render()
    {
        
        return (
            //todo add changing mechanism. Change item. 
            <Drawer 
            open={this.props.open}
            type="displace"
            content={<NavBarContent changeView={this.props.changeView}/>}
            ref = {(ref) => this._drawer = ref}
            tapToClose={true}
            openDrawerOffset={0.0}
            panCloseMask={0.0}
            closedDrawerOffset={0} 
            tweenDuration={0}
            >
            </Drawer>
          );
    }
}

const style = StyleSheet.create({
    layout: {
        
    }


});