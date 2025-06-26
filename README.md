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


### Folder Structure 

device-management-backend
    -app/main.py: This contains my FastAPI code with all the API routes and logic.
    -requirements.txt: This lists the Python packages needed, like FastAPI and uvicorn.
    -Dockerfile: This builds the backend Docker image.

device-management-frontend
    -public/index.html: This is the main HTML template that loads the React app and includes Tailwind via CDN.
    -src/App.js: This is my main React component that combines the form and the device list.
    -src/index.js: This is the entry point for the React app.
    -src/components/DeviceForm.js: This handles adding a new device.
    -src/components/DeviceList.js: This displays the list of devices and lets the user update or delete them.
    -src/styles.css: This contains my CSS styles for the app layout, buttons, tables, and form.
    -package.json: This lists the frontend dependencies like React and axios, and the build/start scripts.
    -Dockerfile: This builds the frontend Docker image.

docker-compose.yml: This runs both the frontend and backend together with one command.