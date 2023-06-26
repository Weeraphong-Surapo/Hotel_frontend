<template lang="">

    <div class="row g-4">
        <div class="col-md-12">
            <div class="wow fadeInUp" data-wow-delay="0.2s">
                <form @submit.prevent="submit">
                    <div class="row g-3">
                        <div class="col-md-12">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="password" placeholder="Your Password" >
                                <label for="password">รหัสผ่านเดิม</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="newpassword" placeholder="New Password" >
                                <label for="newpassword">รหัสผ่านใหม่</label>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-floating">
                                <input type="password" class="form-control" id="confirm" placeholder="Confirm Passowrd" >
                                <label for="confirm">ยืนยันรหัสผ่านใหม่</label>
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
export default {
    data() {
        return {

        }
    },
}
</script>
<style scoped></style>