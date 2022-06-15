import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const [holiday, setHoliday] = useState({});
  const {id} = useParams()
  const navigate = useNavigate();

  if (id !== "admin") {
    navigate("/")
  }


  useEffect(() => {
    fetch(`/api/holidays/${id}`)
      .then((response) => response.json())
      .then((data) => setHoliday(data));
  }, []);

  if (holiday.status === "fail") {
    return "No Holiday here"
  }

  return (
    <div>
      {/* <Navbar /> */}
      <h1>Holiday Info</h1>
      <h2>{holiday.name}</h2>
      <dl>
        <dt>Celebrated</dt>
        <dd>{(holiday.celebrated)? "YES" : "NO"}</dd>
        <dt>Likes</dt>
        <dd>{holiday.likes}</dd>
        <dt>Description</dt>
        <dd>{holiday.description}</dd>
      </dl>
    </div>
  );
};

export default Detail;
