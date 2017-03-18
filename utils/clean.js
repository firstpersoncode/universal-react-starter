const fs = require('node-fs-extra');
const path = require('path');

fs.remove(path.join(process.cwd(), 'client'), () => {
  setTimeout(() => {
    fs.copy(path.join(process.cwd(), 'utils/starting'), path.join(process.cwd(), 'client'), () => {
      console.log('Happy coding !');
      fs.remove(path.join(process.cwd(), 'utils/starting'));
      fs.remove(path.join(process.cwd(), 'utils/clean.js'));
    })
  }, 1000)
});
