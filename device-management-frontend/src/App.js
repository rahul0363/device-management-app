import React, { useEffect, useState } from "react";
import axios from "axios";
import DeviceForm from "./components/DeviceForm";
import DeviceList from "./components/DeviceList";
import "./styles.css";

const API_BASE = "http://localhost:8000";

function App() {
  const [devices, setDevices] = useState([]);

  const fetchDevices = async () => {
    try {
      const res = await axios.get(`${API_BASE}/devices`);
      setDevices(res.data);
    } catch (err) {
      alert("Error fetching devices");
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  const addDevice = async (device) => {
    try {
      await axios.post(`${API_BASE}/devices`, device);
      fetchDevices();
    } catch (err) {
      alert("Error adding device: " + (err.response?.data?.detail || err.message));
    }
  };

  const updateDevice = async (device) => {
    try {
      await axios.put(`${API_BASE}/devices/${device.id}`, device);
      fetchDevices();
    } catch (err) {
      alert("Error updating device");
    }
  };

  const deleteDevice = async (id) => {
    try {
      await axios.delete(`${API_BASE}/devices/${id}`);
      fetchDevices();
    } catch (err) {
      alert("Error deleting device");
    }
  };

  return (
    <div className="app-container">
      <h1>Device Management Dashboard</h1>
      <DeviceForm addDevice={addDevice} />
      <DeviceList devices={devices} updateDevice={updateDevice} deleteDevice={deleteDevice} />
    </div>
  );
}

export default App;