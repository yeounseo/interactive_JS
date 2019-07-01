(function () {

    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const stageElem = document.querySelector('.stage');
    const mousePos = { x: 0, y: 0 };
    let maxScrollValue;



    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function () {
        const scrollPer = pageYOffset / maxScrollValue;
        const zMove = scrollPer * 970 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

        // progress bar 
        barElem.style.width = scrollPer * 100 + '%';
    });


    window.addEventListener('mousemove', function (e) {
        // console.log(e.clientX, e.clientY);
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();
})();


// 전역변수 선언을 피하기위해 즉시 선언 함수에서 작성하는 것이 좋다.