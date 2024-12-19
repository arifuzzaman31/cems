# cems
Multi-Currency Expense Management System

# Setting Up and Running a Node.js Project from a Git Repository

Follow these steps to clone the repository and set up the Node.js project on your local machine.

## Prerequisites

Before starting, ensure you have the following installed on your system:

1. [Git](https://git-scm.com/downloads)
2. [Node.js](https://nodejs.org/) (which includes npm)

To check if they are installed, run the following commands:
```bash
# Check Git version
git --version

# Check Node.js version
node -v

# Check npm version
npm -v
```
If any of the above commands fail, install the required software before proceeding.

---

## Steps to Clone and Run the Node.js Project

### Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to store the project:
   ```bash
   cd /path/to/your/desired/directory
   ```
3. Clone the repository using the following command:
   ```bash
   git clone --branch master https://github.com/arifuzzaman31/cems.git
   ```
   

4. Navigate into the project folder:
   ```bash
   cd cems
   ```

---

### Step 2: Install Dependencies

1. Ensure you are in the project directory.
2. Install the necessary dependencies using npm:
   ```bash
   npm install
   ```
   This command will download and install all dependencies listed in the `package.json` file.

---


### Step 3: Run the Project

1. Start the Node.js application. The exact command will depend on how the project is configured:
   - To start in development mode:
     ```bash
     npm run dev
     ```
   - To start in production mode:
     ```bash
     npm start
     ```

2. If the project uses a different startup script, refer to the `scripts` section in `package.json` for the correct command.


---

### Troubleshooting

- **Missing Dependencies**: If you encounter errors about missing modules, ensure `npm install` ran successfully.
- **Port Conflicts**: If the default port is already in use, port 3001 must be free.
- **Permission Issues**: If you face permission issues while installing dependencies, use:
  ```bash
  sudo npm install
  ```
  (For Unix-based systems only)

---

You are now ready to use the Node.js project. Happy coding!
