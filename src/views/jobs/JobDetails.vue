<template>
    <h1>Job details pahe</h1>
    <p>The job id is {{ id }}</p>
</template>


<script>
export default {
    data() {
        return {
            id: this.$route.params.id   
        }
    }
}
</script>

