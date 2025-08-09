Petunjuk deploy ke GitHub Pages:
1. Ekstrak folder ini di komputer.
2. Buat repository baru di GitHub (public).
3. Upload file: index.html, style.css, script.js, admin.html, admin.js ke root repository.
4. Commit & Push / Commit changes di web UI.
5. Ke Settings → Pages → Source: main branch → Folder: / (root) → Save.
6. Tunggu ~1 menit, buka: https://<username>.github.io/<repo>/ untuk melihat website.
7. Panel admin ada di https://<username>.github.io/<repo>/admin.html
   - Password default: putra123
   - Panel menyimpan perubahan di localStorage browser (per origin).

Catatan keamanan: Panel menggunakan password di sisi klien — cukup untuk penggunaan personal lokal / perubahan cepat.
Jangan gunakan password sensitif atau simpan data rahasia di sini.
