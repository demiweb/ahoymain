var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();

let mainBlock = document.querySelector('.home-2 .main-home');
// let homeHero = document.querySelector('.home-hero');

function mainBlockScroll() {
    if (mainBlock) {
        let pg = window.pageYOffset - 200;

        mainBlock.style.maskPosition = `0 ${pg}px`;
        mainBlock.style.webkitMaskPosition = `0 ${pg}px`;

        // console.log(mainBlock.scrollTop);

        window.addEventListener('scroll', () => {
            pg = window.pageYOffset - 200;
            // console.log(pg);
            mainBlock.style.maskPosition = `0 ${pg}px`;
            mainBlock.style.webkitMaskPosition = `0 ${pg}px`;
        })
    }
}

mainBlockScroll();


let maximus = document.querySelector('.home-3 .home-main-block__container');
// let homeHero = document.querySelector('.home-hero');

function scrollMapBlock() {
    if (maximus) {
        let pg = window.pageYOffset;

        maximus.style.marginTop = `-${pg}px`;

        // console.log(mainBlock.scrollTop);

        window.addEventListener('scroll', () => {
            pg = window.pageYOffset;
            // console.log(pg);
            maximus.style.marginTop = `-${pg}px`;
        })
    }
}

scrollMapBlock();


//hovering stuff

let hoveringStuff = [...document.querySelectorAll('.hovering-stuff')];

function hoverSomeItems() {
    if (hoveringStuff.length) {
        hoveringStuff.forEach((btn) => {
            let bt = btn.querySelector('.human-btn');

            bt.addEventListener('mouseover', () => {
                btn.classList.add('hover');
            });
            bt.addEventListener('touchstart', () => {
                btn.classList.add('hover');
            });
            bt.addEventListener('mouseout', () => {
                btn.classList.remove('hover');
            });
            bt.addEventListener('touchend', () => {
                btn.classList.remove('hover');
            })
        })
    }
}
hoverSomeItems();
//hovering stuff

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }
                    el.classList.add('done');


                } else {
                    el.classList.remove('done');
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//

let canvasBlock = document.querySelector('.canvas-cont');

function ifHaveCanvasBlock() {
    if (canvasBlock) {
        var container;
        var camera, scene, renderer;
        var uniforms, material, mesh;
        var mouseX = 0, mouseY = 0,
            lat = 0, lon = 0, phy = 0, theta = 0;
        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;
        var startTime = Date.now();
        var clock = new THREE.Clock();

        init();

        animate();

        function init() {
            container = document.getElementById('container');
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000000);
            camera.position.z = 1.;
            scene = new THREE.Scene();

            uniforms = {
                iGlobalTime: {type: "f", value: 0.0},
                audio1: {type: "f", value: 0.0},
                iResolution: {type: "v2", value: new THREE.Vector2()},
                iChannel0: {type: 't', value: THREE.ImageUtils.loadTexture('./img/lut-purple02.jpg')},
            };
            uniforms.iChannel0.value.wrapS = uniforms.iChannel0.value.wrapT = THREE.RepeatWrapping;

            material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: document.getElementById('vertexShader').textContent,
                fragmentShader: document.getElementById('fragmentShader').textContent
            });


            var geometry = new THREE.PlaneGeometry(1, 1);
            var mesh = new THREE.Mesh(geometry, material);
            mesh.scale.x = window.innerWidth;
            mesh.scale.y = window.innerHeight;

            scene.add(mesh);

            renderer = new THREE.WebGLRenderer();
            container.appendChild(renderer.domElement);
            uniforms.iResolution.value.x = window.innerWidth;
            uniforms.iResolution.value.y = window.innerHeight;
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function animate() {
            requestAnimationFrame(animate);
            render();
        }

        function render() {
            uniforms.iGlobalTime.value += clock.getDelta() * .1;
            renderer.render(scene, camera);
        }


        window.addEventListener('resize', onWindowResize, false);

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2,
                windowHalfY = window.innerHeight / 2,

                camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);


            uniforms.iResolution.value.x = window.innerWidth;
            uniforms.iResolution.value.y = window.innerHeight;


        }
    }
}

ifHaveCanvasBlock();


var burger = [...document.querySelectorAll('.burger')];
var burgerX = [...document.querySelectorAll('.burger-x')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        });
        burgerX.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

