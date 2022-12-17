<template>
    <div class="container mt-4">
        <h3 class="mb-4 text-danger">Acarain.</h3>
        <div class="shadow p-5 rounded-5">
            <h3 class="text-center text-primary">Masuk Acarain</h3>
            <p class="text-center text-primary pb-5">Hai, Orang Acara, Perkenalkan diri dulu yuk!</p>

            <div class="mb-3">
                <input type="email" class="form-control shadow-none rounded-4" id="email" placeholder="Alamat Email">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control shadow-none rounded-4" id="password" placeholder="Kata Sandi">
            </div>
            <div class="mb-3 d-grid gap-2">
                <button class="btn btn-warning rounded-4 text-white fw-bold" type="button">Masuk</button>
            </div>
            <!-- <p class="text-center">atau masuk dengan</p> -->
            <p class="fw-bold">Belum Punya Akun? <router-link to="/register" class="text-decoration-none text-danger">Daftar</router-link></p>
        </div>
    </div>
</template>