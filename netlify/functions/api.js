const express = require('express');
const app = express();
import serverless from "serverless-http";

app.get('*', (req, res) => {
    const wwwDomain = `https://www.${req.headers.host}${req.url}`;
    return res.redirect(301, `${protocol}://${wwwDomain}`);
});

export const handler = serverless(app);
