const electron = require('electron');
const fs = electron.remote.require('fs');
const path = electron.remote.require('path');
const { sep } = path;
const osHomedir = electron.remote.require('os-homedir');

export const SETTINGS_FILE = `${osHomedir()}${sep}.kombibooth.json`;
export const DEFAULT_SETTINGS = {
  preferences: {
    numberOfPhotos: 3,
    countDownTime: 5,
    intervalBetweenPhotos: 5,
    shouldSavePhotos: false,
    directoryToSavePhotos: `${osHomedir()}${sep}KombiBooth${sep}`,
  },
};

export function install () {
  return writeJSONFile(SETTINGS_FILE, DEFAULT_SETTINGS);
}

export function exists () {
  return fileExists(SETTINGS_FILE);
}

export function save (data) {
  return writeJSONFile(SETTINGS_FILE, data);
}

export function load () {
  return readJSONFile(SETTINGS_FILE);
}

function writeJSONFile (file, data) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(file, JSON.stringify(data), {flags: 'w'}, (err) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      });
    } catch (parseError) {
      return reject(parseError);
    }
  });
}

function readJSONFile (file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        return reject(err);
      }

      try {
        return resolve(JSON.parse(data.toString()));
      } catch (parseError) {
        return reject(parseError);
      }
    });
  });
}

function fileExists (file) {
  return new Promise((resolve) => {
    fs.stat(file, (err, stats) => {
      if (err) {
        return resolve(false);
      }

      return resolve(!!stats);
    });
  });
}
