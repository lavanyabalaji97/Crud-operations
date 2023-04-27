import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const showSuccessToast = (message) => {
    toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    },);
}

const EmpCreate = () => {
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, phonechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);
    const [phoneError, setPhoneError] = useState("");
    const navigate = useNavigate();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleEmailBlur = () => {
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }
    };

    const phoneRegex = /^\d{10}$/;
    const handlePhoneBlur = () => {
        if (!phoneRegex.test(phone)) {
            setPhoneError("Please enter a valid 10-digit phone number");
        } else {
            setPhoneError("");
        }
    };
    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, email, phone, active }
        fetch("http://localhost:8000/employee", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        })
            .then((res) => res.json())
            .then((res) => {
                showSuccessToast('user created')
                window.setTimeout(() => {
                    navigate('/');
                }, 1000)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <div className="row">
            <div className="m-auto col-lg-4">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card" style={{ textAlign: "left" }}>
                        <div className="card-title text-center">
                            <h1>Employee create</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input required value={name} onMouseDown={e => valchange(true)} id="name" onChange={e => namechange(e.target.value)} onBlur={handleEmailBlur} className="form-control"></input>
                                        {/* {name.length === 0 && validation && <span className="text-danger">Enter the name</span>} */}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">

                                        <label htmlFor="email">Email</label>
                                        <input type="email" value={email} onChange={e => emailchange(e.target.value)} onBlur={handleEmailBlur} className="form-control"></input>
                                        {emailError && <span className="error text-danger">{emailError}</span>}
                                        {/* {email.length === 0 && <span className="text-danger">Enter Email</span>}
                                         */}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="phone">phone</label>
                                        <input type="tel" value={phone} onChange={e => phonechange(e.target.value)} maxLength={10} onBlur={handlePhoneBlur} className="form-control"></input>
                                        {phoneError && <span className="error text-danger">{phoneError}</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">

                                        <input type="checkbox" id="check" className="form-check-input"></input>
                                        <label checked={active} htmlFor="check" onChange={e => activechange(e.target.checked)} className="form-check-label">is active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <button className="btn btn-success" type="submit" >save</button>
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

        </div>
    )
}
export default EmpCreate;