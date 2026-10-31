/* ---------------------------------------------------------------
   Gallery data
   Each category has one or more sections. A section with a title shows
   a heading (e.g. a place). Every photo has:
     src     full-size image (shown in the lightbox)
     thumb   small image (shown in the grid, loads fast)
     w, h    thumbnail size, so the page doesn't jump while loading
     caption optional text shown under the photo in the lightbox
                (falls back to the section title if left out)
--------------------------------------------------------------- */
const galleryData = {
    "travels": [
        {
            "title": "Beijing",
            "photos": [
                {
                    "src": "Travels/Beijing/b1.jpg",
                    "thumb": "thumbs/Travels/Beijing/b1.webp",
                    "w": 1000,
                    "h": 769
                },
                {
                    "src": "Travels/Beijing/b2.jpg",
                    "thumb": "thumbs/Travels/Beijing/b2.webp",
                    "w": 1000,
                    "h": 563
                },
                {
                    "src": "Travels/Beijing/b3.jpg",
                    "thumb": "thumbs/Travels/Beijing/b3.webp",
                    "w": 1000,
                    "h": 563
                },
                {
                    "src": "Travels/Beijing/b4.jpg",
                    "thumb": "thumbs/Travels/Beijing/b4.webp",
                    "w": 918,
                    "h": 1000
                },
                {
                    "src": "Travels/Beijing/b5.jpg",
                    "thumb": "thumbs/Travels/Beijing/b5.webp",
                    "w": 1000,
                    "h": 563
                },
                {
                    "src": "Travels/Beijing/b6.jpg",
                    "thumb": "thumbs/Travels/Beijing/b6.webp",
                    "w": 1000,
                    "h": 738
                },
                {
                    "src": "Travels/Beijing/b7.jpg",
                    "thumb": "thumbs/Travels/Beijing/b7.webp",
                    "w": 1000,
                    "h": 960
                }
            ]
        },
        {
            "title": "New Jersey",
            "photos": [
                {
                    "src": "Travels/New Jersey/nj1.jpg",
                    "thumb": "thumbs/Travels/New Jersey/nj1.webp",
                    "w": 1000,
                    "h": 750
                },
                {
                    "src": "Travels/New Jersey/nj2.jpg",
                    "thumb": "thumbs/Travels/New Jersey/nj2.webp",
                    "w": 1000,
                    "h": 750
                },
                {
                    "src": "Travels/New Jersey/nj3.jpg",
                    "thumb": "thumbs/Travels/New Jersey/nj3.webp",
                    "w": 750,
                    "h": 1000
                },
                {
                    "src": "Travels/New Jersey/nj4.jpg",
                    "thumb": "thumbs/Travels/New Jersey/nj4.webp",
                    "w": 1000,
                    "h": 750
                },
                {
                    "src": "Travels/New Jersey/nj5.jpg",
                    "thumb": "thumbs/Travels/New Jersey/nj5.webp",
                    "w": 750,
                    "h": 1000
                },
                {
                    "src": "Travels/New Jersey/nj6.jpg",
                    "thumb": "thumbs/Travels/New Jersey/nj6.webp",
                    "w": 1000,
                    "h": 750
                },
                {
                    "src": "Travels/New Jersey/nj7.jpg",
                    "thumb": "thumbs/Travels/New Jersey/nj7.webp",
                    "w": 750,
                    "h": 1000
                }
            ]
        },
        {
            "title": "Seoul",
            "photos": [
                {
                    "src": "Travels/Seoul/s1.jpg",
                    "thumb": "thumbs/Travels/Seoul/s1.webp",
                    "w": 1000,
                    "h": 831
                },
                {
                    "src": "Travels/Seoul/s2.jpg",
                    "thumb": "thumbs/Travels/Seoul/s2.webp",
                    "w": 663,
                    "h": 641
                },
                {
                    "src": "Travels/Seoul/s3.jpg",
                    "thumb": "thumbs/Travels/Seoul/s3.webp",
                    "w": 808,
                    "h": 960
                },
                {
                    "src": "Travels/Seoul/s4.jpg",
                    "thumb": "thumbs/Travels/Seoul/s4.webp",
                    "w": 1000,
                    "h": 750
                },
                {
                    "src": "Travels/Seoul/s5.jpg",
                    "thumb": "thumbs/Travels/Seoul/s5.webp",
                    "w": 749,
                    "h": 1000
                },
                {
                    "src": "Travels/Seoul/s6.jpg",
                    "thumb": "thumbs/Travels/Seoul/s6.webp",
                    "w": 720,
                    "h": 720
                },
                {
                    "src": "Travels/Seoul/s7.jpg",
                    "thumb": "thumbs/Travels/Seoul/s7.webp",
                    "w": 750,
                    "h": 1000
                }
            ]
        }
    ],
    "family": [
        {
            "title": "",
            "photos": [
                {
                    "src": "img/3.jpg",
                    "thumb": "thumbs/img/3.webp",
                    "w": 1000,
                    "h": 821
                },
                {
                    "src": "img/4.jpg",
                    "thumb": "thumbs/img/4.webp",
                    "w": 960,
                    "h": 468
                },
                {
                    "src": "img/5.jpg",
                    "thumb": "thumbs/img/5.webp",
                    "w": 1000,
                    "h": 750
                }
            ]
        }
    ],
    "solo": [
        {
            "title": "",
            "photos": [
                {
                    "src": "img/Crop1.jpg",
                    "thumb": "thumbs/img/Crop1.webp",
                    "w": 1000,
                    "h": 959
                },
                {
                    "src": "img/Crop2.jpg",
                    "thumb": "thumbs/img/Crop2.webp",
                    "w": 749,
                    "h": 1000
                },
                {
                    "src": "img/Crop3.jpg",
                    "thumb": "thumbs/img/Crop3.webp",
                    "w": 749,
                    "h": 1000
                },
                {
                    "src": "img/Crop4.jpg",
                    "thumb": "thumbs/img/Crop4.webp",
                    "w": 750,
                    "h": 1000
                },
                {
                    "src": "img/Crop5.jpg",
                    "thumb": "thumbs/img/Crop5.webp",
                    "w": 750,
                    "h": 1000
                },
                {
                    "src": "img/Crop6.jpg",
                    "thumb": "thumbs/img/Crop6.webp",
                    "w": 750,
                    "h": 1000
                }
            ]
        }
    ]
};

