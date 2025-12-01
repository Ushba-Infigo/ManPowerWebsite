 
  import React from "react";
  import {Link} from 'react-router-dom'
 const GetCaltureTop = () => {
    return(
<>

    <div className="overflow-hidden" style={{ marginTop: "-75px" }}>
      <img
        src={`${process.env.PUBLIC_URL}/img/vector.png`}
        alt="Contact Us Banner"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
    <center style={{marginTop: "-84px"}}>
      <span>
   <Link to="/" className="home" style={{textDecoration: "none",cursor:"pointer"}}>Home</Link>&nbsp;&gt;&nbsp;
        <span className="contact"> Company Culture</span>
      </span>
    </center>
<center>
    <p className="flexible">Culture That Powers Innovation</p>
</center>
     
</>
)
 }
 export default GetCaltureTop;