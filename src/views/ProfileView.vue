<template>
    <!-- Page Header Start -->
    <div class="container-fluid page-header mb-5 p-0" style="background-image: url(img/carousel-1.jpg)">
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center pb-5">
                <h1 class="display-3 text-white mb-3 animated slideInDown">ข้อมูลส่วนตัว</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <!-- Page Header End -->


    <!-- Booking Start -->
    <div class="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <div class="bg-white shadow" style="padding: 35px;">
                <div class="row g-2">
                    <div class="col-md-6">
                        <router-link :to="{ name: 'profile' }" class="btn btn-primary w-100">ข้อมูลส่วนตัว</router-link>
                    </div>
                    <div class="col-md-6">
                        <router-link :to="{ name: 'password' }" class="btn btn-primary w-100">เปลี่ยนรหัสผ่าน</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Booking End -->

    <div class="container-xxl py-5">
        <div class="container">
            <FormProfile></FormProfile>
        </div>
    </div>





    <!-- Newsletter Start -->
    <div class="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="row justify-content-center">
            <div class="col-lg-10 border rounded p-1">
                <div class="border rounded text-center p-1">
                    <div class="bg-white rounded text-center p-5">
                        <h4 class="mb-4">
                            Subscribe Our <span class="text-primary text-uppercase">Newsletter</span>
                        </h4>
                        <div class="position-relative mx-auto" style="max-width: 400px">
                            <input class="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                            <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Newsletter Start -->
</template>

<script>
import FormProfile from '../components/FormProfile.vue'
export default {
    components: {
        FormProfile
    },

}
</script>
<style></style>
