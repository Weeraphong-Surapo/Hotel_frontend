<template lang="">
    <!-- Page Header Start -->
    <!-- <div class="container-fluid page-header mb-5 p-0" style="background-image: url(img/carousel-1.jpg);"> -->
              <!-- <div class="container-fluid page-header-inner py-5">
                  <div class="container text-center pb-5">
                      <h1 class="display-3 text-white mb-3 animated slideInDown">จัดการที่พัก</h1>
                      <nav aria-label="breadcrumb">
                          <ol class="breadcrumb justify-content-center text-uppercase">
                              <li class="breadcrumb-item"><a href="#">Home</a></li>
                              <li class="breadcrumb-item"><a href="#">Pages</a></li>
                              <li class="breadcrumb-item text-white active" aria-current="page">Rooms</li>
                          </ol>
                      </nav>
                  </div>
              </div> -->
          <!-- </div> -->
          <!-- Page Header End -->
  

          <div class="container-xxl py-5 ">
            <div class="container">
                <div class="row g-4">
                    <div class="col-md-12">
                        <div class="wow fadeInUp" data-wow-delay="0.2s">
                            <form >
                                <div class="row g-3">
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <select class="form-select">
                                                <option></option>
                                            </select>
                                            <label for="email">ประเภทที่พัก</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">ชื่อที่พัก</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">อีเมลล์</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">เบอร์ติดต่อ</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email">
                                            <label for="email">LINE ID</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-3 col-6 col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">เลขที่/หมู่</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-3 col-6 col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">ซอย</label>
                                        </div>
                                    </div>
                                    <div class="col-6 col-lg-6 col-6 col-md-4">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">ถนน</label>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-floating">
                                            <select class="form-select">
                                                <option></option>
                                            </select>
                                            <label for="subject">จังหวัด</label>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-floating">
                                            <select class="form-select">
                                                <option></option>
                                            </select>
                                            <label for="subject">อำเภอ/เขต</label>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-floating">
                                            <select class="form-select">
                                                <option></option>
                                            </select>
                                            <label for="subject">ตำบล/แขวง</label>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">รหัสไปรษณีย์</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">สถานที่ไกล้เคียง</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-4">
                                                <input type="checkbox" class="from-control me-2">
                                                <label for="subject">สถานที่ไกล้เคียง</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="checkbox" class="from-control me-2">
                                                <label for="subject">สถานที่ไกล้เคียง</label>
                                            </div>
                                            <div class="col-4">
                                                <input type="checkbox" class="from-control me-2">
                                                <label for="subject">สถานที่ไกล้เคียง</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">ราคารายเดือน/บาท (เริ่มต้น)</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">ราคารายเดือน/บาท (สูงสุด)</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">ราคารายวัน/บาท (เริ่มต้น)</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6 col-lg-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">ราคารายวัน/บาท (สูงสุด)</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">อัตราค่าน้ำ</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">อัตราค่าไฟฟ้า</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject">
                                            <label for="subject">ค่าส่วนกลาง</label>
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
    


            <!-- Newsletter Start -->
            <div class="container newsletter mt-5 py-4 wow fadeIn" data-wow-delay="0.1s">
                <div class="row justify-content-center">
                </div>
            </div>
            <!-- Newsletter Start -->
            </div>
        </div>
  </template>
<script>

export default {

}
</script>
<style lang="">
      
  </style>