### Device Management Application

### Overview
This is a simple device management prototype built using React for the frontend and FastAPI for the backend. It allows users to:

- View all registered devices
- Add new devices
- Update device operational status
- Delete devices

The app is fully dockerized for easy setup and deployment.

---

### Features

- RESTful API built with FastAPI
- React frontend with device listing, adding, updating, and deleting
- Device status updates via dropdown and update button
- In-memory storage of devices (no database needed)
- Dockerized backend and frontend with Docker Compose

---

### Prerequisites

- Docker and Docker Compose installed on your machine

### Setup and Run

1. Clone this repository or copy the project files.
   ```bash
   git clone https://github.com/rahul0363/device-management-app.git
   cd device-management-app

2. From the root project directory, run:
    docker-compose up --build

3. The backend API will be running at:
    http://localhost:8000/devices

4. The frontend React app will be running at:
    http://localhost:3000


