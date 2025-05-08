# Modern Travel & Tourism

## Project Description

Modern Travel & Tourism is a web application designed to provide users with a seamless experience for booking travel and tourism services. The application includes a frontend for user interaction and a backend for managing data and business logic.

## Setup Instructions

### Prerequisites

- Node.js
- Python
- Docker
- pnpm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install frontend dependencies:
   ```sh
   cd apps/frontend
   pnpm install
   ```

3. Install backend dependencies:
   ```sh
   cd ../backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

4. Set up the database:
   ```sh
   docker-compose up -d
   ```

## Running the Application

### Running the Frontend

1. Navigate to the frontend directory:
   ```sh
   cd apps/frontend
   ```

2. Start the frontend development server:
   ```sh
   pnpm dev
   ```

### Running the Backend

1. Navigate to the backend directory:
   ```sh
   cd apps/backend
   ```

2. Apply database migrations:
   ```sh
   ./start.sh
   ```

3. Start the backend development server:
   ```sh
   ./start.sh
   ```

## Contributing Guidelines

We welcome contributions to the Modern Travel & Tourism project. To contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bugfix.
2. Write clear and concise commit messages.
3. Ensure your code follows the project's coding standards.
4. Submit a pull request with a detailed description of your changes.

Thank you for contributing!