var controller = new ScrollMagic.Controller();
gsap.registerPlugin(ScrollTrigger);

var tl22 = gsap.timeline();
var tl23 = gsap.timeline();
var tl24 = gsap.timeline();
var tl25 = gsap.timeline();
var tl26 = gsap.timeline();
var tl27 = gsap.timeline();
var tl28 = gsap.timeline();

let btnControlTeeth = [...document.querySelectorAll('.btn-teeth')];

function changeMouth() {
    if (document.querySelector('.case-brief')) {

        let opened = 0;
        btnControlTeeth.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (window.innerWidth > 767) {
                    if (opened === 0) {
                        tl22.to("#main-mouth1", 0.5, {
                            morphSVG: "#main-mouth2",
                            transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl23.to("#back-mouth", 0.5, {
                            morphSVG: "#back-backery2",
                            transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl24.to("#back-backery1", 0.5, {
                            morphSVG: "#back-backery2",
                            transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl25.to("#mouthbot2", 0.5, {transform: 'translate(-336%, -252%)', ease: Power2.easeInOut});
                        document.querySelector('.case-brief').classList.add('opened');
                        document.querySelector('.case-brief__head').classList.add('open');
                        opened = 1;
                    } else {
                        tl22.to("#main-mouth1", 0.5, {
                            morphSVG: "#main-mouth3",
                            transform: 'translate(0, 18%)',
                            ease: Power2.easeInOut
                        });
                        tl23.to("#back-mouth", 0.5, {
                            morphSVG: "#back-mouth2",
                            transform: 'translate(0, 15.9%)',
                            ease: Power2.easeInOut
                        });
                        tl24.to("#back-backery1", 0.5, {
                            morphSVG: "#back-mouth2",
                            transform: 'translate(0, 15.9%)',
                            ease: Power2.easeInOut
                        });
                        tl25.to("#mouthbot2", 0.5, {transform: 'translate(0, 0)', ease: Power2.easeInOut});
                        document.querySelector('.case-brief').classList.remove('opened');
                        document.querySelector('.case-brief__head').classList.remove('open');
                        opened = 0;
                    }
                } else {
                    if (opened === 0) {
                        tl28.to("#clp2", 0.5, {
                            morphSVG: "#clp1",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl22.to("#mprt1", 0.5, {
                            morphSVG: "#mprt12",
                            transform: 'translate(0, 4%)',
                            ease: Power2.easeInOut
                        });
                        tl23.to("#mprt2", 0.5, {
                            morphSVG: "#mprt22",
                            transform: 'translate(0, 4%)',
                            ease: Power2.easeInOut
                        });
                        tl24.to("#mprt3", 0.5, {
                            morphSVG: "#mprt32",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl25.to("#mprt4", 0.5, {
                            morphSVG: "#mprt42",
                            transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl26.to("#mprt5", 0.5, {
                            morphSVG: "#mprt52",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl27.to("#mprt0", 0.5, {
                            morphSVG: "#mprt02",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        document.querySelector('.case-brief').classList.add('opened');
                        document.querySelector('.case-brief__head').classList.add('open');
                        opened = 1;
                    } else {
                        tl28.to("#clp2", 0.5, {
                            morphSVG: "#clp3",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl22.to("#mprt1", 0.5, {
                            morphSVG: "#mprt13",
                            transform: 'translate(0, -17%)',
                            ease: Power2.easeInOut
                        });
                        tl23.to("#mprt2", 0.5, {
                            morphSVG: "#mprt23",
                            transform: 'translate(0, -17%)',
                            ease: Power2.easeInOut
                        });
                        tl24.to("#mprt3", 0.5, {
                            morphSVG: "#mprt33",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl25.to("#mprt4", 0.5, {
                            morphSVG: "#mprt43",
                            transform: 'translate(0, -51%)',
                            ease: Power2.easeInOut
                        });
                        tl26.to("#mprt5", 0.5, {
                            morphSVG: "#mprt53",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        tl27.to("#mprt0", 0.5, {
                            morphSVG: "#mprt03",
                            // transform: 'translate(0 0)',
                            ease: Power2.easeInOut
                        });
                        document.querySelector('.case-brief').classList.remove('opened');
                        document.querySelector('.case-brief__head').classList.remove('open');
                        opened = 0;
                    }
                }


            })
        })
    }
}

changeMouth();

function gsapIf() {
    if (document.querySelector('.trigger-clipp')) {
        var scene2 = new ScrollMagic.Scene({triggerElement: ".trigger-clipp", duration: '60%'})
            // animate color and top border in relation to scroll position
            .setTween(".star-big", {
                marginLeft: "0",
                rotation: 13,
                opacity: 1,
                bottom: "30vh",
                right: "32.5625vw",
                width: "2.6042vw",
                height: "2.6042vw",
                filter: "blur(5px)",
                ease: Linear.easeNone,
            }) // the tween durtion can be omitted and defaults to 1
            .addIndicators({name: "star (duration: 70%)"}) // add indicators (requires plugin)
// .addTo(controller);


        gsap.registerPlugin(ScrollTrigger);

        var tl2 = gsap.timeline();
        circle = document.getElementById("circle1");

        tl2.to(circle, {
            morphSVG: "#isl1",
            duration: 1,
            scrollTrigger: {
                trigger: ".trigger-clipp",
                markers: true,
                scrub: true,
                start: "top top",
            }
        }, "+=1");

        var tl3 = gsap.timeline();

        circle2 = document.getElementById("crs1");

        tl3.to(circle2, {
            morphSVG: "#crs2",
            duration: 10,
            scrollTrigger: {
                trigger: ".home-main-block",
                markers: true,
                scrub: true,
                start: "top top",
            }
        }, "+=1");
    }
}

gsapIf();


//slider circle
let allSLides = [...document.querySelectorAll('.turtle-slider .single-slide')];
let allArrows = [...document.querySelectorAll('.our-clients__right .slick-arrow')];
let allSLidesPrevs = [...document.querySelectorAll('.our-clients__right .single-slide.prev')];
let allSLidesNext = [...document.querySelectorAll('.our-clients__right .single-slide.next')];
let needSlides = 16;

function addMoreSlides() {
    if (allSLides.length) {
        let lof = allSLides.length;
        console.log(lof + ' lenght of slides');

        allSLides.forEach((btn, k) => {


            if (lof === needSlides) {

            } else {
                var clone = btn.cloneNode(true);
                clone.classList.add('clone');
                btn.closest('.slides-dot').appendChild(clone);
                allSLides = [...document.querySelectorAll('.turtle-slider .single-slide')];
                lof = allSLides.length;
            }


        });
        setActivesSlides();
    }
}

addMoreSlides();

function setActivesSlides() {

    allSLides.forEach((btn, k) => {


        if (k === 0) {
            allSLides.forEach((btn2) => {
                btn2.classList.remove('active');
                btn2.classList.remove('prev');
                btn2.classList.remove('prev2');
                btn2.classList.remove('next');
                btn2.classList.remove('next2');
            });

            btn.classList.add('active');

            btn.nextElementSibling.classList.add('next');
            btn.nextElementSibling.nextElementSibling.classList.add('next2');
            btn.nextElementSibling.nextElementSibling.classList.add('next');
            allSLides[allSLides.length - 1].classList.add('prev');
            allSLides[allSLides.length - 2].classList.add('prev2');
            allSLides[allSLides.length - 2].classList.add('prev');
        }


        allSLidesPrevs = [...document.querySelectorAll('.single-slide.prev')];

        // console.log(allSLidesPrevs);
        allSLidesPrevs.forEach((btn3, b) => {

            if (allSLidesPrevs[0].dataset.number === '0') {
                // console.log(allSLidesPrevs[b + 1] + ' b + 1');
                if (allSLidesPrevs[1].dataset.number === '1') {
                    btn3.dataset.dir = -2;
                    allSLidesPrevs[1].dataset.dir = -1;
                } else {
                    btn3.dataset.dir = -1;
                    allSLidesPrevs[1].dataset.dir = -2;
                }
                // console.log('da');

                // allSLidesPrevs[k + 1].dataset.dir = -2;
            } else {
                // console.log('net');
                if (b === 0) {
                    btn3.dataset.dir = -2;

                } else {
                    btn3.dataset.dir = -1;
                }


            }


        });
        allSLidesNext = [...document.querySelectorAll('.single-slide.next')];
        allSLidesNext.forEach((btn4, m) => {
            console.log(allSLides.length - 1 + ' lenght');
            if (btn4.dataset.number === `${allSLides.length - 1}`) {
                console.log(1 + ' tuta');
                if (allSLidesNext[m - 1].dataset.number === '0') {

                    btn4.dataset.dir = 1;
                    allSLidesNext[m - 1].dataset.dir = 2;
                } else {
                    btn4.dataset.dir = 2;
                    allSLidesNext[m - 1].dataset.dir = 1;
                }
            } else {
                if (m === 0) {
                    btn4.dataset.dir = 1;
                } else {
                    btn4.dataset.dir = 2;
                }
            }

        });
    })

}


let step = 360 / allSLides.length;

function getAllSlides() {
    if (allSLides.length) {
        allSLides.forEach((btn, k) => {
            // console.log(btn);
            btn.dataset.number = k;
            let activeAngle = -90;

            let other2 = activeAngle - (step * k);

// console.log(btn.closest('.turtle-slider'));
            let radius = btn.closest('.turtle-slider').offsetWidth / 2;
            let inRads = other2 * (Math.PI / 180);

            var x = Math.cos(inRads) * radius;
            var y = Math.sin(inRads) * radius;
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
            btn.dataset.angle = other2 + 90;


        })
    }
}

let currentAngle = 0;
getAllSlides();


function clickSides2() {
    if (allSLides.length) {
        allSLides.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {

                    btn.classList.add('active');


                    let step2 = btn.dataset.dir * step;
                    // console.log(step2);
                    let realStep = 23;
                    currentAngle = currentAngle + step2;
                    let step3 = btn.dataset.dir * realStep;
                    let stepRot = 0;

                    stepRot = stepRot + step3;
                    // console.log(currentAngle);
                    btn.closest('.turtle-slider').style.transform = `rotate(${currentAngle}deg)`;

                    allSLides.forEach((btn3) => {
                        btn3.style.transform = `translate(-50%, -50%) rotate(${-currentAngle}deg)`;
                    });
                    allSLides.forEach((btn2) => {
                        btn2.classList.remove('active');
                        btn2.classList.remove('prev');
                        btn2.classList.remove('prev2');
                        btn2.classList.remove('next');
                        btn2.classList.remove('next2');

                    });

                    btn.classList.add('active');
                    if (!btn.nextElementSibling) {
                        allSLides[0].classList.add('next');
                        allSLides[1].classList.add('next');
                        allSLides[1].classList.add('next2');
                    }
                    if (btn.nextElementSibling) {
                        btn.nextElementSibling.classList.add('next');
                        if (!btn.nextElementSibling.nextElementSibling) {
                            allSLides[0].classList.add('next2');
                            allSLides[0].classList.add('next');
                        } else {
                            btn.nextElementSibling.nextElementSibling.classList.add('next2');
                            btn.nextElementSibling.nextElementSibling.classList.add('next');
                        }
                    }
                    if (!btn.previousElementSibling) {
                        allSLides[allSLides.length - 1].classList.add('prev');
                        allSLides[allSLides.length - 2].classList.add('prev');
                        allSLides[allSLides.length - 2].classList.add('prev2');
                        allSLides[k + 1].classList.add('next');
                        allSLides[k + 2].classList.add('next');
                        allSLides[k + 2].classList.add('next2');
                    }
                    if (btn.previousElementSibling) {
                        btn.previousElementSibling.classList.add('prev');
                        if (!btn.previousElementSibling.previousElementSibling) {
                            allSLides[allSLides.length - 1].classList.add('prev2');
                            allSLides[allSLides.length - 1].classList.add('prev');
                        } else {
                            btn.previousElementSibling.previousElementSibling.classList.add('prev2');
                            btn.previousElementSibling.previousElementSibling.classList.add('prev');
                        }

                    }
                    let angle = btn.dataset.angle;
                    // console.log(angle);
                    // currentAngle = -angle;


                    allSLides.forEach((bt) => {
                        bt.dataset.dir = '';
                    });
                    allSLidesPrevs = [...document.querySelectorAll('.single-slide.prev')];

                    // console.log(allSLidesPrevs);
                    allSLidesPrevs.forEach((btn3, b) => {

                        if (allSLidesPrevs[0].dataset.number === '0') {
                            // console.log(allSLidesPrevs[b + 1] + ' b + 1');
                            if (allSLidesPrevs[1].dataset.number === '1') {
                                btn3.dataset.dir = -2;
                                allSLidesPrevs[1].dataset.dir = -1;
                            } else {
                                btn3.dataset.dir = -1;
                                allSLidesPrevs[1].dataset.dir = -2;
                            }
                            // console.log('da');

                            // allSLidesPrevs[k + 1].dataset.dir = -2;
                        } else {
                            // console.log('net');
                            if (b === 0) {
                                btn3.dataset.dir = -2;

                            } else {
                                btn3.dataset.dir = -1;
                            }


                        }


                    });
                    allSLidesNext = [...document.querySelectorAll('.single-slide.next')];
                    allSLidesNext.forEach((btn4, m) => {
                        console.log(allSLides.length - 1 + ' lenght');
                        if (btn4.dataset.number === `${allSLides.length - 1}`) {
                            console.log(1 + ' tuta');
                            if (allSLidesNext[m - 1].dataset.number === '0') {

                                btn4.dataset.dir = 1;
                                allSLidesNext[m - 1].dataset.dir = 2;
                            } else {
                                btn4.dataset.dir = 2;
                                allSLidesNext[m - 1].dataset.dir = 1;
                            }
                        } else {
                            if (m === 0) {
                                btn4.dataset.dir = 1;
                            } else {
                                btn4.dataset.dir = 2;
                            }
                        }

                    });
                    // getAllSlides();
                }
            })
        })
    }
}

function clickArrows() {
    if (allArrows.length) {
        allArrows.forEach((btn, k) => {
            btn.addEventListener('click', () => {

                if (btn.classList.contains('slick-next')) {
                    if (document.querySelector('.single-slide.active').nextElementSibling) {
                        document.querySelector('.single-slide.active').nextElementSibling.click();
                    } else {
                        allSLides[0].click();
                    }

                } else {
                    if (document.querySelector('.single-slide.active').previousElementSibling) {
                        document.querySelector('.single-slide.active').previousElementSibling.click();
                    } else {
                        allSLides[allSLides.length - 1].click();
                    }

                }

            })
        })
    }
}

//
//
clickSides2();
clickArrows();


let productSlider = [...document.querySelectorAll('.our-clients__right')];
let slcSlider2 = '';


// soc hovs

let socHovs = [...document.querySelectorAll('.footer-bot__socials .single-footer-soc')];

function hoverSocials() {
    if (socHovs.length) {
        socHovs.forEach((btn) => {
            let hov = btn.dataset.hov;
            let unhov = btn.dataset.unhov;
            let im = btn.querySelector('img');

            btn.addEventListener('mouseover', () => {
                im.src = hov;
            });
            btn.addEventListener('touchstart', () => {
                im.src = hov;
            });
            btn.addEventListener('mouseout', () => {
                im.src = unhov;
            });
            btn.addEventListener('touchend', () => {
                im.src = unhov;
            });
        })
    }
}

hoverSocials();

// scroll to home


let fixedMenus = [...document.querySelectorAll('.fixed-menu-home li a')];

function scrollFixedMenu() {
    if (fixedMenus.length) {
        fixedMenus.forEach((bt) => {
            let dataItem = bt.dataset.lnk;
            bt.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(`.${dataItem}`).offset().top
                }, 500);
            });

        })


    }
}

scrollFixedMenu();


let homeSwiperTurtle = [...document.querySelectorAll('.our-clients__swiper')];

function startHomeTurtle() {
    if (!homeSwiperTurtle.length) {

    } else {


        homeSwiperTurtle.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slick-next');
            let sldPrev = sld.querySelector('.slick-prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                initialSlide: 2,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 25,


            });


        })

    }
}

startHomeTurtle();

let lobbySwiper = [...document.querySelectorAll('.lobby-hero')];

function startLobbySwiper() {
    if (!lobbySwiper.length) {

    } else {


        lobbySwiper.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.service-button.next');
            let sldPrev = sld.querySelector('.service-button.prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                initialSlide: 2,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                autoplay: false,
                spaceBetween: 25,


            });


        })

    }
}

startLobbySwiper();

let motherSlider = [...document.querySelectorAll('.mothership-slider')];

function startMotherSlide() {
    if (!motherSlider.length) {

    } else {


        motherSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: false,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,
                freeMode: false,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                initialSlide: 2,
                navigation: false,
                autoplay: {
                    delay: 3400,
                },
                spaceBetween: 7,
                breakpoints: {
                    767: {
                        spaceBetween: 16,
                        slidesPerView: 3,
                    }
                }


            });


        })

    }
}

