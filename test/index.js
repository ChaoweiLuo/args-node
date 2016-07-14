
var assert = require("assert");
var parse = require('..');

describe("main", function(){
    it("default setArg",function (done) {
        var arg = '-a -b -c 1 -b 2 -b 3 -d';
        var args = parse(arg.split(' '));
        assert.equal(args.a,true);
        assert.equal(args.b.length,3);
        assert.equal(args.d,true);
        assert.equal(args.c,1);
        typeof done ==='function' && done();
    });
    it('custom setArg',function(done){
        
        var arg = '-a -b -c 1 -b 2 -b 3 -d';
        var args = parse(arg.split(' '),function(ags,key,value){
            ags[key]=value;
        });

        assert.equal(args.d,true);
        assert.equal(args.a,true);
        assert.equal(args.c,1);
        assert.equal(args.b,3);
        assert.notEqual(args.b,2);
        typeof done ==='function' && done();
    })
});