const fs = require('fs');
const path = require('path');

module.exports = {
    getCurrentDirectoryBase : () => {
        return path.basename(process.cwd());
    },

    directoryExists : (filepPath) => {
        try {
            return fs.statsSync(filePath).isDirectory();
        } catch (err) {
            return false; 
        }
    }
};