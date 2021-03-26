// objek literal
var mahasiswa1={
	nama : 'Aliwafa',
	npm : '181106041183',
	jurusan : 'Teknik Informatika',
	ips : [3.83, 3.86, 3.87],
	alamat : {
		jalan : 'Jln. Raya Gunung Gadung',
		desa : 'Kampung Genteng RT 02 RW 05',
		kelurahan : 'Genteng',
		kecamatan : 'Bogor Selatan',
		kota : 'Kota Bogor',
		provinsi : 'Jawa Barat'
	}
};

// Objek function declaration
function buatObjekMahasiswa(nama, npm, jurusan, ips, jalan, desa, kelurahan, kecamatan, kota, provinsi){
	var mahasiswa={};
	mahasiswa.nama = nama;
	mahasiswa.npm = npm;
	mahasiswa.jurusan = jurusan;
	mahasiswa.ips = ips;
	mahasiswa.alamat = {};
	mahasiswa.alamat.jalan = jalan;
	mahasiswa.alamat.desa = desa;
	mahasiswa.alamat.kelurahan = kelurahan;
	mahasiswa.alamat.kecamatan = kecamatan;
	mahasiswa.alamat.kota = kota;
	mahasiswa.alamat.provinsi = provinsi;
	return mahasiswa;

}
var mahasiswa2 = buatObjekMahasiswa('Ali','181106044483','Teknik Informatika', [3.99,3.10,3.16], 'Jln. Abcd', 'Kampung Abcd', 'Abcd Kelurahan', 'Abcd Kecamatan', 'Abcd Kota','Abcd Provinsi');




// Objek constructor
function Mahasiswa(nama, npm, jurusan, ips, jalan, desa, kelurahan, kecamatan, kota, provinsi){
	this.nama = nama;
	this.npm = npm;
	this.jurusan = jurusan;
	this.ips = ips;
	this.alamat = {};
	this.alamat.jalan = jalan;
	this.alamat.desa = desa;
	this.alamat.kelurahan = kelurahan;
	this.alamat.kecamatan = kecamatan;
	this.alamat.kota = kota;
	this.alamat.provinsi = provinsi;
}
var mahasiswa3 = new Mahasiswa('Wafa','181106044486','Teknik Mesin', [3.99,3.10,3.16], 'Jln. Abcdef', 'Kampung Abcdef', 'Abcdef Kelurahan', 'Abcdef Kecamatan', 'Abcdef Kota','Abcdef Provinsi');