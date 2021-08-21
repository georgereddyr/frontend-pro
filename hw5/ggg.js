let sum = (...args) => {
    if(args.length === 0) {
        return 0;
    }
    else {
     return args[0] + sum(...args.slice(1));
    }
};

console.log( sum(1, 2, 3, 4, 5));