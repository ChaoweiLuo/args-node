# args-node
parse for node.js arguments

### git
[github](https://github.com/ChaoweiLuo/args-node)

### install 
```bash
npm install args-node
```

### how to use
```javascript
var parse = require('args-node');
parse(args=process.argv.slice(2)) //= {Object}
parse(args='-a -b -c 1 -b 2 -b 3 -d'.split(' ')) //={a:true,b:[true,'2','3'],c:'1',d:true}
//you can set argument setArg such as 
parse(args='-a -b -c 1 -b 2 -b 3 -d'.split(' '),function(args,key,value){
    args[key]=value;
});// ={a:true,b:'3',c:'1',d:true}

```
