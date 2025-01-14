# The Language Club - Frontend

## Overview

The frontend of The Language Club is built using React.js, a powerful JavaScript library for building user interfaces. The application communicates with the backend through RESTful APIs, allowing users to interact with the platform efficiently. The frontend integrates Firebase Authentication for user sign-in and sign-out functionality, while Tailwind CSS is used for styling the UI. Several libraries such as React-Awesome-Reveal, Swiper.js, and TanStack Query are used to enhance the user experience and streamline data fetching.

## Features

**Sign-In and Sign-Out:**

- Firebase Authentication is used for handling user authentication.
- Toggling sign-in and sign-out buttons are available in the UI, allowing users to easily sign in or out.
- When a user is signed in, they can navigate to their personalized Dashboard.

**Role-Based UI:**

- This project has 3 roles - student, instructor and admin.
- When a user register for the first time his/her role is by default a student.
- Admin has the ability to make a student as instructor or make an instructor to admin.
- Only a student can see the select button for selecting a course while for the instructor and the admin the button is hidden or disabled.

**Responsive Design**

- Tailwind CSS ensures a responsive and mobile-first design.
- The layout adapts to different screen sizes, providing an optimal experience across devices.

## Technologies Used

- **React.js:** For building dynamic user interfaces with reusable components.
- **Firebase Authentication:** For secure sign-in and sign-out functionality.
- **Tailwind CSS:** For custom styling and responsive design.
- **React-Awesome-Reveal:** For adding smooth animations and transitions.
- **Swiper.js:** For creating interactive and swipeable elements, especially for courses.
- **JWT:** Used for securing the API calls by attaching JWT tokens to requests.
- **Axios:** For making HTTP requests to the backend and interacting with the RESTful API.
- **TanStack Query:** For data fetching, caching, and synchronizing API data with the frontend.

## Getting Started

**1. Clone the frontend repository:**
`bash
    git clone <Repo URL>
    cd <repo-folder>
    `
**2. Install dependencies:**
`bash
    npm install
    `
**3. Start the frontend development server:**
`bash
    npm start
    `
**4. Access the frontend locally:**
http://localhost:3000

For any inquiries or issues, feel free to reach out:

- **Email:** [arif.aust.eng@gmail.com](mailto:arif.aust.eng@gmail.com)
- **LinkedIn:** [Md. Arifur Rahman](https://www.linkedin.com/in/engarif3/)

<!-- #### Click below for the project live link:

[Project Live Link](https://the-language-club.web.app) -->

