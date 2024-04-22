const config = require('config');
const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./startups/routes'); 
require('./startups/db');


app.use(cors());


routes(app);

if(!config.get('jwtPrivateKey')){
    console.error('fatal error: jwtprivatekey is not set')
    process.exit(1);
}
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on port ${port}...`))
