import React, { Component } from 'react';
import axios from 'axios';
import Digimon from './Digimon';

 class Main extends Component {
     constructor(props){
         super(props);
         this.state={
             serverLink:process.env.REACT_APP_SERVER,
             digimon:[],
             showModel:false,
         }
     }
     componentDidMount=async()=>{
         const getDigimon=await axios.get(`${this.state.serverLink}/getData`);
         this.setState({
             digimon:getDigimon.data,
             showModel:true,
         })
        //  console.log(this.state.digimon);    
     }
     AddToFav=async(digimons)=>{
         const senDataTo=await axios.post(`${this.state.serverLink}/senDataTo`,digimons);
     }

    render() {
        return (
            <>
            {this.state.showModel && this.state.digimon.map((digimon,idx)=>{
                return <Digimon
                        digimon={digimon}
                        idx={idx}
                        AddToFav={this.AddToFav}
                    />
            })}
            </>
        )
    }
}

export default Main;
