function rohit(n, ar) { 

let socks = {};
let count = 0;
for (let item of ar) {
socks[item] = socks[item] + 1 || 1;
  if (socks[item] % 2 == 0) {
    count += 1;
  }
}
return count;
}