const categoryAlt = {
    travels: 'Travel photograph',
    family: 'Family photograph',
    solo: 'Portrait of Clarissa I. Bonifacio'
};

const albumTitles = {
    travels: 'Travels',
    family: 'Family',
    solo: 'Portraits'
};

const album = document.getElementById('album');
const albumBody = document.getElementById('album-body');
const lightbox = document.getElementById('lightbox');

/* Page scroll is locked while the album or the lightbox is open */
function updateScrollLock() {
    const albumOpen = album && !album.hidden;
    const lbOpen = lightbox && lightbox.classList.contains('open');
    document.body.style.overflow = (albumOpen || lbOpen) ? 'hidden' : '';
}

/* ---------- Album (full-screen pop-up) ---------- */
const panels = {};
let albumReturnFocus = null;
let canGoBack = false;   // true when the album was opened from a card on this page

function buildPanel(category) {
    const panel = document.createElement('div');
    panel.className = 'album_panel';
    panel.dataset.category = category;

    const sections = galleryData[category];

    // Quick "jump to" buttons when an album has several places
    if (sections.length > 1) {
        const nav = document.createElement('div');
        nav.className = 'place_nav';
        nav.setAttribute('aria-label', 'Jump to a place');
        sections.forEach((section, i) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.textContent = section.title;
            b.addEventListener('click', () => {
                panel.querySelectorAll('.place_section')[i]
                    .scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
            nav.appendChild(b);
        });
        panel.appendChild(nav);
    }

    sections.forEach(section => {
        const wrap = document.createElement('section');
        wrap.className = 'place_section';

        if (section.title) {
            const h = document.createElement('h2');
            h.className = 'place_heading';
            h.textContent = section.title;
            wrap.appendChild(h);
        }

        const row = document.createElement('div');
        row.className = 'photo_row';

        section.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.thumb;
            img.width = photo.w;
            img.height = photo.h;
            const ratio = photo.w / photo.h;
            img.style.setProperty('--r', ratio.toFixed(4));
            img.style.flexGrow = (ratio * 100).toFixed(2);
            img.loading = 'lazy';
            img.decoding = 'async';
            img.tabIndex = 0;
            img.setAttribute('role', 'button');
            img.dataset.full = photo.src;
            img.dataset.caption = photo.caption || section.title || '';
            img.alt = section.title ? `${section.title} — ${categoryAlt[category]}` : categoryAlt[category];
            row.appendChild(img);
        });

        wrap.appendChild(row);
        panel.appendChild(wrap);
    });

    albumBody.appendChild(panel);
    panels[category] = panel;
    return panel;
}

function showAlbum(category) {
    if (!galleryData[category]) return;
    const wasOpen = !album.hidden;
    if (!wasOpen) albumReturnFocus = document.activeElement;

    Object.values(panels).forEach(p => { p.hidden = true; });
    const panel = panels[category] || buildPanel(category);
    panel.hidden = false;

    album.setAttribute('aria-label', `${albumTitles[category]} photo album`);
    album.querySelectorAll('.album_tabs button').forEach(btn => {
        if (btn.dataset.category === category) btn.setAttribute('aria-current', 'true');
        else btn.removeAttribute('aria-current');
    });

    album.hidden = false;
    album.scrollTop = 0;
    if (!wasOpen) {
        album.classList.remove('open');
        void album.offsetWidth;            // restart the fade-in animation
        album.classList.add('open');
        album.querySelector('.album_back').focus({ preventScroll: true });
    }
    updateScrollLock();
}

