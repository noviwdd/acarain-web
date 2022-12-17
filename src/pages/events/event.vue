<template>
    <div class="container mt-4">
        <h3 class="mb-4 text-danger">Acarain.</h3>
        <div class="shadow p-5 rounded-5">
            <h3 class="text-center text-primary">Acara</h3>
            <p class="text-center text-primary pb-5">Isi form dibawah ini untuk bikin acara di <span class="text-danger">Acarain.</span></p>

            <div class="row mb-3">
                <div class="col-12 col-md-4">
                    <input type="email" class="form-control shadow-none rounded-4" id="email" placeholder="Alamat Email">
                </div>
                <div class="col-12 col-md-2 d-grid gap-2"> 
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-outline-primary rounded-4" for="option1">Online</label>
                </div>
                <div class="col-12 col-md-2 d-grid gap-2"> 
                    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
                    <label class="btn btn-outline-primary rounded-4" for="option2">Offline</label>
                </div>
                <div class="col-12 col-md-4">
                    <div class="mb-3">
                        <input class="form-control" type="file" id="formFile">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="row mb-3">
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control shadow-none rounded-4" id="organizer" placeholder="Organizer">
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control shadow-none rounded-4" id="lokasi" placeholder="Lokasi">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-md-3">
                            <input type="text" class="form-control shadow-none rounded-4" id="tipe" placeholder="Tipe">
                        </div>
                        <div class="col-12 col-md-3">
                            <input type="text" class="form-control shadow-none rounded-4" id="kategori" placeholder="Kategori">
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control shadow-none rounded-4" id="waktu_mulai" placeholder="Waktu Mulai">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control shadow-none rounded-4" id="tags" placeholder="Tags">
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="text" class="form-control shadow-none rounded-4" id="waktu_selesai" placeholder="Waktu Selesai">
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <textarea class="form-control shadow-none rounded-4" name="" id="" cols="30" rows="5">Deskripsi Acara</textarea>
                </div>
            </div>
            <div class="mt-4 d-grid gap-2 mx-auto col-6">
                <button class="btn btn-warning rounded-4 text-white fw-bold" type="button">Buat Acara</button>
            </div>
        </div>
    </div>
</template>