const fs = require('node-fs-extra');
const path = require('path');

fs.remove(path.join(process.cwd(), 'client/src'), () => {
  setTimeout(() => {
    fs.copy(path.join(process.cwd(), 'utils/starting'), path.join(process.cwd(), 'client/src'), () => {
      console.log('Happy coding !');
      fs.remove(path.join(process.cwd(), 'utils/starting'));
    })
  }, 1000)
});
