import React, { Component } from 'react';
import FavDigimon from './FavDigimon';
import axios from 'axios';
import UpdateForm from './UpdateForm'


 class FavoriteDigimons extends Component {
      constructor(props){
         super(props);
         this.state={
             serverLink:process.env.REACT_APP_SERVER,
             digimon:[],
             showModel:false,
             index:0,
             showForm:false,
             imgDigimon:'',
             nameDigimon:'',
             levelDigimon:'',
         }
     }
     componentDidMount=async()=>{
         const getDigimon=await axios.get(`${this.state.serverLink}/getDataServer`);
         this.setState({
             digimon:getDigimon.data,
             showModel:true,
         })
        //  console.log(this.state.digimon);    
     }
     Delete=async(idx)=>{
         const id=this.state.digimon[idx]._id;

         const deletData=await axios.delete(`${this.state.serverLink}/deletData/${id}`);
         this.setState({
             digimon:deletData.data,
         })
     }
     Update=(idx)=>{
         const choosenDigimon=this.state.digimon[idx];
         this.setState({
             index:idx,
             showForm:true,
             imgDigimon:choosenDigimon.img,
             nameDigimon:choosenDigimon.name,
             levelDigimon:choosenDigimon.level,

         })
     }
    changeName=e=>this.setState({nameDigimon:e.target.value});
    changeImage=e=>this.setState({imgDigimon:e.target.value});
    changeLevel=e=>this.setState({levelDigimon:e.target.value});


Updateing=async(e)=>{
    e.preventDefault();
    const id =this.state.digimon[this.state.index]._id;
    const holeOfupdate={
        nameDigimon:this.state.nameDigimon,
        imgDigimon:this.state.imgDigimon,
        levelDigimon:this.state.levelDigimon,
    }
    const finalData=await axios.put(`${this.state.serverLink}/finalData/${id}`,holeOfupdate);
    this.setState({
        digimon:finalData.data,
    })
}


    render() {
        return (
            <>
                {this.state.showForm && 
                <UpdateForm
                   imgDigimon={this.state.imgDigimon} 
                   nameDigimon={this.state.nameDigimon} 
                   levelDigimon={this.state.levelDigimon}
                   changeName={this.changeName}
                   changeImage={this.changeImage}
                   changeLevel={this.changeLevel}
                   Updateing={this.Updateing}
                   />
                   

                }

               {this.state.showModel && this.state.digimon.map((digimon,idx)=>{
                return <FavDigimon
                        digimon={digimon}
                        idx={idx}
                        Delete={this.Delete}
                        Update={this.Update}
                    />
            })}
            </>
        )
    }
}

export default FavoriteDigimons
