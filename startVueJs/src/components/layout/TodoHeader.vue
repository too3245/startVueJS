<template>
    <header>
        <h1>{{title}}</h1>
        <Button @toggle-add-task= "$emit('toggle-add-task')" :text="showAreaAddTask ? 'Close' : 'Add Task'" :color="showAreaAddTask ? 'red'  : 'green'"/>
    </header>
</template>

<script>
import Button from '../anyComponent/Button.vue'
export default {
    name: 'TodoHeader',
    props:{
        title:{
            type: String,
        },
        showAreaAddTask: Boolean
    },
    setup() {
        
    },
    components:{
        Button
    },
    methods:{
        
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>