startMotherSlide();


let memberStats = [...document.querySelectorAll('.our-memberships__stats')];

function startMemberStats() {
    if (!memberStats.length) {

    } else {


        memberStats.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slick-next');
            let sldPrev = sld.querySelector('.slick-prev');
            let pagin = sld.querySelector('.dots');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: true,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: true,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,

                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,
                autoplay: false,
                spaceBetween: 16,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    clickable: true,
                    bulletActiveClass: 'active',

                    renderBullet: function (index, className) {
                        return '<div class="' + className + '"><svg xmlns="http://www.w3.org/2000/svg" width="26.211" height="27.042" viewBox="0 0 26.211 27.042">\n' +
                            '                            <path\n' +
                            '                                    d="M6166.277,161.934a7.474,7.474,0,0,1-.311-.975c-.058-.3-.017-.621-.053-.929-.1-.89-.3-1.766-.346-2.666a12.249,12.249,0,0,0-.279-1.371c-.089-.515-.141-1.036-.221-1.552-.037-.244-.1-.484-.166-.782a4.936,4.936,0,0,0-2.051.424c-.807.349-1.606.716-2.416,1.058-.9.379-1.8.743-2.7,1.1a4.96,4.96,0,0,1-.58.158c.124-.727.282-1.368.331-2.017a10.279,10.279,0,0,1,.321-2.512.918.918,0,0,0,.01-.218c.037-.516.062-1.033.114-1.547.066-.655.156-1.308.23-1.962.031-.275-.1-.4-.378-.383s-.535.028-.8.069c-1.8.285-3.609.58-5.415.863a2.75,2.75,0,0,0-.908.419c-.465.257-.2.606-.229.914a5.407,5.407,0,0,0,.063.579c.035,1.071.052,2.142.094,3.213.028.746.085,1.491.135,2.325-.4-.08-.747-.122-1.075-.221a8.483,8.483,0,0,1-.963-.388c-.549-.245-1.1-.488-1.637-.755-.416-.206-.82-.439-1.219-.678s-.769-.5-1.173-.757c-.081.048-.252.093-.326.2-.384.566-.715,1.161-1.108,1.726a13.848,13.848,0,0,0-1.348,3.5c-.241.692-.5,1.378-.753,2.067v.073a1.93,1.93,0,0,0,.286.342,1.035,1.035,0,0,0,.485.254c1.095.083,2.195.123,3.291.2.845.063,1.688.173,2.533.243.332.028.668.005,1.091.005a1.629,1.629,0,0,1-.215.393q-1.411,1.224-2.838,2.434c-.264.225-.549.425-.812.651-.53.456-1.062.911-1.568,1.393a.791.791,0,0,0-.263.545.988.988,0,0,0,.354.515c.505.465,1.005.941,1.553,1.352a12.085,12.085,0,0,1,2.387,2.231c.311.4.64.8.985,1.173a.683.683,0,0,0,1.059.091,15.464,15.464,0,0,0,1.3-1.559c.389-.54.713-1.126,1.056-1.7.368-.613.72-1.237,1.088-1.85.145-.242.316-.467.493-.727a.992.992,0,0,1,.136.187c.194.56.413,1.113.565,1.684.223.842.379,1.7.6,2.547.192.737.416,1.466.663,2.187a.551.551,0,0,0,.406.286,1.343,1.343,0,0,0,.7-.132c.708-.387,1.4-.8,2.089-1.23,1-.621,1.962-1.3,2.989-1.874.731-.407,1.544-.665,2.313-1.006.173-.077.429-.21.445-.342a1.154,1.154,0,0,0-.215-.621c-.071-.126-.237-.195-.329-.313-.178-.228-.321-.484-.5-.708-.509-.625-1.05-1.225-1.544-1.862-.47-.607-.9-1.247-1.365-1.906a3.434,3.434,0,0,1,.334-.138c.744-.209,1.487-.421,2.234-.618.567-.149,1.136-.291,1.71-.408.436-.089.881-.141,1.323-.2C6166.348,162.4,6166.407,162.314,6166.277,161.934Z"\n' +
                            '                                    transform="translate(-6140.621 -147.262)" stroke="#000" stroke-miterlimit="10"\n' +
                            '                                    stroke-width="1"/>\n' +
                            '                        </svg></div>';
                    }
                },
            });


        })

    }
}

