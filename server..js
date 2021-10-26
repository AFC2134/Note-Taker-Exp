const express = require('express');
const app = express();





app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});