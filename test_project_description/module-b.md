# Module B - DineEase Admin

## Description of the Module
This module requires competitors to develop an admin application for DineEase staff, utilizing the backend developed in Module A. **Don't use the backend you developed, use the fully functional backend you received: https://competitor-yyyy-solution.dineease.com, where YYYY is your four-digit PIN code.** The admin application is a crucial tool for managing data related to restaurants, users, and reviews. It includes several key features and pages, each serving a specific administrative function.

For easier design, some wireframes are available in the `assets/module-a/design` folder. You don't have to follow the wireframes strictly, but the admin app should be designed with a user-friendly interface and provide efficient navigation through its various functionalities. 

Below are the detailed descriptions of the different subtasks involved in this module.

### Login Page
- **Objective**: Create a login page for DineEase staff. Although there is no fully functional authentication endpoint available, simulate the login process using the "get all users" endpoint from Module A.
- **Tasks**:
  - Design a login form with fields for username (email) and password.
  - Check that the username the user entered matches the email address format and that the password is at least 4 characters long.
  - On form submission, fetch the list of users and simulate authentication. If the user exists with the specified email address and their role is admin, consider the user logged in. Otherwise, the following error message should be displayed: `Incorrect username or password.`
  - Redirect authenticated users to the Restaurants page menu.
  - If the user is already logged in and refreshes the screen, they should remain logged in and access the admin pages.

### Menu
- **Objective**: Implement a navigation menu with links to the main sections of the admin app: Restaurants, Users, Reviews, and Logout.
- **Tasks**:
  - Design a menu that is accessible throughout the admin app.
  - Ensure easy navigation to the Restaurants, Users, and Reviews pages and a Logout option.

### Restaurants Page
- **Objective**: List restaurants with pagination, displaying brief data for each restaurant.
- **Tasks**:
  - Fetch and display a list of restaurants showing name, city, countryCode and average ratings from reviews.
  - Implement pagination to manage the display of a large number of restaurants. Maximum number of items per page is 10.
  - Design the UI for clarity and ease of use.

### Users Page
- **Objective**: List restaurant owner users and provide functionality to view detailed information and update user status.
- **Tasks**:
  - Display a list of users showing their name, e-mail, and whether they are enabled or disabled.
  - Allow staff to click on a user to view detailed information, including their subscription plan and payment frequency.
  - Provide an option to change the user's enabled status.

### Reviews Page
- **Objective**: Display reviews sorted by creation date, with additional restaurant and reviewer information.
- **Tasks**:
  - List reviews showing the restaurant's name, city, country code, reviewer's name, rating, and review text.
  - Sort reviews by the date of creation in descending order.
  - Implement an accordion view for the review text to save space and improve readability.
  - Include a delete button for each review, allowing staff to remove inappropriate content.

### Logout
- **Objective**: Simulate a logout process for the admin application.
- **Tasks**:
  - Implement a logout mechanism that, when triggered, redirects the user back to the login page.
  - Ensure the logout process is intuitive and accessible from the navigation menu.

