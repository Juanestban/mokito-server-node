const fs = require('fs')

function parser(currentPath, parsed) {
  fs.readFile(currentPath, (err, html) => {
    const html_string = html.toString()
    const matchKey = html_string.match(/[^\{\}]+(?=\})/g)
    const fullname = 'Juan Esteban'

    try {
      matchKey.forEach((matched) => {
        const val = eval(matched)
        const html_parsed = html_string.replace(`{${matched}}`, val)
        parsed(html_parsed)
      })
    } catch {
      console.error("[+] matchKey hasn't any variable to find and replace")
      parsed(html)
    }
  })
}

module.exports.parser = parser
