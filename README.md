# Website Ulang Tahun Romantis & Lucu untuk Ami 💖

Website ucapan ulang tahun yang manis, romantis, simpel, dan sangat responsif untuk dibuka di HP (mobile).

Murni statis (HTML5 + CSS3 + Vanilla JavaScript), tanpa library berat, ringan, dan siap langsung di-deploy ke Vercel atau GitHub Pages.

---

## ✨ Fitur-Fitur Utama

1. **Amplop Romantis Interaktif (Intro)**
   - Amplop estetik dengan segel lilin bertuliskan inisial nama.
   - Ketuk untuk membuka amplop dengan efek suara lonceng dan ledakan konfeti lembut.
2. **Floating Music Player (Sudut Kanan Bawah Ramah HP)**
   - Pemutar musik berbentuk piringan melayang di pojok kanan bawah yang ramah jempol dan tidak menghalangi teks maupun buket bunga saat di-scroll di HP.
   - Dilengkapi melodi kotak musik romantis (*music box synth*) otomatis jika file `music.mp3` belum dimasukkan.
3. **Hero Section dengan Buket Bunga Cantik**
   - Ilustrasi buket bunga mawar romantis yang besar dan mekar dengan pita satin emas.
   - Bisa disentuh untuk memunculkan goyangan gemas dan hamburan kelopak bunga/hati.
   - Ucapan ulang tahun beranimasi mesin tik (*typewriter*).
   - Tombol interaktif pelukan virtual dengan counter cinta.
4. **Gulungan Surat Cinta Interaktif (*Parchment Scroll*)**
   - Berbentuk gulungan surat kuno/kerajaan dengan batang kayu emas dan segel lilin merah.
   - Saat disentuh/diketuk, gulungan surat akan meluncur (*slide down*) terbuka ke bawah secara halus dan elegan, menampilkan seluruh isi pesan cintamu. Bisa digulung kembali kapan saja!
5. **Galeri Momen Manis (Polaroid Slider & Lightbox)**
   - Kartu foto polaroid yang bisa digeser dengan mulus di layar sentuh HP.
   - Ketuk foto untuk melihat dalam ukuran penuh (*fullscreen lightbox*) dengan tombol love ♥.
6. **Kue Ulang Tahun & Tiup Lilin Interaktif (Bisa Pakai Mic!)**
   - Kue ulang tahun manis dengan nyala api lilin hangat.
   - **Bisa Ditiup Pakai Mic HP**: Ami bisa langsung meniup ke mikrofon HP-nya untuk memadamkan lilin! (Atau cukup tekan tombol biasa).
   - Saat lilin padam, muncul kepulan asap lembut, hujan konfeti, dan kartu doa/harapan yang terbuka.
7. **Sentuhan Layar Hati Lembut**
   - Sentuhan di layar memunculkan partikel hati kecil yang melayang manis tanpa berlebihan.
8. **Latar Belakang Romantis (Bentuk Hati & Bunga-Bunga)**
   - Pola wallpaper halus bermotif hati (*love*) dan bunga sakura mekar.
   - Partikel hati dan bunga mekar 5 kelopak yang melayang perlahan secara dinamis di seluruh layar.

---

## 🎨 Cara Ganti Teks & Foto

Buka file `script.js` dan ubah variabel `CONFIG` di paling atas:
- **`name`**: Nama kesayangan (contoh: "Ami").
- **`from`**: Nama kamu/panggilanmu.
- **`initial`**: Inisial di segel amplop.
- **`heroPhoto` & `gallery`**: Lokasi file foto di folder `photos/`.
- **`typedLines`**: Pesan ketikan di bagian atas.
- **`letter`**: Paragraf isi surat cinta.
- **`wish`**: Doa yang muncul saat lilin ditiup.

> **Tips:** Jika foto belum dimasukkan ke folder `photos/`, website sudah otomatis menampilkan ilustrasi kartu manis bergradasi!

---

## 🚀 Cara Deploy ke Vercel
1. Buka [vercel.com](https://vercel.com) dan login.
2. Klik **Add New...** → **Project**.
3. Tarik (*drag & drop*) folder project ini ke layar Vercel.
4. Klik **Deploy** dan bagikan link-nya ke Ami! 💖
