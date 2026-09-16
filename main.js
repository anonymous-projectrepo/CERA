const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.08
    }
);


document
    .querySelectorAll('.reveal')
    .forEach(el => observer.observe(el));



// ========================
// Figure Lightbox
// ========================

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('img');
const lightboxClose = document.querySelector('.lightbox-close');


// 여러 figure 확대 지원
document
    .querySelectorAll('.figure-zoom')
    .forEach(button => {

        button.addEventListener(
            'click',
            () => {

                const img = button.querySelector('img');

                lightboxImg.src = img.src;

                lightbox.classList.add('open');

            }
        );

    });


// X 버튼 닫기
lightboxClose.addEventListener(
    'click',
    () => {

        lightbox.classList.remove('open');

    }
);


// 배경 클릭 닫기
lightbox.addEventListener(
    'click',
    event => {

        if (event.target === lightbox) {

            lightbox.classList.remove('open');

        }

    }
);


// ESC 닫기
document.addEventListener(
    'keydown',
    event => {

        if (event.key === 'Escape') {

            lightbox.classList.remove('open');

        }

    }
);