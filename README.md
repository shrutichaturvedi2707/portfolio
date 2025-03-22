# CSCI 3172 Lab 7 - Adding Interactivity to React Portfolio

Building on Lab 6, I've added interactive features and API integration to my portfolio website.

* *Date Created*: 11 Mar 2025
* *Last Modification Date*: 21 Mar 2025
* *Netlify URL*: https://portfolio-shruti123.netlify.app/
* *Github URL*: https://github.com/shrutichaturvedi2707/portfolio
* *GitLab URL*: https://git.cs.dal.ca/shrutic/csci-3172/-/tree/main/labs/lab7

## Author
* Shruti Chaturvedi (shrutichaturvedi@dal.ca)

## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [React Router](https://reactrouter.com/) - Routing library for React
* [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive design
* [React Bootstrap](https://react-bootstrap.github.io/) - Bootstrap components built with React
* [Create React App](https://create-react-app.dev/) - Tool to set up a modern web app

## Features Implemented

### Lab 6 Features
- Responsive design that works on desktop and mobile devices
- Navigation with React Router
- Home page with introduction and skills overview
- About page with education, experience, and technical skills
- Projects page showcasing portfolio projects
- Custom 404 error page
- Accessibility features following WCAG guidelines

### Lab 7 New Features
- **Theme Switcher (Light/Dark Mode)**
  - Implemented using React useState hook
  - Theme preference persists after page refresh using localStorage
  - Dynamic color changes using CSS classes and data-bs-theme attribute

- **Interactive Skills List**
  - Implemented using React useState hook
  - Search functionality to filter skills by keyword
  - Category filtering with clickable badges
  - Real-time updates as filters are applied

- **Projects from API**
  - Projects are fetched using React useEffect hook
  - Loading state displayed while fetching data
  - Error handling for failed API requests

- **Weather Information**
  - Weather data displayed on the home page
  - Shows city, temperature, humidity, and conditions
  - Data fetched using React useEffect hook

## Testing

I performed manual testing to verify the functionality:

1. **Theme Switcher**
   - Verified that clicking the theme toggle button changes between light and dark mode
   - Confirmed that theme preference is saved in localStorage and persists after page refresh
   - Checked that all components display correctly in both themes

2. **Skills Filtering**
   - Tested searching for skills by keyword
   - Verified that clicking category badges filters the skills correctly
   - Confirmed that combining search and category filters works as expected

3. **Projects Loading**
   - Verified that projects are loaded using useEffect
   - Confirmed that loading state is displayed while fetching data
   - Tested error handling by temporarily breaking the data source

4. **Weather Display**
   - Confirmed that weather information is displayed on the home page
   - Verified that all required data (city, temperature, humidity) is shown

## Sources Used

- React Bootstrap documentation for component examples
- React useState and useEffect documentation
- MDN Web Docs for localStorage implementation
- Bootstrap 5 documentation for theme implementation

## Acknowledgments

- Bootstrap team for the responsive CSS framework
- The CSCI 3172 teaching team for the assignment requirements and guidance