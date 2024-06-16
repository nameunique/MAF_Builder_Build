const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const corsOptions = {
    origin: "http://127.0.0.1:8000",
};

app.use(cors(corsOptions));
app.use(express.static(path.join(path.join(__dirname), 'MAF_Builder_Unity_Build')));

app.listen(8080, () => {
    console.log('Server has started! At http://localhost:8080');
});
