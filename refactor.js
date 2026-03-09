const fs = require("fs");
const path = require("path");

const getAllFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith(".js")) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(path.join(__dirname, "src"));
let changedCount = 0;

files.forEach(file => {
    if (file.includes("App.js")) return;

    let content = fs.readFileSync(file, 'utf8');

    if (content.includes("axios.get")) {
        // 1. Add useContext import if missing
        if (!content.includes("useContext")) {
            content = content.replace(/import React(, { useState, useEffect })? from ['"]react['"];?/g, "import React, { useState, useEffect, useContext } from 'react';");
        }

        // 2. Import RefreshContext
        if (!content.includes("RefreshContext")) {
            const depth = file.split(path.sep).length - file.split(path.sep).indexOf("src") - 2;
            const prefix = depth === 0 ? "./" : "../".repeat(depth);
            content = `import { RefreshContext } from "${prefix}App";\n` + content;

            // 3. Inject useContext hook inside component
            // Find the start of the component body
            content = content.replace(/(const [A-Z][a-zA-Z0-9_]*\s*=\s*\([^)]*\)\s*=>\s*{)/, "$1\n  const refreshKey = useContext(RefreshContext);");

            // 4. Update useEffect dependencies
            // Match useEffect(..., [deps]) and inject refreshKey
            content = content.replace(/(useEffect\([^,]+,\s*\[)(.*?)(\]\s*\))/g, (match, p1, p2, p3) => {
                const newDeps = p2.trim() ? p2 + ", refreshKey" : "refreshKey";
                return p1 + newDeps + p3;
            });

            fs.writeFileSync(file, content);
            changedCount++;
        }
    }
});

console.log("Updated files:", changedCount);