startMemberStats();


let aboutTurtles = [...document.querySelectorAll('.island-turtles')];

function startTurtleAbout() {
    if (!aboutTurtles.length) {

    } else {
        if (window.innerWidth < 768) {
            aboutTurtles.forEach((sld) => {
                let sldCont = sld.querySelector('.swiper');
                let sldNext = sld.querySelector('.slick-next');
                let sldPrev = sld.querySelector('.slick-prev');

                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    speed: 700,
                    centeredSlides: true,
                    touchRatio: 1,
                    touchAngle: 180,
                    simulateTouch: true,

                    followFinger: true,
                    allowTouchMove: true,
                    threshold: true,
                    touchMoveStopPropagation: true,
                    touchStartPreventDefault: true,
                    touchStartForcePreventDefault: true,
                    touchReleaseOnEdges: true,

                    resistance: true,
                    resistanceRatio: 0.3,
                    cssMode: false,
                    autoplay: false,
                    spaceBetween: 26,
                    initialSlide: 1,

                    navigation: {
                        nextEl: sldNext,
                        prevEl: sldPrev,
                    },
                });


            })
        }
    }
}

startTurtleAbout();


let memberPhotos = [...document.querySelectorAll('.our-memberships__slider')];

function startMemberSlider() {
    if (!memberPhotos.length) {

    } else {

        if (window.innerWidth < 768) {
            memberPhotos.forEach((sld) => {
                let sldCont = sld.querySelector('.swiper');
                let sldNext = sld.querySelector('.slick-next');
                let sldPrev = sld.querySelector('.slick-prev');

                const swiper2 = new Swiper(sldCont, {
                    // Optional parameters
                    loop: false,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    speed: 700,
                    centeredSlides: false,
                    touchRatio: 1,
                    touchAngle: 180,
                    simulateTouch: true,
                    freeMode: false,

                    followFinger: true,
                    allowTouchMove: true,
                    threshold: true,
                    touchMoveStopPropagation: true,
                    touchStartPreventDefault: true,
                    touchStartForcePreventDefault: true,
                    touchReleaseOnEdges: true,

                    resistance: true,
                    resistanceRatio: 0.3,
                    cssMode: false,

                    navigation: {
                        nextEl: sldNext,
                        prevEl: sldPrev,
                    },
                    autoplay: false,
                    spaceBetween: 50,


                });


            })
        }


    }
}

