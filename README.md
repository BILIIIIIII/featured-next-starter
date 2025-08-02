#  Next.js Feature-Based Starter Kit

**Side project ini juga merupakan proyek starter pribadi yang biasa saya pakai untuk membangun aplikasi web**. Tujuan utamanya adalah menyediakan struktur yang terorganisasi dan skalabel agar saya (dan Anda juga) bisa langsung fokus ke pengembangan fitur—bukan pusing setup awal.

![Screenshot Proyek](/public/image.png)

---

## ✨ Fitur Utama

* **Framework Modern**
  Dibangun di atas Next.js 14+ dengan dukungan App Router.

* **Styling**
  Tailwind CSS untuk utility-first styling yang konsisten dan efisien.

* **UI Components**
  Menggunakan `intent-ui` untuk komponen UI yang siap pakai dan mudah dikustomisasi.

* **State Management**
  TanStack React Query untuk manajemen server state yang efisien dan cache-aware.

* **Arsitektur Skalabel**
  Menggunakan pendekatan *feature-based* untuk modularitas tinggi.

* **Pola Desain**
  Smart & Dumb Components untuk pemisahan logika dan tampilan.

* **Kualitas Kode**
  TypeScript, ESLint, dan Prettier (konfigurasi bisa ditambahkan sesuai kebutuhan).

* **Dark Mode**
  Dukungan tema terang/gelap menggunakan `next-themes`.

---

## 🚀 Memulai

Ikuti langkah-langkah ini untuk menjalankan proyek secara lokal:

### 1. Clone repositori

```bash
git clone https://github.com/your-username/featured-next-starter.git
cd featured-next-starter
```

### 2. Instal dependencies

> Proyek ini menggunakan **bun** sebagai package manager:

```bash
bun install
```

### 3. Setup environment variables

Salin `.env.example` menjadi `.env.local`:

```bash
cp .env.example .env.local
```

Isi `NEXT_PUBLIC_API_URL` atau variabel lain sesuai kebutuhan.

### 4. Jalankan server development

```bash
bun run dev
```

Buka [`http://localhost:3000`](http://localhost:3000) di browser.

---

## 🏗️ Filosofi Arsitektur

### 📁 Arsitektur Berbasis Fitur (*Feature-Based Architecture*)

Alih-alih mengelompokkan berdasarkan jenis file, struktur foldernya berdasarkan fitur aplikasi.

```
src/
├── app/         # Rute dan Smart Components (Pages)
├── features/    # Fitur terisolasi (modular)
│   └── property/
│       ├── api/
│       ├── components/   # Dumb Components
│       ├── hooks/
│       ├── types/
│       └── index.ts      # API publik untuk fitur ini
└── shared/      # Kode reusable
    ├── ui/
    ├── hooks/
    └── lib/
```

### Keuntungan:

* **High Cohesion**: Semua bagian fitur ada dalam satu folder.
* **Low Coupling**: Fitur seperti `auth` dan `property` tidak saling bergantung secara internal.
* **Kemudahan Navigasi**: Semua kode yang relevan untuk satu fitur berada di tempat yang sama.
* **Skalabilitas Tinggi**: Menambah atau menghapus fitur hanya soal menambah atau menghapus folder.

---

## 🧠 Smart vs Dumb Components

### Smart Components (Containers)

* **Lokasi**: `src/app/*/page.tsx`
* **Tugas**: Menangani logika, pemanggilan hooks, dan state.
* **Contoh**: `page.tsx` untuk halaman `property`.

### Dumb Components (Presentational)

* **Lokasi**: `features/*/components/` atau `shared/ui/`
* **Tugas**: Menampilkan UI berdasarkan props. Tidak tahu sumber data.
* **Contoh**: `PropertyList.tsx`, `Button.tsx`.

Pemisahan ini membuat komponen mudah untuk dites dan digunakan ulang.

---

## 🛠️ Cara Menambah Fitur Baru

Contoh: Fitur “Blog”

### 1. Buat folder fitur

```bash
src/features/blog/
```

### 2. Struktur internal

```
blog/
├── api/
├── components/
├── hooks/
├── types/
└── index.ts
```

### 3. Kembangkan fitur

* Tambahkan tipe data di `types/`
* Tambahkan fungsi API di `api/`
* Tambahkan hooks seperti `useBlogs` di `hooks/`
* Tambahkan komponen UI seperti `ArticleCard.tsx` di `components/`

### 4. Buat halaman (Smart Component)

Buat file:

```bash
src/app/blog/page.tsx
```

Di dalamnya, panggil hooks dan render komponen dari `features/blog`.

### 5. Barrel file

Expose dari `features/blog/index.ts`:

```ts
export * from "./hooks/useBlogs";
export * from "./components/ArticleCard";
```