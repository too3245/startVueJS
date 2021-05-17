<template>
    <div id="todo-list-app">
        <ol>
            <li v-for="item in groceryList" v-bind:todo="item" v-bind:key="item.id">{{item.text}}</li>
        </ol>
    </div>   
</template>


<script>


export default {
    name: 'TodoItem',
    props:['todo'],
    data(){
        return{
            groceryList: [
                {id: 0, text: "채소"},
                {id: 1, text: "치즈"},
                {id: 2, text: "고기"}
            ]
        }
    },
    mounted(){
  },
    setup(props) {
    console.log(props);
  },
}
</script>