const electron = require('electron');
const path = require('path');
const fs = require('fs');

class HistoryStore {
    constructor(props) {
        const userDataPath = (electron.app || electron.remote.app).getPath('documents');
        this.path = path.join(userDataPath, 'pacientes/' + props.configName + '.json');
        console.log(this.path);
        this.data = parseDataFile(this.path, props.defaults);
    }

    get(key = null) {
        return key !== null ? this.data[key] : this.data;
    }

    set(key, val) {
        this.data[key] = val;
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
}
function parseDataFile(filePath, defaults) {
    try {
        return JSON.parse(fs.readFileSync(filePath));
    } catch (err) {
        return defaults;
    }
}

module.exports = HistoryStore;
