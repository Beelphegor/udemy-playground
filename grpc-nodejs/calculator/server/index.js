const grpc = require('@grpc/grpc-js');
const serviceImpl = require('./server_impl');
const { CalculatorServiceService } = require('../proto/calculator_grpc_pb');

function cleanup (server) {
    console.log('Cleanup');

    if (server) {
        server.forceShutdown();
    }
}

function main () {
    const server = new grpc.Server();
    const addr = 'localhost:50051';

    process.on('SIGINT', () => {
        console.log('interrupt signal');
        cleanup(server);
    })
    
    server.addService(CalculatorServiceService, serviceImpl);

    server.bindAsync(addr, grpc.ServerCredentials.createInsecure(), (err, _) => {
        if(err) {
            return cleanup(server);
        }
        server.start();
    });
    console.log('Listening on: ', addr);
}

main();