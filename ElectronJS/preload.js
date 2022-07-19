const { Titlebar, Color } = require('electron-customtitlebar-21425');
const path = require('path');

let titlebar;

window.addEventListener('DOMContentLoaded', () => {
  titlebar = new Titlebar({
    backgroundColor: Color.fromHex("#388e3c"),
    itemBackgroundColor: Color.fromHex("#121212"),
    svgColor: Color.WHITE,
    //icon:
    //menu: null // = do not automatically use Menu.applicationMenu
  })

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

