import Clients from "../Models/ClientsModel.js"
//  - Get Clients
export const GetClientsData = async (req, res) => {
  try {
    const GetClients = await Clients.find();
   // console.log("Clients from DB:", GetClients);

    if (!GetClients || GetClients.length === 0) {
      return res.status(404).json({ message: "Data not Exist" });
    }

    return res.status(200).json(GetClients);
  }
   catch (error)
    {
    res.status(500).json({ errorMessage: error.message });
    }
};