class Greet{
    constructor(name){
        this.name = name;
    }

    say(){
        console.log('Hello ' + this.name);
    }
}

(new Greet('Mateusz')).say();