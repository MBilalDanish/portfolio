<template>
    <div>
        <i class="fas fa-star" :class={active:isActive(1)}></i>
        <i class="fas fa-star" :class={active:isActive(2)}></i>
        <i class="fas fa-star" :class={active:isActive(3)}></i>
        <i class="fas fa-star" :class={active:isActive(4)}></i>
        <i class="fas fa-star" :class={active:isActive(5)}></i>
    </div>
</template>
<script>
export default {
    props:{
        rating:{
            type:Number
        }
    },
    methods: {
        isActive(index){
            return index<=this.rating;
        }
    },

}
</script>
<style scoped>
.active{
    color: #ffb33e;
}
</style>