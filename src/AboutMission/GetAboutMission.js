import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetMissionAllData = () => {
    const refreshKey = useContext(RefreshContext);
    const [Mission, setMission] = useState([]);

    useEffect(() => {

        const GetMission = async () => {
            try {

                const GetMissionAPI = await axios.get('http://localhost:8001/api/GetMission');
                setMission(GetMissionAPI.data);
            }
            catch (error) {
                console.log("error while fetching")
            }
        }
        GetMission();
    }, [refreshKey]);

    if (Mission.length == 0) {
        return null
    }
    const data = Mission[0];
    return (<></>)
}
export default GetMissionAllData;