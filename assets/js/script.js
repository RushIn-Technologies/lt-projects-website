
'use strict';

document.addEventListener('DOMContentLoaded', function () {

    const body = document.body;

    const header = document.querySelector('[data-header]');
    const navbar = document.querySelector('[data-navbar]');
    const overlay = document.querySelector('[data-overlay]');

    const openButton = document.querySelector('[data-nav-open-btn]');
    const closeButton = document.querySelector('[data-nav-close-btn]');

    const navLinks = document.querySelectorAll('[data-nav-link]');

    const isMobile = function () {
        return window.innerWidth <= 1000;
    };

    /* =========================
       MOBILE MENU
       ========================= */

    const openMenu = function () {

        if (!navbar || !overlay) {
            return;
        }

        navbar.classList.add('active');
        overlay.classList.add('active');

        body.classList.add('menu-open');
    };


    const closeMenu = function () {

        if (navbar) {
            navbar.classList.remove('active');
        }

        if (overlay) {
            overlay.classList.remove('active');
        }

        body.classList.remove('menu-open');

        body.style.removeProperty('overflow');
        body.style.removeProperty('overflow-y');

        document.documentElement.style.removeProperty('overflow');
        document.documentElement.style.removeProperty('overflow-y');
    };


    if (openButton) {
        openButton.addEventListener('click', openMenu);
    }


    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }


    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }


    navLinks.forEach(function (link) {

        link.addEventListener('click', function () {
            closeMenu();
        });

    });


    /* =========================
       HEADER
       ========================= */

    const isInnerPage =
        body.classList.contains('inner-page');


    const updateHeader = function () {

        if (!header) {
            return;
        }


        if (isInnerPage) {

            header.classList.remove('active');

            return;
        }


        if (window.scrollY > 30) {

            header.classList.add('active');

        } else {

            header.classList.remove('active');

        }

    };


    window.addEventListener(
        'scroll',
        updateHeader,
        { passive: true }
    );


    updateHeader();


    /* =========================
       WHATSAPP NUMBER
       ========================= */

    /*
     * LT PROJECTS WhatsApp
     * +91 89041 91522
     *
     * Required format:
     * 918904191522
     */

    const whatsappNumber = '918904191522';


    /* =========================
       FLOATING WHATSAPP BUTTON
       ========================= */

    const whatsappLinks =
        document.querySelectorAll('[data-whatsapp-link]');


    whatsappLinks.forEach(function (link) {

        const message =
            "Hello LT PROJECTS, I'd like to book a site visit.";


        const whatsappURL =
            'https://wa.me/' +
            whatsappNumber +
            '?text=' +
            encodeURIComponent(message);


        link.setAttribute('href', whatsappURL);

        link.setAttribute('target', '_blank');

        link.setAttribute(
            'rel',
            'noopener noreferrer'
        );

    });


    /* =========================
       CONTACT ENQUIRY FORM
       ========================= */

    const contactForm =
        document.getElementById('contact-form');


    if (contactForm) {

        contactForm.addEventListener(
            'submit',
            function (event) {

                /*
                 * Stop the normal form submission.
                 */
                event.preventDefault();


                /* =========================
                   GET FORM FIELDS
                   ========================= */

                const name =
                    document
                        .getElementById('full-name')
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById('phone-number')
                        .value
                        .trim();


                const email =
                    document
                        .getElementById('email-address')
                        .value
                        .trim();


                const interest =
                    document
                        .getElementById('property-interest')
                        .value;


                const message =
                    document
                        .getElementById('message')
                        .value
                        .trim();


                /* =========================
                   VALIDATION
                   ========================= */

                if (
                    name === '' ||
                    phone === '' ||
                    email === '' ||
                    interest === '' ||
                    message === ''
                ) {

                    alert(
                        'Please fill in all the required fields.'
                    );

                    return;
                }


                /* =========================
                   CREATE WHATSAPP MESSAGE
                   ========================= */

                const whatsappMessage =
`Hello LT PROJECTS,

I would like to make an enquiry.

Full Name: ${name}
Phone Number: ${phone}
Email Address: ${email}
Interested In: ${interest}

Message:
${message}`;


                /* =========================
                   CREATE WHATSAPP URL
                   ========================= */

                const whatsappURL =
                    'https://wa.me/' +
                    whatsappNumber +
                    '?text=' +
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* =========================
                   OPEN WHATSAPP
                   ========================= */

                window.location.href = whatsappURL;

            }
        );

    }


    /* =========================
       RESIZE
       ========================= */

    window.addEventListener(
        'resize',
        function () {

            if (!isMobile()) {
                closeMenu();
            }

        }
    );


    /* =========================
       ESC KEY
       ========================= */

    document.addEventListener(
        'keydown',
        function (event) {

            if (event.key === 'Escape') {
                closeMenu();
            }

        }
    );

});
