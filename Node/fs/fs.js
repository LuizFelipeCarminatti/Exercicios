const fs = require('fs').promises
const path = require('path')

fs.readdir(path.resolve(__dirname)) // ler as pasta atual
    .then(files => console.log(files))
    .catch(error => console.log(error))

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir)
}

async function walk(files, rootDir) {
    for (const file of files) {
        const fileFullPath = path.resolve(rootDir, file)
        const stats = await fs.stat(fileFullPath) // se é diretorio

        if(/\.git/g.test(fileFullPath)) continue
        
        if(/node_modules/g.test(fileFullPath)) continue
        
        if (stats.isDirectory()) {
            readdir(fileFullPath)
            continue
        }
        
        if(!/\.js/g.test(fileFullPath)) continue

        console.log(fileFullPath)
    }
}

readdir('./')