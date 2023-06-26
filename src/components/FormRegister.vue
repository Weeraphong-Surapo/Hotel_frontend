<template lang="">

        <div class="row g-4">
            <div class="col-md-12">
                <div class="wow fadeInUp" data-wow-delay="0.2s">
                    <form @submit.prevent="submit">
                        <div class="row g-3">
                            <div class="col-md-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" v-model="form.name">
                                    <label for="name">ชื่อผู้ใช้</label>
                                    <span class="text-danger" v-if="error.name">{{error.name}}</span>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" v-model="form.email">
                                    <label for="email">อีเมลล์</label>
                                    <span class="text-danger" v-if="error.email">{{error.email}}</span>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" v-model="form.password">
                                    <label for="subject">รหัสผ่าน</label>
                                    <span class="text-danger" v-if="error.password">{{error.password}}</span>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="subject" placeholder="Subject" v-model="form.password_confirmation">
                                    <label for="subject">ยืนยันรหัสผ่าน</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">เข้าสู่ระบบ</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            error:{
                email:'',
                password:'',
                name:''
            }
        }
    },
    methods: {
        ...mapActions({
            SignUp: 'auth/SignUp'
        }),
        submit() {
            this.SignUp(this.form).then(() => {
                this.$router.replace({
                    name:'dashboard'
                })
            }).catch(e => {
                    e.response.data.errors.email ? this.error.email = e.response.data.errors.email[0] : this.error.email = ''
                    e.response.data.errors.password ? this.error.password = e.response.data.errors.password[0] : this.error.password = ''
                    e.response.data.errors.name ? this.error.name = e.response.data.errors.name[0] : this.error.name = ''
            })
        }
    }
}
</script>
<style scoped></style>