startMemberSlider();

//turtle island move

let turtleIsland = [...document.querySelectorAll('.about-us__island')];

function clickTurtleIsland() {
    if (turtleIsland.length) {
        turtleIsland.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('clicked');
            })
        })
    }
}

clickTurtleIsland();
//turtle island move
let scrollArrowDown = [...document.querySelectorAll('.arrow-down-scroll')];

function scrollDown() {
    if (scrollArrowDown.length) {
        scrollArrowDown.forEach((btn) => {

            btn.addEventListener('click', (e) => {
                let elem = btn.closest('.scroll-anchor').nextElementSibling;
                e.stopPropagation();
                e.preventDefault();
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(elem).offset().top + 50
                }, 500);
            });
        })
    }
}

scrollDown();
// arrow - down - scroll


//control blogshare

let blogSocials = [...document.querySelectorAll('.blog-socials .btn-socials')];

function controlBlogShare() {
    if (blogSocials.length) {
        blogSocials.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.blog-socials').classList.toggle('open');
            })
        })
    }
}

controlBlogShare();

// let playPodcast

let playPodcast = [...document.querySelectorAll('.play-btn')];

function controlPodcast() {
    if (playPodcast.length) {
        playPodcast.forEach((btn) => {
            let frame = btn.dataset.iframe;
            let podcastModal = document.querySelector('.podcast-player');

            btn.addEventListener('click', () => {
                podcastModal.classList.toggle('open');
                podcastModal.querySelector('iframe').src = frame;
            })

        })
    }
}

