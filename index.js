class Greeter {
   /**
    * @public @param text
    */
    text
    msg

    /**
     * 
     * @param {{
     *  elemId?: string;
     * }} 
     */
    // constructor (param) {
    constructor ({elemId}) {
        console.log('I ran first', elemId)
    }

    printsMsg () {
        console.log(this.text)
    }

    // getText (text) {
    //     this.printsMsg(text)
    // }

    getText () {
        this.printsMsg()
    }

    // setter
    set message (msg) {
        this.msg = msg
    }

    // getter
    get message () {
        return this.msg
    }
}

const greetInit = new Greeter({elemId: 'DUHGVYUDGBJHD'})

// greetInit.getText("Print Hello World")

greetInit.text = "Print Hello World"
greetInit.message = "Greet the world for me"
greetInit.getText()


console.log("Message::", greetInit.message);

// Class Inheritance

class SayHello extends Greeter {
    constructor () {
        super({})
    }

    greetNow () {
        console.log("Hello World");
    }

    // setter
    set message (msg) {
        this.msg = msg
    }

    // getter
    get message () {
        console.log("MSG:::", this.msg)
    }


}

const sayHelloInit = new SayHello()
sayHelloInit.greetNow()

sayHelloInit.message = "Greeting from the child class"

console.log("sayHelloInit.message", sayHelloInit.message);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
