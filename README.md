# TTGODMODE — Bulk Visual Studio

Workflow dua tahap untuk memproses video TikTok atau upload: **Random Metadata → Watermark & Frame → Final ZIP**.

## Menjalankan lokal

```bash
npm install
npm run dev
```

FFmpeg dan ffprobe harus tersedia di PATH. Buka `http://localhost:3000`.

## Penyimpanan persisten

Set `DATA_DIR=/data`. Di Railway, mount persistent volume ke `/data`; template disimpan dalam `editor-templates.json` dan gambar di `watermark-assets/`.

`VISUAL_WORKER_CONCURRENCY=2` adalah default aman untuk FFmpeg. Setiap job memakai snapshot template immutable. Render ulang selalu membaca hasil metadata, tidak pernah hasil final sebelumnya.

## Visual API

Template dan aset tersedia di `/api/editor/*`. Mulai visual worker lewat `/api/download-visual/start` atau `/api/upload-visual/start`, lalu ikuti SSE `/api/visual-progress?visualJobId=...`. Job mendukung retry item gagal, download per video, dan ZIP final.
