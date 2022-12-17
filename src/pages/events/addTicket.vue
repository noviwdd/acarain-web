<template>
    <div class="container my-4">
        <h3 class="mb-4 text-danger">Acarain.</h3>
        <div class="shadow p-5 rounded-5">
            <h3 class="text-center text-primary mb-4">Tambahkan Tiket</h3>
            <div class="row mb-3">
                <div class="col-12 col-md-6 d-grid gap-2"> 
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                    <label class="btn btn-outline-primary rounded-4" for="option1">Berbayar</label>
                </div>
                <div class="col-12 col-md-6 d-grid gap-2"> 
                    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
                    <label class="btn btn-outline-primary rounded-4" for="option2">Gratis</label>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <input type="text" class="form-control shadow-none rounded-4" id="lastname" placeholder="Nama Tiket">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <input type="text" class="form-control shadow-none rounded-4" id="lastname" placeholder="Kapasitas Tersedia">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <input type="text" class="form-control shadow-none rounded-4" id="lastname" placeholder="Harga">
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <input type="text" class="form-control shadow-none rounded-4" id="lastname" placeholder="Deskripsi">
                </div>
            </div>
            <p class="text-primary fw-bold h6">Batas per Pesanan</p>
            <div class="row mb-3">
                <div class="col-6">
                    <input type="text" class="form-control shadow-none rounded-4" id="lastname" placeholder="Min.">
                </div>
                <div class="col-6">
                    <input type="text" class="form-control shadow-none rounded-4" id="lastname" placeholder="Maks.">
                </div>
            </div>
            <div class="mb-3 d-grid gap-2">
                <button class="btn btn-warning rounded-4 text-white fw-bold" type="button">Simpan</button>
            </div>
        </div>
    </div>
</template>