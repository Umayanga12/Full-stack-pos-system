# Full Stack POS System

![Screenshot 2024-08-11 015024](https://github.com/user-attachments/assets/a811aa03-4538-4a72-916c-b9b713c0d8d3)

This project is a Full Stack POS (Point of Sale) system developed using Next.js for the frontend, Express for the backend, MongoDB for the database, and Electron to run the application as a desktop app.

## Features

- **Frontend**: Built with Next.js
- **Backend**: Built with Express.js
- **Database**: MongoDB
- **Desktop App**: Powered by Electron

## Prerequisites

- Node.js
- Docker
- Bun (Bun.sh)

## Getting Started

### 1. Clone the Repository

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Root Dependencies

From the root directory, run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Set Up the Database

1. Pull the MongoDB Docker image:

   ```bash
   docker pull umayanga20021/pos-mongodb
   ```

2. Start the MongoDB container:

   ```bash
   docker run -d -p 27017:27017 --name pos-mongodb umayanga20021/pos-mongodb
   ```

### 4. Install Application Dependencies

1. Navigate to the `app` folder and install the dependencies:

   ```bash
   cd app
   bun i
   ```

2. Navigate to the `backend` folder and install the dependencies:

   ```bash
   cd ../backend
   bun i
   ```

### 5. Running the Application

To run the application, follow these steps:

1. Ensure the MongoDB database is running by setting up and starting the Docker container as mentioned above.

2. Start the frontend:

   ```bash
   cd app
   bun run dev
   ```

3. Start the backend:

   ```bash
   cd ../backend
   bun run arc/app.js
   ```

4. From the root directory, start the Electron application:

   ```bash
   cd ..
   npm start
   ```

### 6. Accessing the Application

Once all the steps are completed, the POS system will open as a desktop application via Electron.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the [MIT License](LICENSE).


Replace the placeholders with your actual GitHub username, repository name, and contact email. This README provides clear instructions for setting up and running your Full Stack POS System.
