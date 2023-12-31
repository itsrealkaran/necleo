# Project Name

## Overview

Briefly describe your project. Provide an overview of what it does and its main features.

## Installation

### Prerequisites

Before you begin, ensure that you have the following tools and technologies installed on your machine:

- [Node.js](https://nodejs.org/en/) : Make sure to install the latest LTS version of Node.js.
- [npm](https://www.npmjs.com/) : The Node.js package manager. It is included with Node.js installation.

You can check if you have Node.js and npm installed by running the following commands in your terminal:

```bash
node --version
npm --version
```

If either of the commands does not return a version number, you need to install Node.js and npm before proceeding.

### Instructions

Provide step-by-step instructions on how to install and set up the project locally.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

1. **Navigate to the project directory:**

   ```
   bash
   Copy code
   cd your-project
   ```

1. **Install dependencies:**

   ```
   bash
   Copy code
   npm install
   ```

1. **Run the application:**

   ```
   bash
   Copy code
   npm start
   ```

The application will be accessible at http://localhost:3000.

## Features

- Project Management:

  - `Create`, `edit`, and `delete` projects.
  - View a list of your projects.

- API fetch:

  - Random Images are fetched from api using `fetch api` and 6 cards are generated.
  - These cards are also `Expandable`, `Editable` and `Deletable` like other cards.

- Responsive Design:

  - The application adapts to different screen sizes for a seamless user experience.

  - Easily navigate through the app with a clean and intuitive user interface.

  - Touchscreen devices are fully supported, providing an optimal experience.

## Assumptions

There are few assumptions made:

- Author name fetched from api is used as title of cards
- Same `lorem-epsum` text is used as description for all cards
- Instead of Image upload url is to be provided for both new and edit project
- Except myproject all others tab are `null`, but `navigable`

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

#### Made with ❤️ by [Karan Singh](https://linkedin.com/in/itsrealkaran)
