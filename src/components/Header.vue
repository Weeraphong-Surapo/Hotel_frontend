<template lang="">
        <!-- Header Start -->
        <div class="container-fluid bg-dark px-0">
            <div class="row gx-0">
                <div class="col-lg-3 bg-dark d-none d-lg-block">
                    <a href="index.html" class="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                        <h1 class="m-0 text-primary text-uppercase">Hotelier</h1>
                    </a>
                </div>
                <div class="col-lg-9">
                    <div class="row gx-0 bg-white d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-2 me-4">
                                <i class="fa fa-envelope text-primary me-2"></i>
                                <p class="mb-0">info@example.com</p>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center py-2">
                                <i class="fa fa-phone-alt text-primary me-2"></i>
                                <p class="mb-0">+012 345 6789</p>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="d-inline-flex align-items-center py-2">
                                <a class="me-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="me-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="me-3" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="me-3" href=""><i class="fab fa-instagram"></i></a>
                                <a class="" href=""><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                        <a href="index.html" class="navbar-brand d-block d-lg-none">
                            <h1 class="m-0 text-primary text-uppercase">Hotelier</h1>
                        </a>
                        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto py-0">
                                <router-link :to="{ name: 'home' }" class="nav-item nav-link active">หน้าแรก</router-link>
                                <router-link :to="{ name: 'about' }" class="nav-item nav-link">เกี่ยวกับเรา</router-link>
                                <router-link :to="{ name: 'service' }" class="nav-item nav-link">บริการของเรา</router-link>
                                <router-link :to="{ name: 'room' }" class="nav-item nav-link">ห้องทั้งหมด</router-link>
                                
                                <div class="nav-item dropdown" v-if="authenticated">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">ข้อมูลสมาชิก</a>
                                    <div class="dropdown-menu rounded-0 m-0">
                                        <router-link :to="{name:'profile'}" class="dropdown-item">โปรไฟล์</router-link>
                                        <router-link :to="{name:'myrooms'}" class="dropdown-item">จัดการที่พัก</router-link>
                                        <router-link :to="{name:'login'}" class="dropdown-item">ข้อความ</router-link>
                                        <!-- <router-link :to="{name:'login'}" class="dropdown-item">เข้าสู่ระบบ</router-link> -->
                                        <!-- <router-link :to="{name:'register'}" class="dropdown-item">สมัครสมาชิก</router-link> -->
                                        <hr>
                                        <a href="#" @click="signOut" class="dropdown-item">ออกจากระบบ</a>
                                    </div>
                                </div>
                                <router-link :to="{ name : 'contact' }" class="nav-item nav-link">ติดต่อเรา</router-link>
                            </div>
                            <router-link  :to="{ name: 'login' }" class="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">ลงประกาศฟรี<i class="fa fa-arrow-right ms-3"></i></router-link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <!-- Header End -->
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        })
    },
    methods: {
        ...mapActions({
            signOutAction: 'auth/signOut'
        }),
        signOut() {
            this.signOutAction().then(() => {
                this.$router.replace({
                    name: 'home'
                })
            })
        }
    }
}
</script>
<style lang="">
    
</style>