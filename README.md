# Study Hive

## 🗂️ Project Overview:

This project is designed as part of a job assessment for BJET Inc., focusing on developing a web application for online group study. The platform allows users to create assignments, complete them, and grade their friends' assignments. It demonstrates proficiency in the MERN stack and key web development skills.

## Live URL:

[Live Site Link](https://qollabor-iq.netlify.app)

## Technologies used

### Frontend:

- HTML, CSS, and Tailwind CSS for responsive and visually appealing design.
- JavaScript for interactive and dynamic user interfaces.
- React.js for building a scalable and component-based UI.

### Backend:

- Node.js with Express.js for handling server-side logic and APIs.

### Database:

- MongoDB for efficient and flexible data storage of user and campaign information.

### Authentication & Security:

- JWT (JSON Web Token) or OAuth for secure user authentication.

### Version Control:

- Git and GitHub for collaborative development and version tracking.

### Deployment:

- Vercel for Backend or Netlify for frontend deployment.

## Key Features:

- **User Authentication**: Email/password and social login (Google or GitHub).
- **Assignment Management**:
  - Create assignments with title, description, marks, and difficulty level.
  - View all assignments in a public listing.
  - Update and delete assignments (with permissions).
- **Submission and Evaluation**:
  - Submit assignments with a Google Docs link and notes.
  - Evaluate pending assignments and provide marks and feedback.
- **Dashboard**:
  - View submitted assignments with their status, marks, and feedback.
  - Track pending assignments awaiting evaluation.
- **Search and Filter**:
  - Search assignments by title.
  - Filter assignments by difficulty level.
- **Theme Toggle**: Switch between dark and light modes.
- **Validation**: Forms are validated to ensure proper data entry.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.

## NPM Packages Used:

- `react-router-dom`: For navigation.
- `react-datepicker`: For date selection.
- `react-toastify`: For success/error messages.
- `dotenv`: For environment variable management.
- `jsonwebtoken (JWT)`: For authentication and route protection.
- `mongoose`: For MongoDB object modeling.
- `express`: Backend framework.
- `cors`: To handle cross-origin requests.
- `bcrypt`: For password hashing.
- `axios`: For API calls.

## Additional Notes:

- This application ensures smooth routing and prevents errors on reload.
- Designed with user-friendly navigation and responsive layouts.
- Includes validation for all forms and secure handling of sensitive information.

## Optional Features Implemented:

- Loading spinner during data fetch.
- Animations using Framer Motion.

## How to run the project locally:

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/) (for local database setup)

**Clone the Repository**

```bash
git clone https://github.com/whoishasan/A11-ClientSide
cd A11-client-side
```

**Installation**

Run the following command to install all required packages:

```bash
npm install
```

**Configure**

Create a .env file in the root directory and add the necessary environment variables. For example:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FIREBASE_CONFIGURATION_KEY=your_configuration_key
```

**Use the command below to start the application locally:**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
