
var express = require('express'); // Get the module
var app = express(); // Create express by calling the prototype in var express
const port = 3000;
app.use('/views', express.static('views'));
app.listen(port, () => console.log(`Listening on port ${port}`));
app.route({
    method: 'GET',
    path: '/views',
    handler: function (request, reply) {
        Request.get('http://192.168.1.153:56147/cupones_durango/cdgo/Giros/listaGiros', function (error, response, body) {
            if (error) {
                throw error;
            }

            const data = JSON.parse(body);
            console.log(data);
            reply.view('index.html', { result: data });
        });
    }
});

 
