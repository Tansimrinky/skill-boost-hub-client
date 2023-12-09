# Overview
The project involves creating a responsive website using the MERN stack (MongoDB, Express.js, React.js, Node.js). It includes features for users (students and teachers), classes, feedback, and administrative functionalities.

## Feature 
1. Navbar:
Responsive navbar with logo, website name, Home, All Classes, Teach on [your website name], and Sign In buttons.
User profile picture and dropdown menu with user-related options.
2. Homepage:
Banner section with relevant images/carousel.
Highlight partners or collaborators with logos and descriptions.
Section for popular or recommended classes using a slider.
Feedback section in the student dashboard using a carousel.
Display total users, total classes, and total student enrollment.
3. All Classes:
Display classes in card format with relevant information.
Enroll button to redirect to the class details page.
4. Class Details Page:
Private route for enrolled students.
Display class information and a Pay button.
After payment, redirect to the dashboard/my-enroll classes page.
5. Teach on [your website name]:
Private route for teacher applications.
Form with necessary fields for teachers to apply.
Submit for review button to save data in the database.
6. Student Dashboard:
Private route with My Enroll Class and Profile sections.
7. My Enroll Class:
Display enrolled classes in card format.
Continue button to redirect to My Enroll Class Details page.
8. My Enroll Class Details:
Display assignments in tabular form with relevant information.
TER button to submit Teaching Evaluation Report feedback.
9. My Profile:
Display user information.
10. Admin Dashboard:
Private route with Teacher Request, Users, All Classes, and Profile sections.
11. Teacher Request:
Display teacher requests in tabular form.
Approve and reject buttons with corresponding actions.
12. Users:
Display all users in tabular form with admin functionality.
13. All Classes:
Display all classes in tabular form with admin functionality.
See progress button to view feedback.
14. My Profile:
Display admin information.
15. Teacher Dashboard:
Private route with Add Class, My Class, and Profile sections.
16. Add Class:
Form for teachers to add classes.
17. My Class:
Display added classes in card format.
Update, delete, and see details buttons with corresponding actions.
18. My Profile:
Display teacher information.
19. Login & Registration systems:
Implement login and registration pages with relevant error messages.
Include Google Sign-in.
Use Email/Password for registration.
Implement tanstack query for data fetching (GET method only).