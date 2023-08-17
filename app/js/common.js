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


let motherSlider = [...document.querySelectorAll('.mothership-slider')];

function startMotherSlide() {
    if (!motherSlider.length) {

    } else {


        motherSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 700,
                centeredSlides: true,
                touchRatio: 1,
                touchAngle: 180,
                simulateTouch: true,
                freeMode: true,

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
                autoplay: false,
                spaceBetween: 16,


            });


        })

    }
}

startMotherSlide();

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
