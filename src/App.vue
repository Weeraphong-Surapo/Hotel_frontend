<script>
import Loader from './components/Loader.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default{
  components:{
    Loader,
    Footer,
    Header
  }
}
</script>

<template>
  <div class="container-xxl bg-white p-0">
    <Loader></Loader>
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>
