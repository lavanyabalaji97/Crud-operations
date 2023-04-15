import React, { useEffect,useState} from "react";


function Home(props){
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json())
        .then(data=>setData(data)
)

    })
    return(
        <div>
            {
             data.map((item)=>{
              return  <li key={item.id}>{item.title}</li>
             })
            }
        </div>
    )
}
export default Home;