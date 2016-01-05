var net = require('net');
var server = net.createServer(function(connection){
    console.log('client connected');
    connection.on('end', function(){
        console.log('client disconnected');
    });
    connection.write('Muscular stud become live stock!\r\n');
    connection.pipe(connection);
});
server.listen(7923, function(){
    console.log('server is linstening');
});