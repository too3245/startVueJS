<template>
    <header>
        <h1>{{title}}</h1>
        <Button text="Add Task" color="green"/>
        <Button text="Add Task" color="green"/>
        <Button text="Add Task" color="green"/>
    </header>
</template>

<script>
import Button from '../anyComponent/Button.vue'
export default {
    name: 'TodoHeader',
    props:{
        title:{
            type: String,
        }
    },
    setup() {
        
    },
    components:{
        Button
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