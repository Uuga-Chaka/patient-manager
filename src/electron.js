const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;


const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

//Manejador local de la base de datos
const HistoryStore = require('./HistoryStore');

const historyStore = new HistoryStore({
    configName: 'PatientsDataBase',
    defaults: {
        windowBownds: {
            width: 800,
            height: 600
        }
    }
})

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        webPreferences: {
            nodeIntegration: true
        }
    });
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    mainWindow.on('closed', () => mainWindow = null);

    //Abrir herramientas de desarrollador
    mainWindow.webContents.openDevTools();
    //Esperar a que la app termine de cargar
    mainWindow.webContents.on('did-finish-load', () => {
        //Cargar la información necesaria en la aplicación
        mainWindow.webContents.send('load-patient-data', historyStore.get());
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

/**
 * Setear elemento de la base de datos ubicada en los documentos de usuario
 */
ipc.on('set', (event, args) => {
    historyStore.set(args.key, args.value);
})

/**
 * Seleccionar el elemento de la base de datos ubicada en los documentos de usuario
 */
ipc.handle('get', (event, arg) => {
    const value = historyStore.get(arg);
    return value;
})
