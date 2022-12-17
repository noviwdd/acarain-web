<template>
    <div class="container mt-4">
        <h3 class="mb-4 text-danger">Acarain.</h3>
        <div class="shadow p-5 rounded-5">
            <h3 class="text-center text-primary">Daftar di Acarain</h3>
            <p class="text-center text-primary pb-5">Hai, Orang Acara, Perkenalkan diri dulu yuk!</p>

            <div class="mb-3">
                <input type="email" class="form-control shadow-none rounded-4" id="email" placeholder="Alamat Email">
            </div>
            <div class="mb-3">
                <div class="row">
                    <div class="col-12 col-sm-6">
                    <input type="text" class="form-control shadow-none rounded-4" id="firstname" placeholder="Nama Depan">
                </div>
                <div class="col-12 col-sm-6">
                    <input type="text" class="form-control shadow-none rounded-4" id="lastname" placeholder="Nama Belakang">
                </div>
                </div>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control shadow-none rounded-4" id="password" placeholder="Kata Sandi">
            </div>
            <div class="mb-3 d-grid gap-2">
                <button class="btn btn-warning rounded-4 text-white fw-bold" type="button">Masuk</button>
            </div>
            <!-- <p class="text-center">atau masuk dengan</p> -->
            <p class="fw-bold">Sudah Punya Akun? <router-link to="/login" class="text-decoration-none text-danger">Masuk</router-link></p>
        </div>
    </div>
</template>