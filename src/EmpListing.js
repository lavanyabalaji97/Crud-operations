import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing=()=>{
    const [data,setData]=useState(null);
    const navigate=useNavigate()

 const LoadDetail=(id)=>{
    navigate("/employee/detail/"+id)
 }

const LoadEdit=(id)=>{
 navigate("employee/edit/"+id)

}

const Removefunction=(id)=>{
   if(window.confirm('Do you want to Remove'))
   
   fetch("http://localhost:8000/employee/"+id,{
      method:"DELETE",
     
  }).then((res)=>res.json())
  .then((res)=>{
 alert(" Removed successfully")
 window.location.reload();
  })
  .catch((err)=>{
     console.log(err.message)
  })
}


    useEffect(()=>{
      fetch("http://localhost:8000/employee").then((res)=>{
        return res.json();
      })
      .then((resp)=>{
        setData(resp)
      })
      .catch((err)=>{
         console.log(err.message);
      })
    },[])
    return(
       <div className="container"> 
         <div className="card">
            <div className="card-title">
             <h1>Employee Listing</h1>
            </div>
            <div className="card-body">
                <div className="divbtn"> 
                    <Link to="employee/create"className="btn btn-success">Add New (+)</Link>
                </div>
                <table  className="table table-bordered">
                <thead className="bg-dark text-white">
                 <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Action</td>
                    
                 </tr>
                </thead>
                <tbody>
                    { data&&
                    data.map((item)=>{
                         return   <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                            
                           <button onClick={()=>{LoadEdit(item.id)}} className="btn btn-success">Edit</button>
                           <button onClick={()=>{Removefunction(item.id)}}   className="btn btn-danger">Remove</button>
                           <button onClick={()=>{LoadDetail(item.id)}}   className="btn btn-primary">Details</button>


                            </td>
                            
                         </tr>
                        })

                    }
                </tbody>

                </table>
            </div>

         </div>
       </div>
    )
}
export default EmpListing;