function greet(Name) {
    return ("Hello, " +Name);}
  console.log(greet("Valentia"));

document.addEventListener ('alphine:init', () => {
    Alphine.data("greetingApp", () => ({
        name: '',
        greeting:"",
        sayHello() {
            this.greeting = greet(this.name);
        }
    }));
});