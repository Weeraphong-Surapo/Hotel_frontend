<template lang="">

    <div class="row g-4">
        <div class="col-md-12">
            <div class="wow fadeInUp" data-wow-delay="0.2s">
                <h2 class="btn btn-danger w-100 py-3" v-if="error.notfound">{{ error.notfound }}</h2>
                <form @submit.prevent="submit">
                    <div class="row g-3">
                        <div class="col-md-12">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="email" placeholder="Your Email" v-model="form.email">
                                <label for="email">อีเมลล์</label>
                                <span v-if="error.email" class="text-danger">{{ error.email }}</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="subject" placeholder="Subject"  v-model="form.password">
                                <label for="subject">รหัสผ่าน</label>
                                <span class="text-danger">{{ error.password }}</span>
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
import { mapActions } from 'vuex'
export default {
    name: 'sign-in',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            error:{
                email:'',
                password:'',
                notfound:''
            }
        }
    },
    methods: {
        ...mapActions({
            SignIn: 'auth/SignIn'
        }),
        submit() {
            this.SignIn(this.form).then(() => {
                this.$router.replace({
                    name: 'dashboard'
                })
            }).catch((e) => {
                if(e.response.status == 401){
                    this.error.notfound = "อีเมมล์หรือรหัสผ่านไม่ถูกต้อง!!"
                }else{
                    e.response.data.errors.email ? this.error.email = e.response.data.errors.email[0] : this.error.email = ''
                    e.response.data.errors.password ? this.error.password = e.response.data.errors.password[0] : this.error.password = ''
                }

            })
        }
    },
}
</script>
<style scoped></style>