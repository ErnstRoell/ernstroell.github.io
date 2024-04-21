<template>
    <h1>My Projects</h1>
    <div v-for="project in projects" :key="project.id">
        <router-link :to="{ name: 'ProjectDetails', params: {id: project.id}}">
            <h1>{{ project.title }}</h1>
        </router-link>
    </div>
</template>


<script>
export default {
    data () {
        return {
            projects: [
                {title: 'Project 1', id: 1, details: "Cool project 1"},
                {title: 'Project 2', id: 2, details: "Cool project 2"},
            ],
        }
    }
}

</script>

<style>

</style>