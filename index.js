var cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello Mendoza, Jean Rhaye");
});

const employeeRoutes = require('./src/routes/employee.routes');

app.use('/api/v1/employees', employeeRoutes);

app.listen(port, () => {
    console.log('Server is listening on port ' + port);
});
