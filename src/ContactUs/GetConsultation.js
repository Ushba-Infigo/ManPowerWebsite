import axios from "axios";
import { useEffect, useState } from "react";

const ConsultationList = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8001/api/consulation");
      setConsultations(res.data);
    };
    fetchData();
  }, []);

  return (
 <div className="container my-4">
  <h3 className="mb-4 text-center">All Consultations</h3>
  <ul className="list-group">
    {consultations.map((c) => (
      <li
        key={c._id}
        className="list-group-item list-group-item-action flex-column align-items-start mb-2 shadow-sm rounded"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {c.firstName} {c.lastName}
          </h5>
          <small className="text-muted">
            {new Date(c.createdAt).toLocaleDateString()}
          </small>
        </div>
        <p className="mb-1 text-muted">
          <strong>Email:</strong> {c.email} <br />
          <strong>Type:</strong> {c.helpType}  <br />
          <strong>Phone:</strong> {c.phone}  <br />
          <strong>Message:</strong> {c.message}
        </p>
        {c.company && <small className="text-muted">Company: {c.company}</small>}
      </li>
    ))}
  </ul>
</div>

  );
};

export default ConsultationList;
