import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function EmpEdit() {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/employee/" + empid).then((res) => {
            return res.json();
        })
            .then((resp) => {
                namechange(resp.name);
                emailchange(resp.email);
                phonechange(resp.phone);
                activechange(resp.isactive);


            })
            .catch((err) => {
                console.log(err.message);
            })
    }, [])
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { id, name, email, phone, active }

        fetch("http://localhost:8000/employee/" + empid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => res.json())
            .then((res) => {
                toast.success('saved successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (

        <div className="m-auto col-lg-4">
            <form className="container" onSubmit={handlesubmit}>
                <div className="card" style={{ textAlign: "left" }}>
                    <div className="card-title">
                        <h1 style={{ textAlign: "center" }}>Employee Edit</h1>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input required value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>

                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>phone</label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-check">

                                    <input type="checkbox" className="form-check-input"></input>
                                    <label checked={active} onChange={e => activechange(e.target.checked)} className="form-check-label">is active</label>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-check">

                                    <button className="btn btn-success" type="submit">save</button>
                                    <Link to="/" className="btn btn-danger">Back</Link>
                                </div>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="colored"
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>

    )

}
export default EmpEdit;