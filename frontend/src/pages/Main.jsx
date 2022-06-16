import debug from "debug";
import { useEffect, useState } from "react";
import CreateHolidayForm from "../components/CreateHolidayForm";
const log = debug("simon:frontend:Main");

function Main() {
  const [holidays, setHolidays] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    fetch("/api/holidays/")
      .then((response) => response.json())
      .then((data) => setHolidays(data.data));
  }, [lastId]);
  return (
    <main>
      <section>
        <h1>Holidays! Celebrate!</h1>
        <CreateHolidayForm setLastId={setLastId}/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {holidays.map((holiday) => (
              <tr key={holiday._id}>
                <td>{holiday.name}</td>
                <td>{holiday.likes} </td>
                <td>Like</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Main;
