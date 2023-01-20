<template>
    <div>
        <h1>Clavier</h1>
        <ClavierTemplate/>
    </div>
</template>
<script>
import ClavierTemplate from '@/components/ClavierTemplate.vue';

export default {
    name: "ClavierView",
    components: { ClavierTemplate }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: #f1f6ff;
}
</style>