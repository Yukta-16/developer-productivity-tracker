import React, { useState } from "react";
import axios from "axios";

function Form({ onSuccess }) {
  const [form, setForm] = useState({ developer: "", date: "", hours: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/hours", form);
    onSuccess();
    setForm({ developer: "", date: "", hours: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <input
        type="text"
        name="developer"
        placeholder="Developer Name"
        value={form.developer}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="hours"
        placeholder="Hours Worked"
        value={form.hours}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default Form;
