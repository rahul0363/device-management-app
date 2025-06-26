import React from "react";

function DeviceList({ devices, updateDevice, deleteDevice }) {
  return (
    <table className="device-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Status</th>
          <th>IP Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <tr key={device.id}>
            <td>{device.id}</td>
            <td>{device.name}</td>
            <td>{device.location}</td>
            <td>
              <select
                value={device.status}
                onChange={(e) =>
                  updateDevice({
                    ...device,
                    status: e.target.value
                  })
                }
              >
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </td>
            <td>{device.ip_address}</td>
            <td>
              <button
                className="update-button"
                onClick={() => updateDevice(device)}
              >
                Update
              </button>
              <button
                className="delete-button"
                onClick={() => deleteDevice(device.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DeviceList;
