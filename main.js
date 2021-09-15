const app = new Vue({
    el:"#app",
    data:{
        nombre:"",
        cargando:true,
    },

    mounted() {
        this.cargando = false
    },

    computed:{
        link(){
            return "https://wa.me/573144049124?text=Hola *M SOLUTIONS TECH* mi nombre es *" + this.nombre + "* , estoy interesado en saber sobre *" + this.opcion + "* para que me puedas contactar mi numero es:  " + this.telefono + " ."
        }

    }

})