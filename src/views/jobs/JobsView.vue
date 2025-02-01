<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{ name: 'JobDetails', params: {id: job.id}}">
            <h1>{{ job.title }}</h1>
        </router-link>
    </div>
</template>


<script>
export default {
    data () {
        return {
            jobs: [
                {title: 'UX Designer', id: 1, details: "lorem"},
                {title: 'UX Developer', id: 2, details: "lorem"},
                {title: 'Backend SWE', id: 3, details: "lorem"},
            ],
        }
    }
}

</script>

<style>

</style>