<template>
    <h1>Contacts</h1>
    <div>
        <ContactTemplate/>
        <ContactAdd/>
    </div>
</template>
<script>
import ContactAdd from '@/components/ContactAdd.vue';
import ContactTemplate from '@/components/ContactTemplate.vue';

export default {
    name: "ContactView",
    components: { ContactTemplate, ContactAdd }
}
</script>
<style>
    
</style>