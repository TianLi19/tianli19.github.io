# Tian Li — academic website

A responsive academic website themed around nighttime light remote sensing, based on `TL_CV_2026.docx`. The content reflects that CV's publication and appointment statuses. The hero uses a 1920 × 1080, 60 fps H.264 render of `nightlights_nature_cover_video_21_yearly_change_16x9_2160p60.mp4`. The year annotation is centered beneath the Earth, preserving the source’s changing years. The website enlarges the video by cropping empty outer margins while keeping the globe and year visible. The site retains its black, midnight-blue, and gold palette.

## Preview locally

Run `python3 -m http.server 8000` in this directory and open http://localhost:8000. No installation or build is required. Opening `index.html` directly also works.

## GitHub Pages

Upload the contents of this directory to the intended repository on its `main` branch. In **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included workflow publishes the site when `main` changes. A repository named `<username>.github.io` uses the root personal-site URL; another repository uses a project URL. Relative asset paths support either option.

## Maintain the site

- Edit the academic content in `index.html`.
- Update design tokens and responsive layouts in `style.css`.
- `script.js` handles accessible mobile navigation, publication search and filters.
- Replace `assets/Tian-Li-CV-2026.docx` and update both CV links when a new CV is available. The current download is the supplied original CV and includes the contact information in that file.
- `assets/nightlights-nature-cover-1080p60.mp4` is the high-quality website animation, encoded with CRF 16 and fast-start streaming metadata.
- `assets/nightlights-nature-poster.jpg` supplies a sharp first frame. Native play/pause controls preserve the current frame, and reduced-motion preferences disable automatic playback.
- `assets/nature-cover-9-april-2026.webp` renders the supplied PDF cover, beside the corresponding Nature article. Clicking it opens the Nature issue page for volume 652, issue 8109.
- The original 4K MP4 and the separately rendered GIF remain in the parent workspace.
- No analytics, tracking, third-party scripts, external fonts, or build dependencies are used.

Publication citations and external project/media links are reproduced from the CV. Manuscripts in preparation are listed separately from peer-reviewed publications.
