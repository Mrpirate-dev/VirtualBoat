# VirtualBoat

VirtualBoat is a gaming website for people who enjoy racing and shooter games. The purpose of the site is to help visitors discover games, explore different categories and learn more about each title. The website also includes a signup page where visitors can enter their player details and receive a confirmation in the browser. This signup is a demonstration only; the information is not saved or sent to a server.

## Website pages

The website is made up of three pages. The home page (`index.html`) introduces VirtualBoat and highlights racing and shooter games. The games page (`games.html`) lets visitors search the game list, filter it by category and open a details window for each game. The signup page (`join.html`) contains a form for a visitor's name, gamer tag and favourite game.

## Main features

Visitors can use the navigation menu to move between all three pages. The games page includes cards, category filters and a search field that checks game titles and styles. Selecting a game's details button opens a Bootstrap modal with information and screenshots. On the signup page, JavaScript checks the entered details and shows a message when required information is missing or when the form is completed successfully.

## Technologies

HTML is used to structure the pages, and custom CSS is stored in `css/styles.css`. Bootstrap 5.3.3 provides the responsive layout, navigation, cards and form styling. The JavaScript in `js/app.js` stores the game information and controls the search, filters, details modal and form validation. jQuery is used to respond to the game search field and update which game cards are displayed.

The website uses three Bootstrap JavaScript components. The **Collapse** component opens and closes the navigation menu on smaller screens. The **Modal** component displays game details, and the **Toast** component displays a signup confirmation.

## Running the website

Open `index.html` in a web browser to view the website. Bootstrap and jQuery are loaded from online CDNs, so an internet connection is needed for these libraries. The website can also be opened through a local development server.

## Assignment requirements review

The supplied assignment brief asks for a responsive, interactive website with at least three pages, Bootstrap styling, meaningful JavaScript, a form, jQuery, and at least two Bootstrap JavaScript components. The current project includes these main features. The pages use consistent navigation; game filters, search, game details and the signup form provide interaction; and the form displays validation feedback. Collapse, Modal and Toast are used as Bootstrap JavaScript components.

Some requirements still need attention or cannot be confirmed from the project files. The Game Zone concept describes games, categories, ratings, events and registration; the website currently has games, categories and a signup form, but it does not yet include ratings or events. The project files do not show lecturer approval or separate planning evidence. The layout was checked in a browser at widths of 468px, 960px and 1600px with no horizontal overflow, but it should also be checked on the devices used for the final submission. Labels, live feedback and image descriptions are included, though keyboard and accessibility behavior still need a manual check.

The assignment also requires a GitHub repository with at least five meaningful commits. A Git repository and GitHub URL were not available in the project folder during this review, so this requirement has not been verified. Before submitting, create and push the repository if you have not already done so, and add your name, student ID, repository URL and submission date to the required submission document. This review compares the project files with the brief, but it cannot guarantee a mark or confirm requirements that depend on your lecturer or submission process.

## AI-use disclosure

AI tools, including Copilot and Claude, were used as development aids while working on this project. They helped with website code and with adding the supplied screenshots to the game cards and details windows. AI assistance was also used to compare the project with the assignment brief and prepare this README. I am responsible for reviewing and testing the work and should be able to explain the code included in the final submission.