function hideAlbum() {
    if (!album || album.hidden) return;
    album.hidden = true;
    album.classList.remove('open');
    updateScrollLock();
    if (albumReturnFocus && document.contains(albumReturnFocus)) {
        albumReturnFocus.focus({ preventScroll: true });
    }
}

/* The address bar (#travels, #family, #solo) decides what is showing, so the
   browser's Back button closes the album and each album can be linked to. */
function route() {
    const category = location.hash.slice(1);
    if (galleryData[category]) showAlbum(category);
    else hideAlbum();
}

function closeAlbum() {
    if (canGoBack) {
        canGoBack = false;
        history.back();          // hashchange then hides the album
    } else {
        history.replaceState(null, '', location.pathname + location.search);
        hideAlbum();
    }
}

if (album) {
    window.addEventListener('hashchange', () => {
        const wasOpen = !album.hidden;
        route();
        if (!wasOpen && !album.hidden) canGoBack = true;
    });

    album.querySelector('.album_back').addEventListener('click', closeAlbum);

    // Switch albums without closing (replaces the history entry, no extra Back steps)
    album.querySelectorAll('.album_tabs button').forEach(btn => {
        btn.addEventListener('click', () => {
            history.replaceState(null, '', '#' + btn.dataset.category);
            showAlbum(btn.dataset.category);
        });
    });

    route();   // opens straight into an album if the page was loaded with #travels etc.
}

/* ---------- Lightbox (click a photo to enlarge) ---------- */
let lbImages = [];
let lbIndex = 0;
let lbReturnFocus = null;

function lbShow(i) {
    if (!lbImages.length) return;
    lbIndex = (i + lbImages.length) % lbImages.length;
    const img = lightbox.querySelector('.lb_img');
    const item = lbImages[lbIndex];
    img.src = item.src;
    img.alt = item.alt;
    lightbox.querySelector('.lb_caption').textContent = item.caption;
    lightbox.querySelector('.lb_count').textContent = `${lbIndex + 1} / ${lbImages.length}`;

    // Preload the next and previous photos so flipping through feels instant
    [lbIndex + 1, lbIndex - 1].forEach(n => {
        const neighbour = lbImages[(n + lbImages.length) % lbImages.length];
        if (neighbour) new Image().src = neighbour.src;
    });
}

function lbOpen(images, index) {
    lbImages = images;
    lbReturnFocus = document.activeElement;
    lbShow(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    updateScrollLock();
    lightbox.querySelector('.lb_close').focus();
}

function lbClose() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    updateScrollLock();
    if (lbReturnFocus) lbReturnFocus.focus({ preventScroll: true });
}

if (lightbox) {
    lightbox.querySelector('.lb_close').addEventListener('click', lbClose);
    lightbox.querySelector('.lb_prev').addEventListener('click', () => lbShow(lbIndex - 1));
    lightbox.querySelector('.lb_next').addEventListener('click', () => lbShow(lbIndex + 1));

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lbClose();
    });

    // Swipe left / right on touch screens
    let touchStartX = null;
    lightbox.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) lbShow(lbIndex + (dx < 0 ? 1 : -1));
        touchStartX = null;
    }, { passive: true });
}

if (albumBody) {
    // Open a photo (click, or Enter / Space from the keyboard)
    const openPhoto = (img) => {
        const panel = img.closest('.album_panel');
        const imgs = Array.from(panel.querySelectorAll('.photo_row img'));
        lbOpen(
            imgs.map(i => ({ src: i.dataset.full, alt: i.alt, caption: i.dataset.caption })),
            imgs.indexOf(img)
        );
    };

    albumBody.addEventListener('click', (e) => {
        const img = e.target.closest('.photo_row img');
        if (img) openPhoto(img);
    });

    albumBody.addEventListener('keydown', (e) => {
        const img = e.target.closest('.photo_row img');
        if (img && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            openPhoto(img);
        }
    });
}

/* ---------- Keyboard: one handler so Esc closes only the top layer ---------- */
document.addEventListener('keydown', (e) => {
    const lbIsOpen = lightbox && lightbox.classList.contains('open');
    const albumIsOpen = album && !album.hidden;

    if (lbIsOpen) {
        if (e.key === 'Escape') lbClose();
        if (e.key === 'ArrowLeft') lbShow(lbIndex - 1);
        if (e.key === 'ArrowRight') lbShow(lbIndex + 1);
        return;
    }

    if (albumIsOpen) {
        if (e.key === 'Escape') {
            closeAlbum();
            return;
        }
        // Keep Tab inside the album while it is open
        if (e.key === 'Tab') {
            const focusable = Array.from(album.querySelectorAll('button, [tabindex="0"]'))
                .filter(el => el.offsetParent !== null);
            if (!focusable.length) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }
});

/* Disable right-click */
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false);
