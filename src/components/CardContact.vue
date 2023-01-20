<template>
    <div>
        <span>{{ contact.name }}</span>
        <span>{{ contact.numero }}</span>
    </div>
</template>
<script>
export default {
    name:'CardContact',
    props:[
        'contact'
    ]
}
</script>
<style>
    
</style>