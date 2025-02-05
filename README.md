# CollaborIQ

## 🗂️ Project Overview:

This project is designed as part of a job assessment for BJET Inc., focusing on developing a web application for online group study. The platform allows users to create assignments, complete them, and grade their friends' assignments. It demonstrates proficiency in the MERN stack and key web development skills.

## Live URL:

[Live Site Link](https://leafy-monstera-bddb10.netlify.app)

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
