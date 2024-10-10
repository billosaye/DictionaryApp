Here’s the updated documentation with the live website link included:

---

# Dictionary App Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Usage](#usage)
5. [Components](#components)
6. [Live Website](#live-website)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction
The **Dictionary App** is a web application built with React that allows users to search for words and view their meanings, synonyms, and antonyms using the [Dictionary API](https://dictionaryapi.dev/). The app is styled using Tailwind CSS for a responsive and modern UI.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [pnpm](https://pnpm.js.org/) (optional, if you prefer using pnpm)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd dictionary-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   Or if using pnpm:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   Or if using pnpm:
   ```bash
   pnpm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Project Structure
The project is structured as follows:

```
src
├── assets
│   ├── icons
│   └── images
├── Components
│   ├── Header.jsx
│   ├── ResultList.jsx
│   ├── MeaningList.jsx
│   ├── Synonyms.jsx
│   └── Antonyms.jsx
├── App.jsx
├── index.js
├── App.css
└── .env
```

### Component Descriptions
- **Header.jsx**: Renders the header section of the application, including the search input.
- **ResultList.jsx**: Fetches and displays the search results including meanings, synonyms, and antonyms.
- **MeaningList.jsx**: Displays the meanings and definitions of the searched word.
- **Synonyms.jsx**: Displays synonyms of the searched word.
- **Antonyms.jsx**: Displays antonyms of the searched word.

## Usage
1. Enter a word in the search input field located in the header.
2. Press Enter or click the search button to fetch the word's definitions, synonyms, and antonyms.
3. The results will be displayed in the results section below the header.

## Components
### App.jsx
The main component of the application that sets up context and renders the header and results.

### ResultList.jsx
Fetches data from the dictionary API based on user input and manages loading and error states.

### MeaningList.jsx
Displays the meanings and definitions for the word fetched from the API.

### Synonyms.jsx
Displays a list of synonyms for the searched word.

### Antonyms.jsx
Displays a list of antonyms for the searched word.

## Live Website
You can access the live version of the Dictionary App at [https://dictionary-app-eosin-eight.vercel.app/](https://dictionary-app-eosin-eight.vercel.app/).

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to add more details or modify sections as necessary!
