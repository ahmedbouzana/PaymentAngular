const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/PAYMENTANGULAR'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/PAYMENTANGULAR/index.html'));});
app.listen(process.env.PORT || 8080);