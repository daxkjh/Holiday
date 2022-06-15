import Navbar from "../components/Navbar";
import CreateHolidayForm from "../components/CreateHolidayForm";
import { Link } from "react-router-dom";



function Main() {


    return (
      <>
      {/* <Navbar/> */}
      <main>
        <section>
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
  