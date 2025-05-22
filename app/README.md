
This project is a web application designed to demonstrate modern web development practices. Below you'll find detailed instructions on setting up and running the project, descriptions of the architecture and technologies used, and links to relevant files.

## Installation Steps

1. **Clone the Repository**: 
   ```bash
   git clone <repository_url>
   ```
   
2. **Navigate to the Project Directory**:
   ```bash
   cd <project_directory>
   ```

3. **Install Dependencies**: 
   Ensure that you have Node.js and npm installed. Then run:
   ```bash
   npm install
   ```

## Running the Development Server

1. **Start the Server**:
   ```bash
   npm start
   ```

2. **Open in Browser**:
   Navigate to `http://localhost:3000` in your web browser to view the application.

## Architecture & Technologies Used

- **HTML5**: The structure of the web app is defined using semantic HTML5.
- **CSS3**: Styles are created using modern CSS practices, ensuring a responsive and attractive UI.
- **JavaScript**: Client-side logic is handled with JavaScript for dynamic interactions and form processing.
- **Node.js & npm**: Used for managing dependencies and running the development server.

### Linked Files

- **HTML Structure**: [`app/index.html`](./app/index.html)
  - Main entry point for the application, containing the layout structure including header, navigation, main content, and footer.

- **Stylesheet**: [`app/styles/main.css`](./app/styles/main.css)
  - Contains all the styles for the application, focusing on a modern and responsive design with CSS variables for color schemes.

- **Main JavaScript**: [`app/scripts/main.js`](./app/scripts/main.js)
  - Handles dynamic features such as navigation toggle and content updates without page reloads.

- **Form Handler**: [`app/scripts/formHandler.js`](./app/scripts/formHandler.js)
  - Dedicated to processing form submissions, including validation and feedback display.

## File Descriptions

- **`index.html`**: The base HTML file with sections for Home, About, Services, and Contact. It links to the main stylesheet and JavaScript file.
- **`main.css`**: Styles the application using CSS variables for colors and implements responsive design principles.
- **`main.js`**: Provides interactive functionality, such as menu toggling and content swapping.
- **`formHandler.js`**: Manages form submission processes including validation and asynchronous submission.

Ensure that all linked files are kept in their respective directories and properly referenced within each other for full functionality.

---