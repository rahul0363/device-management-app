from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, IPvAnyAddress
from typing import Dict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Device Management API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Device(BaseModel):
    id: str
    name: str
    location: str
    status: str
    ip_address: IPvAnyAddress

devices: Dict[str, Device] = {}

@app.get("/devices")
def get_devices():
    return list(devices.values())

@app.post("/devices")
def add_device(device: Device):
    if device.id in devices:
        raise HTTPException(status_code=400, detail="Device ID already exists")
    devices[device.id] = device
    return device

@app.put("/devices/{device_id}")
def update_device(device_id: str, device: Device):
    if device_id != device.id:
        raise HTTPException(status_code=400, detail="Device ID mismatch")
    if device_id not in devices:
        raise HTTPException(status_code=404, detail="Device not found")
    devices[device_id] = device
    return device

@app.delete("/devices/{device_id}")
def delete_device(device_id: str):
    if device_id not in devices:
        raise HTTPException(status_code=404, detail="Device not found")
    del devices[device_id]
    return {"detail": "Device deleted"}
