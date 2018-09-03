import React, { Component}  from 'react';
import history from '../history';

class Wel extends Component {
   
      
      handleSubmit=(e)=>{
        e.preventDefault();
        history.push("/Form");
      }

    render() {
      return (
          
        <div className="Welcome">
<body>

  <div class="py-5 text-center">
    <div class="container py-5">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-3 mb-4 text-primary">WELCOME TO SHOPPING CART</h1>
          <p class="lead mb-5"> Free Shipping on Qualified Orders. Pay on Delivery. 100% Purchase Protection. 
          Easy Returns. Huge Selection. Free Shipping* Types: Computer &amp; Accessories, Shoes &amp; Handbags,
           Jewelry, Kindle, Luggage, Pet Supplies, Toys &amp; Games, Watches..
            </p>
            <button className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Register Here</button>
           
          
        </div>
      </div>
    </div>
  </div>
  </body>
   

</div>
 );
}
}

export default Wel;

