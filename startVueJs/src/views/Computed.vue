<template>
    <div>
        <h1>Computed 속성과 Watch</h1>
        <div id="computed-basic">
            <p> 출판된 책: </p>
            <span>{{ author.books.length > 0 ? '있음' : '없음' }}</span>
        </div>
        <div>
            <p> 출판된 책: </p>
            <span>{{ publishedBooksMessage }}</span>
        </div>
        <div>
            <p>시작 시간:</p>
            <span>{{now}}</span>
        </div>
        <div>
            <p>이름 작성:</p>
            <div><input  v-model="fullName" /></div>
            <div>{{ fullName }}</div>
        </div>
        <div id="watch-example">
            <p>
                예/아니오 질문을 물어보세요.
                <input v-model="question" />
            </p>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            author:{
                name:'존 윈',
                books:[
                    '뷰2- 목차 설명',
                    '뷰3- 기초 설명',
                    '뷰4- 완벽 익히기'
                ]
            },
            firstName:'',
            lastName:'',
            question:'',
            answer:'질문은 보통 물음표를 포함합니다. :-)'
        }
    },
    created(){
        this.fullName = 'John Doe'
    },
    setup() {
        
    },
    watch:{
        question(newQuestion,oldQuestion){
            if(newQuestion.indexOf('?') > -1){
                this.getAnswer()
            }
        }
    },
    methods:{
        getAnswer(){
            this.answer = '생각중...'
            axios.get('https://yesno.wtf/api')
          .then(response => {
            this.answer = response.data.answer
          })
          .catch(error => {
            this.answer = '에러! API에 닿지 못했습니다. ' + error
          })
        }
    },
    computed:{
        publishedBooksMessage(){
            return this.author.books.length > 0 ? '있음' : '없음'
        },
        now(){
            return Date.now()
        },
        fullName:{
            data(){
                return{
                    firstName:'',
                    lastName:''
                }
            },
            get(){
                return this.firstName + ' ' + this.lastName
            },
            set(newValue){
                const names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length -1]
                console.log(this.firstName + ' ' + this.lastName)
            }
        },
        getFullName(){
            console.log(this.firstName + ' ' + this.lastName)
            return this.firstName + ' ' + this.lastName
        }
    },
}
</script>