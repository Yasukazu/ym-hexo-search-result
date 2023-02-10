const fs = require('hexo-fs')
const path = require('path')
function insertSearchResult (args) {
  return Promise.all([fs.readFile(path.join(__dirname, './client.js')),
    fs.readFile(path.join(__dirname, './style.css'))]).then(contents => {
    return '<div id="plugin-search-result"></div>' +
      '<script>(function() {' + contents[0] + '\ninit()})()</script>' +
      '<style>' + contents[1] + '</style>'
  })
}

hexo.extend.tag.register('ym_search_result', insertSearchResult, {
  async: true
})
