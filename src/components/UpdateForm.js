import React, { Component } from 'react'

export class UpdateForm  extends Component {
    render() {
        return (
          <>
           <form onSubmit={e=>this.props.Updateing(e)}>>
           <label> Name</label>
           <input type='text' value={this.props.nameDigimon} onChange={this.props.changeName}></input>
           <label> Image URL </label>
           <input type='text' value={this.props.imgDigimon} onChange={this.props.changeImage}></input>
           <label> Level</label>
           <input type='text' value={this.props.levelDigimon} onChange={this.props.changeLevel}></input>
           <input type='submit' value='Update'/>
            </form>
          </>
        )
    }
}

export default UpdateForm;
