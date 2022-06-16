import Navbar from "../components/Navbar";
import CreateHolidayForm from "../components/CreateHolidayForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { response } from "express";



function Main() {
  const [holidays, setHolidays] = useState([])

  useEffect( async ()=>{
    const response = await fetch ("/api/holidays")
    const data = await response.json()
    setHolidays(data.data)
  },[])


    return (
      <>
      {/* <Navbar/> */}
      <main>
        <section>
          <h1>Main Page</h1>
          <h1>Holidays! Celebrate!</h1>
          <CreateHolidayForm />
    
        </section>
        <section>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              {holidays.map((x)=>{
                    <tr>
                    <td>{holidays.name}</td>
                    <td>{holidays.likes}</td>
                    <td>Like</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
              })}
              <tr>
                <td>World Kindness Day</td>
                <td>9999</td>
                <td>Like</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
              <tr>
                <td>Bathtub Party Day</td>
                <td>12583</td>
                <td>Like</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
              <tr>
                <td><Link to="/holidays/birthday">birthday</Link></td>
                <td>12583</td>
                <td>Like</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
      </>
    );
  }
  
  export default Main;
  