<template>
	<div>
		<div class="container my-4">
			<div class="row justify-content-between">
				<h3 class="col-md-4 mb-4 text-danger">Acarain.</h3>
				<div class="col-md-4">
					<div class="d-flex">
						<button class="btn">Masuk</button>
						<button class="btn btn-primary text-white">Buat Event</button>
					</div>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-12 position-relative p-0">
					<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-inner">
							<div class="carousel-item active">
								<img src="https://picsum.photos/1080/300" class="d-block w-100" alt="...">
							</div>
						</div>
					</div>
					<div class="button-overlay-in-carousel btn btn-warning">Buat Event Sekarang!</div>
				</div>
			</div>
		</div>
		<div class="container my-4">
			<div class="row">
				<div class="col-md-12">
					<div>Yang di Acarain bulan ini</div>
				</div>
			</div>
			<div class="row mt-3">
				<div class="col-md-12">
					<button type="button" class="btn btn-secondary me-3">Workshop</button>
					<button type="button" class="btn btn-secondary me-3">Lomba</button>
					<button type="button" class="btn btn-secondary me-3">Programming</button>
					<button type="button" class="btn btn-secondary me-3">SocialEvent</button>
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-md-3">
					<div class="card" style="width: 18rem;">
						<img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
						<div class="card-body">
							<h6>Pekan HAM kota Bogor</h6>
							<div class="text-danger py-1">1 Desember - 20 Desember 2022</div>
							<span class="d-block py-1">! Bogor Creative Center</span>
							<a href="#" class="text-decoration-none d-block py-1 text-primary fw-bold">FREE</a>
						</div>
						<div class="circle shadow-sm"></div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card" style="width: 18rem;">
						<img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
						<div class="card-body">
							<h6>Pekan HAM kota Bogor</h6>
							<div class="text-danger py-1">1 Desember - 20 Desember 2022</div>
							<span class="d-block py-1">! Bogor Creative Center</span>
							<a href="#" class="text-decoration-none d-block py-1 text-primary fw-bold">FREE</a>
						</div>
						<div class="circle shadow-sm"></div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card" style="width: 18rem;">
						<img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
						<div class="card-body">
							<h6>Pekan HAM kota Bogor</h6>
							<div class="text-danger py-1">1 Desember - 20 Desember 2022</div>
							<span class="d-block py-1">! Bogor Creative Center</span>
							<a href="#" class="text-decoration-none d-block py-1 text-primary fw-bold">FREE</a>
						</div>
						<div class="circle shadow-sm"></div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card" style="width: 18rem;">
						<img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
						<div class="card-body">
							<h6>Pekan HAM kota Bogor</h6>
							<div class="text-danger py-1">1 Desember - 20 Desember 2022</div>
							<span class="d-block py-1">! Bogor Creative Center</span>
							<a href="#" class="text-decoration-none d-block py-1 text-primary fw-bold">FREE</a>
						</div>
						<div class="circle shadow-sm"></div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<style scoped>
.button-overlay-in-carousel {
	position: absolute;
	top: 75%;
	left: 10%;
}
.circle {
	width: 50px;
	height: 50px;
	border: 1px solid #F4F4F4;
	position: absolute;
	top: 120px;
	right: 30px;
	border-radius: 50%;
	background-color: #FFF;
}
</style>