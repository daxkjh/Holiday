import { useState } from "react";

function CreateHolidayForm({ setLastId }) {
  const [name, setName] = useState("");

  const handleClick = () => {
    fetch("/api/holidays/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLastId(data._id);
        setName("");
      });
  };

  return (
    <fieldset>
      <legend>Add</legend>
      <label htmlFor="holiday">Name</label>
      <input
        id="holiday"
        name="holiday"
        value={name}
        maxLength={10}
        onChange={(event) => setName(event.target.value)}
      />
      <button disabled={name.length === 0} onClick={handleClick}>
        Add a reason to celebrate
      </button>
    </fieldset>
  );
}

export default CreateHolidayForm;
