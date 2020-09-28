<template>
    <div>
      {{testfromZong}}
      {{testfromA}}
      <br>
      <button @click="updateZong('zong')">update testfromZong</button>
      <button @click="updateA('a')">update testfromA</button>
    </div>
</template>

<script>
    import {getBaseCategoryList,getBanners,getFloors} from "http";

    import {mapState,mapActions} from 'vuex'
    export default {
        name: "test",
        computed:{
          ...mapState({
            testfromZong:(state)=>{return state.test},
            testfromA:(state)=> {return state.a.test}
          }),
        },
        methods:{
          ...mapActions(['updateZong','updateA'])
        },
        async created(){
            const body = await getBaseCategoryList()
          const body1 = await getBanners()
          const body2 = await getFloors()
            console.log(body,body1,body2);
        }
    }
</script>

<style scoped>

</style>