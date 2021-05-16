<template>
    <div id="todo-list-app2">
        <ol>
            <todo-item v-for="item in groceryList" v-bind:todo2="item" v-bind:key="item.id"></todo-item>
        </ol>
    </div>   
</template>


<script>


export default {
    name: 'TodoItem',
    props:['todo2'],
    data(){
        return{
            groceryList: [
                {id: 0, text: "채소"},
                {id: 1, text: "치즈"},
                {id: 2, text: "고기"}
            ]
        }
    },
    template:`<li> {{ todo2.text }} </li>`
}
</script>