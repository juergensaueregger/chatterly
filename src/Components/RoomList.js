import React, { Component } from 'react';


class RoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomlist: ""
        }
        console.log(this.props);
    }
    
    List(props) {
        const currentUser = props.currentUser;
        if(currentUser){
            return currentUser.rooms;
        }
        return "nothing";
        
    }
    render(){
        const currentUser = this.props.currentUser;
        const currentRoom = this.props.currentRoom;
        let liste;
        let currentroom
        if(currentUser){
            
            liste = currentUser.rooms;
        }
        else{
            liste = [{name: "no rooms yet"}];
        }
        if(currentRoom){
            
             currentroom = currentRoom.name;
        }
        else{
            currentroom = [{name: "loading..."}];
        }
        return(
            <div>
            <h3>aktueller Raum: {currentroom}</h3>
            <ul>
            {liste.map((item) =>
              <li key={item.toString()}>
                  {item.name}
              </li>

                        
            )}
          </ul>
          </div>
        
        )
    }

}
export default RoomList;