import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const [id,idchange]=useState("");
    const [name,namechange]=useState("");
    const [email,emailchange]=useState("");
    const [phone,phonechange]=useState("");
    const [active,activechange]=useState(true);
    const [validation,valchange]=useState(false);




    const navigate=useNavigate();


    const handlesubmit=(e)=>{
        e.preventDefault();
        const empdata={name,email,phone,active}



        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:   JSON.stringify(empdata)
        }).then((res)=>res.json())
        .then((res)=>{
       alert("saved successfully")
       navigate('/');
        })
        .catch((err)=>{
           console.log(err.message)
        })
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card" style={{textAlign:"left"}}>
                        <div className="card-title">
                            <h1>Employee create</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Id</label>
                                        <input value={id} onChange={e=>idchange(e.target.value)}   disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)}   className="form-control"></input>
                                         {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>phone</label>
                                        <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                    
                                        <input type="checkbox" className="form-check-input"></input>
                                        <label checked={active} onChange={e=>activechange(e.target.checked)} className="form-check-label">is active</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                    
                                        <button className="btn btn-success" type="submit">save</button>
                                        <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
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