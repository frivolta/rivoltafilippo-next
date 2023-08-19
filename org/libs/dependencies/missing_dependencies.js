const fs = require('fs');
const path = require('path');

const PACKAGE_JSON_PATH = '../../package.json';
const SRC_DIR = '../../apps/rivoltafilippo';

const getAllJsFiles = dir => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = entries.filter(file => !file.isDirectory() && path.extname(file.name) === '.js').map(file => path.join(dir, file.name));
    const folders = entries.filter(folder => folder.isDirectory());
    
    for (const folder of folders) {
        files.push(...getAllJsFiles(path.join(dir, folder.name)));
    }

    return files;
};

const extractDependenciesFromFiles = files => {
    const regexPatterns = [
        /require\(['"]([^'"]+)['"]\)/g,
        /import\s.*\sfrom\s['"]([^'"]+)['"]/g
    ];

    const dependencies = new Set();

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        regexPatterns.forEach(regex => {
            let match;
            while ((match = regex.exec(content)) !== null) {
                if (!match[1].startsWith('.')) {  // To exclude relative paths
                    dependencies.add(match[1].split('/')[0]);  // To only get the main package name, not subimports
                }
            }
        });
    });

    return [...dependencies];
};

const getPackageDependencies = () => {
    const packageJson = require(PACKAGE_JSON_PATH);
    return Object.keys(packageJson.dependencies || {}).concat(Object.keys(packageJson.devDependencies || {}));
};

const findMissingDependencies = () => {
    const allJsFiles = getAllJsFiles(SRC_DIR);
    const fileDependencies = extractDependenciesFromFiles(allJsFiles);
    const packageDependencies = getPackageDependencies();

    const missing = fileDependencies.filter(dep => !packageDependencies.includes(dep));

    return missing;
};

console.log('Missing Dependencies:', findMissingDependencies());
