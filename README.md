# lokesh19-lokesh-simple-code-editor-lokesh

Step 1: Extract the Zip file
After downloading the Zip file from GitHub, extract its contents.

Step 2: Import project into VS Code
Open Visual Studio Code (VS Code).
Use the "Open Folder" feature to import the extracted project folder into VS Code.

Step 3: Open terminal in VS Code
Once the project is opened in VS Code, open the integrated terminal. You can do this by going to Terminal > New Terminal in the menu, or by using the shortcut Ctrl+ (backtick).

Step 4: Install dependencies
In the terminal, execute the following commands one by one to install necessary dependencies:
bash
Copy code
npm install react-simple-code-editor
npm install -g create-react-app  # Only needed if you haven't installed create-react-app globally before
npm install -g npm@latest  # Updates npm to the latest version globally
npm install react-scripts

Step 5: Update the package.json
{
  "name": "simple-code-editor-lokesh",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "prism-react-renderer": "^2.3.1",
    "prismjs": "^1.29.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "^5.0.1",
    "react-syntax-highlighter": "^15.5.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}

Step 6: Update the package-lock.json