controlPodcast();


let caseOpenText = [...document.querySelectorAll('.case-hero-btn')];

function controlOpenText() {
    if (caseOpenText.length) {
        caseOpenText.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.case-hero-head').classList.toggle('open');
            })
        })
    }
}

controlOpenText();


//


function ifHaveShips() {
    if (document.querySelector('.ship-moves')) {
        const sections = document.querySelectorAll(".page-section");
        const menuItems = document.querySelectorAll(".ship-links a");
        // function onScroll2() {
        //     var scrollPos = $(document).scrollTop();
        //     $('.ship-links  a[href*="#"]').each(function (index) {
        //         var currLink = $(this);
        //         // console.log(index);
        //         var refElement = $(currLink.attr("href"));
        //         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight(true) > scrollPos) {
        //             currLink.addClass("active");
        //             document.querySelector('.ship-moves').classList.add(`active-${index}`);
        //         } else {
        //             currLink.removeClass("active");
        //             document.querySelector('.ship-moves').classList.remove(`active-${index}`);
        //         }
        //     });
        // }

        sections.forEach((sec, index) => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset - 100 && top < offset + height - 100) {
                const target = document.querySelector(`[href='#${id}']`);
                activeLink(target);
                document.querySelector('.ship-moves').classList.add(`active-${index}`);
            } else {
                document.querySelector('.ship-moves').classList.remove(`active-${index}`);
            }
        });
        function onScroll2() {
            var scrollPos = $(document).scrollTop();

            window.onscroll = () => {
                sections.forEach((sec, index) => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');

                    if (top >= offset - 100 && top < offset + height - 100) {
                        const target = document.querySelector(`[href='#${id}']`);
                        activeLink(target);
                        document.querySelector('.ship-moves').classList.add(`active-${index}`);
                    } else {
                        document.querySelector('.ship-moves').classList.remove(`active-${index}`);
                    }
                })
            };
        }
        function activeLink(li) {
            menuItems.forEach((item) => item.classList.remove('active'));
            li.classList.add('active');
        }


        onScroll2();
        $(document).on("scroll", onScroll2);
