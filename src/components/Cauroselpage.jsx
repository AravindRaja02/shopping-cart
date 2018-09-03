import React, { Component } from 'react';
import logo from './img-folder/logo.png';
import welcome from './img-folder/welcome.jpg';



export class Cauroselpage extends Component {
    render(){
        return(
        
        <div>
            <div className="p-5 text-center text-white bg-white">
            <div className="container">
              <div className="row center" >
                <div className="col-12 ">
                  <div className="carousel slide" data-ride="carousel" id="carouselArchitecture">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselArchitecture" data-slide-to="0" className="active">
                        <i></i>
                      </li>
                      <li data-target="#carouselArchitecture" data-slide-to="1">
                        <i></i>
                      </li>
                      
                    </ol>
                    <div className="carousel-inner " role="listbox">
                      <div className="carousel-item active ">
                        <img className="d-block img-fluid " src={logo}  data-holder-rendered="true"/> 
                        </div>
                        <div className="carousel-item ">
                          <img className="d-block img-fluid " src={welcome} data-holder-rendered="true"/> 
                          </div>
                          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
    
    
          
            
               
    
        </div>
        );
            }
            }
    export default Cauroselpage;