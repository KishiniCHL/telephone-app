<template>
    <h1>Contacts</h1>
    <div>
        <ContactTemplate/>

        <button @click="showModal = true">Add a contact</button>
        <ContactAdd v-show="showModal" @closeModal="showModal = false"/>
    </div>
</template>
<script>
import ContactAdd from '@/components/ContactAdd.vue';
import ContactTemplate from '@/components/ContactTemplate.vue';

export default {
    name: "ContactView",
    components: { ContactTemplate, ContactAdd },

    data() {
        return {
            showModal:false,
        }
    },
}
</script>
<style>
    
</style>