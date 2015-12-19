const dialog = require('remote').require('dialog');

export function openDirectoryDialog () {
  return new Promise((resolve, reject) => {
    dialog.showOpenDialog({
      properties: [
        'openDirectory',
      ],
    }, (directory) => {
      if (directory) {
        return resolve(directory.shift());
      }

      return reject();
    });
  });
}
