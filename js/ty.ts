function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  
    return arg;
}
loggingIdentity(["sfsd","sdhbd"]);




function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

var t=getProperty(x, "a"); 
//getProperty(x, "m"); 