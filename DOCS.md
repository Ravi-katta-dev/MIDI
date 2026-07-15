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

## Usage on PC

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

## Usage on Mobile

To use Midiano on a mobile device, follow these steps:

1. **Host the app on your local network:**
   Start the local web server on your PC as described in the "Usage on PC" section (e.g., `python3 -m http.server 8000`). Make sure your PC and your mobile device are connected to the same Wi-Fi network.

2. **Find your PC's IP address:**
   - On Windows: Open Command Prompt and type `ipconfig`. Look for the "IPv4 Address".
   - On Mac/Linux: Open Terminal and type `ifconfig` or `ip a`. Look for the `inet` address under your active network interface.

3. **Open in mobile browser:**
   Open a modern browser on your mobile device (like Chrome or Safari). Enter your PC's IP address followed by the port number into the address bar.

   For example: `http://192.168.1.10:8000`

4. **Interact with the app:**
   The app will load and run entirely in your mobile browser, utilizing the WebAudioAPI for sound output. Note that connecting a MIDI keyboard directly to a mobile device requires specific adapters and browser support.
