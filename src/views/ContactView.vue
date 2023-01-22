<template>

    <section id="theContactList">
        <div class="contacts_container">
            <div class="nav_contact">
                <h1>Contacts</h1>
                <button @click="showModal = true">Add a contact</button>
            </div>
            <div>
                <ContactAdd v-show="showModal" @closeModal="showModal = false"/>
                <ContactTemplate/>
            </div>

          
        </div>
    </section>
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
<style scoped>
    #theContactList{
        display: flex;
        justify-content: center;

    }

    .contacts_container{
        width: 65vh;
        min-height: 80vh;
        background-color: #E8EFFF;
        
    }
    .nav_contact{
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 14vh;
    }
    
</style>