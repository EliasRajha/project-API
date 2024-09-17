# Photo Gallery Project

This project allows users to search for images using keywords, and it fetches random images from the Unsplash API. If available, the app also shows the location of the image and fetches current weather data for that location using the Open-Meteo API.

## Project Structure

- `index.html`: The main HTML file for the project.
- `public/style.css`: The CSS file for styling the web page.
- `src/api.js`: Contains the function to fetch images from the Unsplash API.
- `src/events.js`: Handles user interactions and event listeners.
- `src/main.js`: Initializes the application and integrates other modules.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/EliasRajha/project-API.git    ```


## Running the Project

1. **Start the project:**

    You can use a local server to view the project. For example, using the `live-server` package:

    ```bash
    npx live-server
    ```

    This will start a local server and open your project in the default web browser.

## Configuration

Since this is a local project, the Unsplash API key is included directly in the `src/api.js` file.

## Usage

1. **Search for Images:**
   - Enter a search term into the input field.
   - Press Enter or click the "Search" button to fetch and display images.

2. **View Results:**
   - Images will be displayed with the photographer's name and location (if available).
   - Weather information will be shown if the location data is available.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

