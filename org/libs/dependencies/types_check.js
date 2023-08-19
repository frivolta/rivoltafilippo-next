const fs = require('fs');
const path = require('path');

const PACKAGE_JSON_PATH = '../../package.json';

const getDependenciesWithoutTypes = () => {
    const packageJson = require(PACKAGE_JSON_PATH);
    
    // Gather all dependencies and devDependencies
    const allDeps = [...Object.keys(packageJson.dependencies || {}), ...Object.keys(packageJson.devDependencies || {})];

    const depsWithoutTypes = allDeps.filter(dep => {
        // Check if the library itself doesn't have TypeScript definitions
        const hasOwnTypes = fs.existsSync(path.join('./node_modules', dep, 'index.d.ts'));

        // Check if @types for the library exists
        const hasAtTypes = fs.existsSync(path.join('./node_modules', '@types', dep));

        return !hasOwnTypes && !hasAtTypes;
    });

    return depsWithoutTypes;
};

console.log('Libraries missing TypeScript types:', getDependenciesWithoutTypes());
