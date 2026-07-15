# Installation and Usage

Midiano is a client-side JavaScript web application. You don't need any complex backend setup, database, or build tools to run it.

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. **No dependencies to install:**
   All necessary libraries are already included in the repository (e.g., in `lib/`, `css/`, `js/`).

## Usage

To run the application locally, you just need a local web server to serve the static files.

1. **Start a local web server:**
   You can use any static file server. A simple option is Python's built-in HTTP server. Run this command in the root directory of the project:

   ```bash
   # If you have Python 3 installed
   python3 -m http.server 8000

   # Or if you have Python 2 installed
   python -m SimpleHTTPServer 8000

   # Or if you prefer Node.js (and have http-server installed)
   npx http-server
   ```

2. **Open in browser:**
   Open your web browser and go to `http://localhost:8000` (or whichever port your server is running on).

3. **Interact with the app:**
   - You can play the provided MIDI files.
   - If you connect a MIDI-Keyboard, make sure your browser supports the WebMIDIAPI (like Chrome or Edge) to use it with the app.
