<template>
    <h2>Test</h2>
    <div class="cartes">
        <div v-for="contact in contacts" :key="contact.name">
            <CardContact :contact="contact"/>
        </div>
    </div>
</template>
<script>

import CardContact from '@/components/CardContact.vue'
// import ContactAdd from '@/components/ContactAdd.vue'

export default {
    name:'ContactTemplate',

    components:{
        CardContact,
        // ContactAdd,
    },

    // emits:[
    //     'contacts'
    // ],

    computed:{
        contacts(){
            return this.$store.state.contacts
        }
    }
}
</script>
<style>
    
</style>