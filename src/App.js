import React, { Component } from 'react';



class App extends Component{

    state = {
        text:'',
        list:[]
    }
     
    remove= (ev, index) => {
        this.setState({
            list:this.state.list.filter((index) => index !== index)
        })
    };

    handleChange= (ev) => {
        this.setState({
            text:ev.target.value   
        })
    };

    clique= () => {
        const { text, list } = this.state;
        if(text.length > 0){
            this.setState({
                list: list.concat( text ), 
            })         
        }else{
            alert('lista vazia')
        }

        this.setState( {
            text: '',
        } )
    }; 


    render() {
        return(
            <div>
                <input onChange= {this.handleChange} type="text" value={this.state.text} placeholder='digite aqui' />
                <button onClick={this.clique}>Ok</button>
                {this.state.list.map((item,index) => (
                   <div>
                       <span> {item} </span>
                       <button onClick={(ev) => this.remove(index)} >Remover</button>
                   </div>
                )) }
            </div>
        )
    }
};

export default App;