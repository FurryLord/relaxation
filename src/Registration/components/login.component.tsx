import React, { Component } from "react";
import CSS from 'csstype'

export default class Login extends Component {
    render() {
        const form: CSS.Properties = {
            border: '1px solid #000000',
            width:'100%',
            /* Background */
            backgroundColor: '#FEEAC5',
           
                        
            
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
                    <input style={input} type="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    
                    <input style={input} type="password"  placeholder="Enter password" />
                </div>

               
                <button style={enter} type="submit" >Enter</button>
            
            </form>
            </div>
        );
    }
}