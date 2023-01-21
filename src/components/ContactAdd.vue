<template>
    <div class="modal-overlay" @click="$emit('closeModal')">
        <div class="modal" @click.stop>
            <form @submit.prevent="contactAdd">
                <input 
                    type="text" 
                    placeholder="Name..."
                    v-model="contactForm.name"
                    >
                    <!-- <span error="false" class="error">Le name doit avoir au moins 3 caractères</span> -->
                <input 
                    type="number"
                    placeholder="Numéro..."
                    v-model="contactForm.numero"
                    @input="limitNum"
                    >
                <button type="submit">Ajouter</button> 
                <div class="close">
                    <button @click="$emit('closeModal')">close</button>
                </div>       
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:'ContactAdd',

    
    data() {
        return {
        contactForm:[
        {
            name:'',
            numero:'null'
        }
    ]
        }
    },

    methods:{
        contactAdd(){
            if(this.contactForm.name =="" || this.contactForm.numero!=10)return

            if(this.contactForm.numero.length< 10){
                this.error = true
                return
            }

            // if(this.contacts.find(contact => contact.name===this.contactForm.name)) return


            this.$store.commit('contactAdd', this.contactForm)
            this.contactForm={
                name:"",
                age:null
            }
        },
        limitNum(event){
            if(event.target.value.toString().length >= 10 ){
                this.contactForm.numero = parseInt(event.target.value.toString().substring(0,10))
            }
        }

    }
}
</script>
<style>

.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}
.close {
    margin: 10% 0 0 16px;
    cursor: pointer;
}
    
</style>