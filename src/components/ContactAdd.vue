<template>
    <div>
        <form @submit.prevent="contactAdd">
            <input 
                type="text" 
                placeholder="Name..."
                v-model="contactForm.name"
                >
                <!-- <span v-if="contactForm.name.length < 3 && error" class="error">Le name doit avoir au moins 3 caractères</span> -->
            <input 
                type="number"
                placeholder="Numéro..."
                v-model="contactForm.numero"
                >
            <button type="submit">Ajouter</button>        
        </form>
        
        
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
            // if(this.contactForm.name =="" || this.contactForm.age==null)return

            // if(this.contacts.find(contact => contact.name===this.contactForm.name)) return


            this.$store.commit('contactAdd', this.contactForm)
            this.contactForm={
                name:"",
                age:null
            }
        }

    }
}
</script>
<style>
    
</style>