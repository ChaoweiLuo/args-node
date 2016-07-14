
/**
 * parse the node.js args
 * @params argv {Array} arguments
 * @params setArg {function} set value with a key 
 * @returns {object}
 */
function parse(argv,setArg) {
    if(typeof argv === 'function' && typeof setArg != 'function'){
        setArg = argv;
        argv = (process && process.argv)||[];
    }else if(typeof setArg != 'function'){
        setArg = setArgs;
    }
    var args = {};
    argv = argv || (process && typeof process.argv == 'Array' )
    argv.reduce(function(prev,cur,index,arr){
        if(prev && prev.indexOf('-')>-1){
            var key = prev.replace(/\-/g,"");
            var value = true;
            if(key.indexOf('=')>-1){
                var keys = key.split('=');
                if(keys.length==2){
                    key = keys[0];
                    value = keys[1];
                }
            }
            if(cur.indexOf('-')==-1){
                value = cur;
            }
            setArg(args,key,value);
        }
        if(index === arr.length-1 && cur && cur.indexOf('-')>-1){
            var key = cur.replace(/\-/g,'');
            args[key] = true;
            setArg(args,key,true);
        }
        return cur;
    });

    function setArgs(args,key,value){
        if(args.hasOwnProperty(key)){
            var arg = args[key];
            if(arg instanceof Array && arg.indexOf(value)==-1){
                arg.push(value);
            }else if(arg != value){
                var arr = args[key] = [];
                arr.push(arg);
                arr.push(value);
            }
        }else{
            args[key] = value;
        }
    }
    return args;
}

if(module){
    module.exports = parse;
}