import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState([])

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid).then((res) => {
      return res.json();
    })
      .then((resp) => {
        empdatachange(resp)
      })
      .catch((err) => {
        console.log(err.message);
      })
  }, [])
  return (

    <div className="card col-lg-5 m-auto" style={{ textAlign: "left" }}>
      <div className="card-title text-center">
        <h1>Employee Details</h1>
      </div>
      <div className="card-body"></div>
      {empdata &&
        <div className="text-center">
          <h1>The employee name is:<b>{empdata.name}</b> ({empdata.id})</h1>
          <h3>contact Details</h3>
          <h5>Email is:{empdata.email}</h5>
          <h5>phone is:{empdata.phone}</h5>
          <Link to="/" className="btn btn-danger">Back to Listing</Link>
        </div>
      }

    </div>

  )
}
export default EmpDetails;