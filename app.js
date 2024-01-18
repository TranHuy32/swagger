const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml'); // Thay đổi đường dẫn nếu bạn có file swagger.yaml

const app = express();
const port = 8888;

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
