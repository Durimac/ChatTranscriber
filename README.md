# ChatTranscriber

## Setup

### Angular project
Start a new Angular project with its CLI
```
ng new my-project
```

### Adding Electron
Install Electron
```
npm i --save-dev electron@latest,
```

Create the `main.ts` file as the Electron entrance file
```
const { app, BrowserWindow } = require("electron")

// const BUILD_PATH = `file://${__dirname}/../dist/chat-transcriber/index.html`
const BUILD_PATH = "http://localhost:4200"

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		height: 600,
		width: 1100,
		title: "Angular and Electron",
		webPreferences: {
			nodeIntegration: true
		}
	})

	// Load the URL to the index file where the app is. The exis of the Angular's build
	mainWindow.loadURL(BUILD_PATH)

	// Load the Dev Tools when the window opens
	mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit()
	}
})

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
```

### Set up the `packaje.json`
Add the line so that Electron knows where its main file is
```
"main": "electron/main.ts",
```

Add the two commands to make your life easier
```
"electron": "electron .",
"electron-prod": "ng build && electron ."
```

## Requirements for DEV environment
The URL to load from the electron main files is: `http://localhost:4200`.
With this config the app will be live reloading while developing.

## Start the environment
In one terminal execute `npm start` to start the Angular server in `http://localhost:4200`.
In a second terminal execute `npm electron` to start the Electron app in a window.
