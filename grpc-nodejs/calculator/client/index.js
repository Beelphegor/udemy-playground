const grpc = require('@grpc/grpc-js');
const { CalculatorServiceClient } = require('../proto/calculator_grpc_pb');
const {SumRequest} = require('../proto/sum_pb');
const {PrimesRequest} = require('../proto/primes_pb');
const {AvgRequest} = require("../proto/avg_pb");

function doSum(client) {
    const req = new SumRequest().setN1(7).setN2(5);
    
    client.sum(req, (err, res) => {
        if(err) {
            return console.log(err);
        }
        console.log(`Sum is ${res.getSum()}`);
    })
}

function doPrimes(client) {
    const req = new PrimesRequest().setN(1000000000000066600000000000001);
    
    const call = client.primes(req);

    call.on('data', (res) => {
        console.log(` ${res} `);
    })

    client.close();
}

function doAvg(client) {
    const numbers = [1,2,3,4];
    const call = client.avg((err, req) => {
        if(err) {
            return console.log(err);
        }

        console.log(`AVG result: ${req.getResult()}`);
    })

    numbers.forEach(n => {
        const req = new AvgRequest().setN(n);
        call.write(req);
    })

    call.end();
    
}

function main () {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new CalculatorServiceClient('localhost:50051', creds);

    // doSum(client);
    // doPrimes(client);
    doAvg(client);
}

main();