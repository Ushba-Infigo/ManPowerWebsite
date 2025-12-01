import React,{useEffect,useState} from "react";
import axios from "axios";

const GetWorkProcessData= () =>{

    const [WPheader,setWPheader]=useState([]);
    const [WPDetail,setWPDetail]=useState([]);

useEffect(()=>{

 const GetWorkHeaderData=async()=>{

try{
const {data}=await axios.get('http://localhost:8001/api/GetWorkProcess')
setWPheader(data);

}
catch(error){

console.log("error while fetching WorkProcess header:",error)
}


}
 const GetWorkDetailData=async()=>{

try{
const {data}=await axios.get('http://localhost:8001/api/GetWorkProcessDetail')
setWPDetail(data);

}
catch(error){

console.log("error while fetching WorkProcess header:",error)
}


}

GetWorkHeaderData();
GetWorkDetailData();
},[])

if(WPheader.length==0){return null;}
const data=WPheader[0];
return(

<div>
<center>
<div className="section-subtitlee">{data.W_Tag}</div>
</center><br/>
<center>
  <p className="check" style={{fontWeight:"600"}} >{data.W_Heading}</p>
</center>


     <div className="container mt-5">
      {WPDetail.map((processd, index) => {
        // Only render a row every two items
        if (index % 2 === 0) { debugger
          return (
            <React.Fragment key={index}>
              {/* === ROW (2 columns) === */}
              <div className="row">
                {/* Column 1 */}
                <div className="col-md-6 col-12 p-3">
                  <center>
                    <p className="project">{processd.RR_Heading}</p>
                  </center>
                    <p className="Review">
                    {(() => {///Immediately Invoked Function Expression
                        const text = processd.RR_Description;
                        const words = text.split(" ");
                        const chunkSize = Math.ceil(words.length / 3);
                        const lines = [];

                        for (let i = 0; i < words.length; i += chunkSize) {
                        lines.push(words.slice(i, i + chunkSize).join(" "));
                        }

                        return lines.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br/>
                        </React.Fragment>
                        ));
                    })()}
                    </p>

                </div>

                {/* Column 2 */}
                {WPDetail[index + 1] && (
                  <div className="col-md-6 col-12 p-3">
                    <center>
                      <p className="project">
                        {WPDetail[index + 1].RR_Heading}
                      </p>
                    </center>
                    <p className="Review">




                        {(()=>{
                            const text=WPDetail[index + 1].RR_Description;
                            const word=text.split(" ");
                            const chunksize=Math.ceil(word.length/3);
                            const lines=[]
                            for(let i = 0;i<word.length;i+=chunksize){
                                lines.push(word.slice(i,i+chunksize).join(" "));
                            }
                            return lines.map((line,index)=>(
                           <React.Fragment key={index}>
                            {line}<br/>
                           </React.Fragment>

                            ))
                        })()} 
                        {/* The first parentheses group the function,and the second parentheses call it right away. */}
                    </p>
                  </div>
                )}
              </div>

              {/* === Circle Image between rows === */}
              {/* Only show the image if not at the last row */}
              {index + 2 < WPDetail.length && (
                <div
                  style={{
                    marginLeft: "8%",
                    marginTop: "-50px",
                    marginBottom: "60px",
                  }}
                >
                  <img
                    src="./img/circle.png"
                    alt="workflow connector"
                    style={{
                      width: "90%",
                      maxWidth: "1188px",
                      height: "auto",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
<div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
  <button className="shedule">Schedule a Meeting</button>
</div>
 <br/><br/><br/>
 </div>
 
);

}
export default GetWorkProcessData;