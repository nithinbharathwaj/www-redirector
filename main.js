const express = require('express');
const app = express();
const port = 3000; // or any port you prefer

app.get('*', (req, res) => {
    const wwwDomain = `https://www.${req.headers.host}${req.url}`;
    return res.redirect(301, `${protocol}://${wwwDomain}`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
