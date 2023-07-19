document.addEventListener('alpine:init', () => {
    
    Alpine.data('greetWidget', function(){

        return {
            name:'',
            message:'',
            greetMe(){

                const greetingMessage = greet(this.name);
                // console.log(greetingMessage);

               this.message = greetingMessage;
    
               setTimeout(() => {
                this.message = '',
                this.name = ''
               }, 3000);
            },
        }
    });
})