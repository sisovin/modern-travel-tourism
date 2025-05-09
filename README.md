# Modern Travel & Tourism

Modern Travel & Tourism is a web application designed to provide users with a seamless experience for booking travel and tourism services. The application includes a modern frontend for user interaction and a robust backend for managing data and business logic.

## Features

- **Frontend**: A user-friendly interface built with the latest version of Next.js and styled with modern tools.
- **Backend**: A scalable system using Django, Prisma, and PostgreSQL for efficient data management and business logic.
- **Database**: PostgreSQL as the primary database, managed via Docker.
- **Development Tools**: Fully containerized with Docker for easy setup and deployment.

---

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Python](https://www.python.org/) (Version 3.8+)
- [Docker](https://www.docker.com/)
- [pnpm](https://pnpm.io/) (for managing frontend dependencies)

---

### Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/sisovin/modern-travel-tourism.git
cd modern-travel-tourism
```

#### Step 2: Install Frontend Dependencies

1. Navigate to the frontend directory:

   ```bash
   cd apps/frontend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

#### Step 3: Install Backend Dependencies

1. Navigate to the backend directory:

   ```bash
   cd ../backend
   ```

2. Create and activate a Python virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

#### Step 4: Set Up the Database

1. Navigate back to the project root:

   ```bash
   cd ../..
   ```

2. Start the PostgreSQL database using Docker Compose:

   ```bash
   docker-compose up -d
   ```

---

### Running the Application

#### Running the Frontend

1. Navigate to the frontend directory:

   ```bash
   cd apps/frontend
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. The frontend should now be running on `http://localhost:3000`.

#### Running the Backend

1. Navigate to the backend directory:

   ```bash
   cd ../backend
   ```

2. Apply database migrations and start the backend server:

   ```bash
   ./start.sh
   ```

3. The backend should now be running on `http://localhost:8000`.

---

## How to Set Up Next.js (Frontend)

1. Ensure that you have Node.js and pnpm installed.
2. Navigate to the frontend directory:

   ```bash
   cd apps/frontend
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. You can now access the Next.js application on `http://localhost:3000`.

---

## How to Set Up Django, Prisma, and PostgreSQL (Backend)

1. Navigate to the backend directory:

   ```bash
   cd apps/backend
   ```

2. Create and activate a Python virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate
   ```

3. Install backend dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set up the database:
   - Start the PostgreSQL database using Docker Compose:

     ```bash
     docker-compose up -d
     ```

   - Apply database migrations with Prisma:

     ```bash
     ./start.sh
     ```

5. Start the Django development server:

   ```bash
   ./start.sh
   ```

6. The backend should now be available at `http://localhost:8000`.

---

## Contributing Guidelines

We welcome contributions to the Modern Travel & Tourism project! To contribute, please follow these steps:

1. **Fork the Repository**: Create your own copy of the repository.
2. **Create a Branch**: Work on a new branch for your feature or bugfix.
3. **Write Clear Commits**: Use meaningful commit messages.
4. **Follow Coding Standards**: Ensure your code adheres to the project's standards.
5. **Open a Pull Request**: Submit your changes with a detailed description.

Thank you for helping improve Modern Travel & Tourism!

---

## License

This project is licensed under the [MIT License](LICENSE).
