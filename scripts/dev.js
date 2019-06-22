const nodemon = require('nodemon');
const exec = require('child_process').execSync;

nodemon({
    watch: "./backend/*",
    script: "./backend-dist/backend/main.js",
    ext: "ts"
});

nodemon.on('restart', (done) => {
    exec('npm run build-backend');
});