// Get all sections that have an ID defined


// Add an event listener listening for scroll
        menuItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let link = btn.getAttribute("href");


                document.body.classList.remove('no-scroll');
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(link).offset().top + Number(btn.dataset.off)
                }, 600);
            })
        });
    }
}

ifHaveShips();



// Получаем нужный элемент
var elementBtns = document.querySelector('.case-hero__top');

var Visible = function (target) {
    if (!document.querySelector('.map-ship')) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.map-ship').classList.remove('show');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.map-ship').classList.add('show');
        }
        ;
    }
    // Все позиции элемента

};
window.addEventListener('scroll', function () {
    Visible(elementBtns);

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible(elementBtns);

var elementBtns2 = document.querySelector('.footer-bot');

var Visible2 = function (target) {
    if (!document.querySelector('.map-ship')) {

    } else {
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 80,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            document.querySelector('.map-ship').classList.remove('show');
        } else {
            // Если элемент не видно, то запускаем этот код
            document.querySelector('.map-ship').classList.add('show');
        }
        ;
    }
    // Все позиции элемента

};
window.addEventListener('scroll', function () {
    Visible(elementBtns2);

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible2(elementBtns2);



let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        if (mod.querySelector('.main-title')) {
                            setTimeout(() => {
                                mod.querySelector('.main-title').classList.add('done');

                            }, 500);
                        }
                        if (mod.classList.contains('modal-video')) {
                            mod.querySelector('iframe').src = btn.dataset.link;
                        }
                    }
                })
            })
        });


        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if (btn.closest('.modal-window').classList.contains('video')) {
                    btn.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');

                    btn.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                }
            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

                if (btn.closest('.modal-window').classList.contains('video')) {
                    btn.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');
                    btn.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                }
            })
        });
        if (clsSecModal.length) {
            clsSecModal.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');
                    if (btn.closest('.modal-window').classList.contains('video')) {
                        btn.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');

                        btn.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                    }

                })
            });
        }
    }
}

controlModal();

