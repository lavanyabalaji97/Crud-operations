import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaClipboardList } from 'react-icons/fa';
import { Modal, Button } from "react-bootstrap"
import { removeEmployee } from '../services/user'

const EmpListing = () => {
   const [data, setData] = useState(null)
   const [deleteId, setDeleteId] = useState("")
   const [show, setShow] = useState(false)

   const navigate = useNavigate()
   const LoadDetail = (id) => {
      navigate("/employee/detail/" + id)
   }

   const LoadEdit = (id) => {
      navigate("employee/edit/" + id)
   }

   const handleClose = () => {
      setShow(false)
   }

   const Removefunction = (id) => {
      setDeleteId(id)
      setShow(true)
   }


   const handelDeleteItem = () => {
      removeEmployee(deleteId)
         .then((res) => {
            const newData = data.filter(x => x.id !== deleteId)
            setData(newData);
         })
         .catch((err) => {
            console.log(err.message)
         })

      // setData(pre => {
      //    const newArray = [...pre]
      //    return newArray.filter(item => item.id !== deleteId)
      // })
      setShow(false)
   }

   useEffect(() => {
      fetch("http://localhost:8000/employee").then((res) => {
         return res.json();
      })
         .then((resp) => {
            setData(resp)
         })
         .catch((err) => {
            console.log(err.message);
         })
   }, [])

   if (!data) {
      return <div className="fw-bold h1">Loading</div>
   }

   return (
      <div className="container">
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Sure,are you going to Delete</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handelDeleteItem}>
                  Ok
               </Button>
               <Button variant="primary" onClick={handleClose}>
                  Cancel
               </Button>
            </Modal.Footer>
         </Modal>
         <div className="card">
            <div className="card-title">
               <h1>Employee Listing</h1>
            </div>
            <div className="card-body">
               {
                  data.length === 0 ? (
                     <div>
                        <h1>No Employee Found</h1>
                        <div>
                           <Link className="btn btn-success" to="employee/create">Add New(+)</Link>
                        </div>
                     </div>
                  ) :  (
                     <div>
                     <div className="text-end">
                        <Link className="btn btn-success" to="employee/create">Add New(+)</Link>
                     </div>
                     <table className="table table-bordered">
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
                           {data &&
                              data.map((item) => {
                                 return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                       <button onClick={() => { LoadEdit(item.id) }} className="btn btn-success"><FaEdit className="icons" />Edit</button>
                                       <button onClick={() => { Removefunction(item.id) }} className="btn btn-danger"><FaTrashAlt className="icons" />Remove</button>
                                       <button onClick={() => { LoadDetail(item.id) }} className="btn btn-primary"><FaClipboardList className="icons" />Details</button>
                                    </td>
                                 </tr>
         
                              })
                           }
         
                        </tbody>
                     </table>
                  </div>
                  )
               }
            </div>
         </div>

      </div>
   )
}
export default EmpListing;