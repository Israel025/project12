const foo = {
    color: "red",
    getColor: function(){
        return this.color;
    }
}
console.log(foo.getColor());