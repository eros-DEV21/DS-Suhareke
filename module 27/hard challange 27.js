function car(title, best, hp){
    this.title=title;
    this.best=best;
    this.hp=hp;
}
this.PrintSummary = function () {
    console.log( '${this.title} by ${this.author} has ${this.pages.');
};
const myBook = new book( 'Audi', 'RS6', 600);
myBook.PrintSummary();