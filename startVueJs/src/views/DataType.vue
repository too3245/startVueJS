<template>
    <div>
        <h1>데이터의 속성과 Methods</h1>
        <div>{{count}}</div>
        <div>
            <button @click="count">카운트 증가.</button>
        </div>
        <div>
            <button @click="debounceClick">500ms마다 카운트 증가.</button>
        </div>
    </div>
</template>

<script>
import VueLodash from 'vue-lodash'
import lodash from 'lodash'

export default {
    name: "DataType"
    ,
    props: {
        title: String
    },
    data(){
        return{
            count: 0
        }
    },
    created(){
        this.debounceClick = lodash.debounce(this.addCount,500);
    },
    setup() {
    },
    mounted(){
        console.log(this.count)
    },
    unmounted(){
        this.debounceClick.cancel()
    },
    methods:{
        //디바운싱: 연이어 호출되는 함수들 중 마지막 함수만 호출하도록 하는 것
        /* addCount: lodash.debounce(function() {
            this.count++
        },500) */
        addCount(){
            this.count++
        } 
    },
    use(){
        VueLodash, { name: 'custom' , lodash: lodash }
    }
}
</script>