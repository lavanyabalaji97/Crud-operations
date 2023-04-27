export const removeEmployee = (id) => {
   return fetch(`http://localhost:8000/employee/${id}`, { method: "DELETE" })
      .then((res) => res.json())
}

