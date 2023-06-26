<template lang="">

    <div class="row g-4">
        <div class="col-md-12">
            <div class="wow fadeInUp" data-wow-delay="0.2s">
                <form >
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" v-model="user.name">
                                <label for="name">ชื่อ</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" >
                                <label for="name">นามสกุล</label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="name" placeholder="Your Name" >
                                <label for="name">มือถือ</label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-floating">
                                <input type="email" class="form-control" id="email" placeholder="Your Email" v-model="user.email">
                                <label for="email">อีเมลล์</label>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-floating">
                                <textarea name="" class="form-control" id="" cols="30" rows="10" placeholder="Your Address"></textarea>
                                <label for="email">ที่อยู่</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <select name="" id="" class="form-select">
                                    <option value="">test</option>
                                </select>
                                <label for="email">จังหวัด</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <select name="" id="" class="form-select">
                                    <option value="">test</option>
                                </select>
                                <label for="email">อำเภอ/เขต</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <select name="" id="" class="form-select">
                                    <option value="">test</option>
                                </select>
                                <label for="email">ตำบล/แขวง</label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating">
                                <select name="" id="" class="form-select">
                                    <option value="">test</option>
                                </select>
                                <label for="email">รหัสไปรษณีย์</label>
                            </div>
                        </div>
                        <!-- <div class="col-12">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="subject" placeholder="Subject">
                                <label for="subject">รหัสผ่าน</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="subject" placeholder="Subject">
                                <label for="subject">ยืนยันรหัสผ่าน</label>
                            </div>
                        </div> -->
                        <div class="col-12">
                            <button class="btn btn-primary w-100 py-3" type="submit">บันทึก</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters({
            user: 'auth/user'
        })
    },
    methods: {

    }
}
</script>
<style scoped></style>