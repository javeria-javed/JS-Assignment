function powering(b,p){
    this.base=b;
    this.pawer=p;
}

powering.prototype.power = function () {
    for (let i = 1 ; i <this.pawer ; i++){
    this.base *=this.base ;
    }
return this.base;
};

const findingpower = new powering (4,3);
console.log (" using my own prototype, calculating 4 raised to p0wer 3: " + findingpower.power());

