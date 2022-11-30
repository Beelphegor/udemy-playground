const {SumResponse} = require("../proto/sum_pb");
const {PrimesResponse} = require('../proto/primes_pb');
const {AvgResponse} = require('../proto/avg_pb');

exports.sum = (call, callback) => {
    console.log("calculating sum");
    const n1 = call.request.getN1();
    const n2 = call.request.getN2();
    const res = new SumResponse().setSum(n1+n2);
    callback(null, res);
}

exports.primes = (call, _) => {
    console.log("Decomposing to primes!");
    let n = call.request.getN();
    let prime = 2;
    const res = new PrimesResponse();

    while(n > 1) {
        if(n%prime === 0) {
            res.setResult(prime);
            call.write(res);
            n = n / prime;
        } else {
            prime = prime + 1;
        }
    }

    call.end();
}

exports.avg = (call, callback) => {
    console.log('avg invoked');
    let avg = 0;
    let numbers = [];

    call.on('data', req => {
        numbers.push(req.getN());
        avg = numbers.reduce((pv, cv)=> {return pv+cv},0)/numbers.length;
    })

    call.on('end', () => {
        const res = new AvgResponse().setResult(avg);
        callback(null, res);
    })
}