
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetMissionAllData=()=>{

const [Mission,setMission]=useState([]);

useEffect(()=>{

    const GetMission=async()=>{
try{

    const GetMissionAPI= await axios.get('http://localhost:8001/api/GetMission');
    setMission(GetMissionAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
        }
GetMission();
},[]);

if(Mission.length==0){
    return null
}
 const data=Mission[0];
return(<></>)}
export default GetMissionAllData;