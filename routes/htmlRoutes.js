const path = require('path');

// HTML page routing
module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // Catch-all to default to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}