const fs = require('node-fs-extra');
const path = require('path');
fs.remove(path.join(process.cwd(), 'client'), () => {
  setTimeout(() => {
    fs.copy(path.join(process.cwd(), 'utils/starting/client'), path.join(process.cwd(), 'client'), () => {
      console.log('cleaning "/client" done !');
  }, 1000)
})
fs.remove(path.join(process.cwd(), 'server'), () => {
  setTimeout(() => {
    fs.copy(path.join(process.cwd(), 'utils/starting/server'), path.join(process.cwd(), 'server'), () => {
      console.log('cleaning "/server" done !');
  }, 1000)
})
