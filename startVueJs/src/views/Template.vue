<template>
    <div>
        <h2>기본 템플릿</h2>
        <div>
            <h5>보간법(Interpolation)</h5>
            <span>메세지: {{ msg }}</span>
            <span v-once>결코 변하지 않을 것입니다.: {{ msg }}</span>
        </div>
        <div>
            <p>이중 중괄호 사용: {{ rawHtml }}</p>
            <p>v-html 디렉티브 사용: <span v-html="rawHtml"></span></p>
        </div>
        <div>
            <div v-bind:id="dynamicId">{{ styleHtml }}</div>
            <button v-bind:disabled="isBtnDisabled">버튼</button>
        </div>
        <div>
            <div>
                {{number +1}} {{ok ? 'Yes' : 'NO'}} {{message.split('').reverse().join('')}}
            </div>
            <div>
                <div v-bind:id="'list-'+id">글자색은?</div>
            </div>
            <div>
                <h5>아래는 실제로 동작하지 않습니다.</h5>
                <div>{ {var a = 1} }</div>
                <div>{ {if(ok){return message} }</div>
            </div>
            <div>
                <p v-if="seen">이제 저를 볼 수 있어요.</p>
            </div>
            <div>
                <a v-bind:href="url">...</a>
            </div>
            <div>
                <a v-on:click="doSomething">...</a>
            </div>
            <div>
                <a v-bind:[attribueteName]="url">...</a>
            </div>
            <div>
                <a v-on:[eventName]="doSomething">...</a>
            </div>
            <div>
                <form v-on:submit.prevent="onSubmit">...</form>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            msg : '보이는 메세지',
            rawHtml: `<span style="color:red">this should be red</span>`,
            dynamicId:'dynamicId',
            styleHtml:'변하는 색',
            isBtnDisabled:true,
            number: 13,
            ok : true,
            message: 'okMansom',
            id: 'test',
            seen:true,
            url:"/about"
        }
    }
}
</script>

<style>
#dynamicId{
    color: #dc3545;
}
#list-test{
    color: #0dcaf0;
}
</style>