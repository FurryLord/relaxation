import React, { Component } from "react";
import CSS from 'csstype'
import { isPropertySignature } from "typescript";
import { useNavigate } from "react-router-dom";
import path from "path";


export default class Login extends Component<any, any> {
    
     

    constructor(props: any){
        // const navigate = useNavigate();
        super(props)
        this.state = { email:'', password:''}
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
    
      handleInputChange(event: { target: any; }) {
        this.setState({
            [event.target.name] : event.target.value
        })
      }
    
       handleSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        let { email, password } = this.state
    
          var xhr = new XMLHttpRequest();

        let user = {
            "type": 'authorization',
            "email": `${email}` ,
            "password": `${password}`
        }

        xhr.open('POST', 'https://relaxacion.egorleb.repl.co', true);
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send(JSON.stringify(user));
        
        // xhr.addEventListener("loadend", loadEnd , false);
         
        //  function loadEnd(e:any){
        //     if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 201)) {
        //         // alert(xhr.responseText);
        //         console.log(JSON.parse(xhr.responseText).name)
        //         let name = JSON.parse(xhr.responseText).name
        //         localStorage.setItem("name", name);
        //         window.location.href  = '/home';
                

        //     }
        //     else if (xhr.status == 400){
        //         alert("There is no user with this email")
        //     }
        //     else if (xhr.status == 403) {
        //         alert("User already exist");
        //     }
       

        // }
        fetch("https://relaxacion.egorleb.repl.co", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                 },
            body: JSON.stringify(user)})
        .then(function(response){
            if (response.status !== 201) {  
                alert('There is no user with this email')
            }
            
                
                response.json().then(function(data){
                    console.log(data.name)
                    let name = data.name;
                    localStorage.setItem("name", name);
                    window.location.href='/home';
                })
                
                
                
               
            
                })
    //       fetch("http://localhost:1337", {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //                  },
    //             body: JSON.stringify(user)})
    //            .then(response => response.json())
    //             .then(function(result: any){
    //                 let res_json = JSON.parse(result);
    //                 alert(res_json)
    //                 console.log(res_json)
    //             })
    //             console.log("eoini");
        
    //    } 
       }
  
         
    render() {
        const form: CSS.Properties = {
            border: '0.05em solid #000000',
            width:'100%',
            backgroundColor: '#FEEAC5'
                        
            
        }

        const Log_in: CSS.Properties = {
            backgroundColor:'#FFD203',
            textAlign:'center',
            padding:'2%',
            margin:'0',
            fontFamily: 'Roboto Condensed',
            fontWeight: '1000', 
            
            fontSize:'x-large',
            
        }
        const input: CSS.Properties = {
            width:'90%',
            margin:'5%',
            backgroundColor: '#FFFFFF',
            border: '1px solid #000000',
            borderRadius: '60px',
        }
        const enter: CSS.Properties = {
            width:'46%',
            margin:'4%',
            backgroundColor: '#000000',
            textAlign:'center',
            borderRadius: '60px',
            marginLeft:'27%',
            height:'3em',
            fontSize:'large',
            padding:'0',
            
        }
        


        return (
            <div className="col-6">


            <form style={form}>

                <h3 style={Log_in}>Log in</h3>

                <div >
                    <input  name = "email" value={this.state.email} onChange={this.handleInputChange} style={input} type="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    
                    <input name="password" value={this.state.password} onChange={this.handleInputChange} style={input} type="password"  placeholder="Enter password" />
                </div>

               
                <button style={enter} type='submit' onClick={this.handleSubmit} >Enter</button>
            
            </form>
            </div>
        );
    }
}