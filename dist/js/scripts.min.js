
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
            container = document.getElementById( 'container' );
            camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000000 );
            camera.position.z = 1.;
            scene = new THREE.Scene();

            uniforms = {
                iGlobalTime: { type: "f", value: 0.0 },
                audio1: { type: "f", value: 0.0 },
                iResolution: { type: "v2", value: new THREE.Vector2() },
                iChannel0:  { type: 't', value: THREE.ImageUtils.loadTexture( './img/lut-purple02.jpg') },
            };
            uniforms.iChannel0.value.wrapS = uniforms.iChannel0.value.wrapT = THREE.RepeatWrapping;

            material = new THREE.ShaderMaterial( {
                uniforms: uniforms,
                vertexShader: document.getElementById( 'vertexShader' ).textContent,
                fragmentShader: document.getElementById( 'fragmentShader' ).textContent
            });


            var geometry = new THREE.PlaneGeometry( 1, 1 );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.scale.x = window.innerWidth;
            mesh.scale.y = window.innerHeight;

            scene.add(mesh);

            renderer = new THREE.WebGLRenderer();
            container.appendChild( renderer.domElement );
            uniforms.iResolution.value.x =  window.innerWidth;
            uniforms.iResolution.value.y = window.innerHeight;
            renderer.setSize( window.innerWidth, window.innerHeight );
        }
        function animate() {
            requestAnimationFrame( animate );
            render();
        }

        function render() {
            uniforms.iGlobalTime.value += clock.getDelta() *.1;
            renderer.render( scene, camera );
        }


        window.addEventListener( 'resize', onWindowResize, false );
        function onWindowResize() {

            windowHalfX = window.innerWidth / 2,
                windowHalfY = window.innerHeight / 2,

                camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();

            renderer.setSize( window.innerWidth, window.innerHeight );


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


//
// var tl = gsap.timeline({onUpdate:updateSlider, defaults: {duration: 1}}),
//     circle = document.getElementById("circle");
//
// tl.to(circle, {morphSVG:"#hippo"}, "+=1")
//     .to(circle, {morphSVG:"#star"}, "+=1")
//     .to(circle, {morphSVG:"#elephant"}, "+=1")
//     .to(circle, {morphSVG:circle}, "+=1");

// gsap.to()... infinity and beyond!
// To learn how to use GSAP, go to greensock.com/get-started

gsap.registerPlugin(ScrollTrigger);

var tl2 = gsap.timeline();
circle = document.getElementById("circle1");

tl2.to(circle, {
    morphSVG: "#isl1",
    duration: 1,
    scrollTrigger:{
        trigger:".trigger-clipp",
        markers:true,
        scrub:true,
        start:"top top",
    }
}, "+=1")



