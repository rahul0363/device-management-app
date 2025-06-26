import React, { useState } from "react";

function DeviceForm({ addDevice }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    location: "",
    status: "Online",
    ip_address: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name || !form.location || !form.ip_address) {
      alert("Please fill all required fields");
      return;
    }
    addDevice(form);
    setForm({ id: "", name: "", location: "", status: "Online", ip_address: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" value={form.id} onChange={handleChange} placeholder="Device ID" required />
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Online</option>
        <option>Offline</option>
        <option>Maintenance</option>
      </select>
      <input name="ip_address" value={form.ip_address} onChange={handleChange} placeholder="IP Address" required />
      <button type="submit">Add Device</button>
    </form>
  );
}

export default DeviceForm;
