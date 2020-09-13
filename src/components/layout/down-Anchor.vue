<template>
<div>
    <div class="scrollTo-Padding">
        <div class="scrollToContainer">
            <slot name="anchor"></slot>
        </div>
        <div class="scrolltoText"> <h5>Scroll to show more</h5> </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.scrollTo-Padding{
    padding-top: 3em;
    padding-bottom: 3em;
}
.scrollToContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
        .scrolltoShow{
            background-color: #FF6600;
            height: 46px;
            width: 43px;
            cursor: pointer;
            transform: rotate(43deg);
            transition: all .2s ease-in-out;
                i{
                    transform: rotate(317deg);
                    padding: 12px;
                    color: #fff;
                    font-size: 1.5rem;
                }
        }
        .scrollto-hoverArrows{
            display: flex;
            justify-content: center;
            color: white;
            font-size: 1.2rem;
        }
}
.scrolltoText{
    margin-top: 25px;
    color: #fff;
    text-align: center;
}
</style>
