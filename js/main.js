// inView('.rvl')
//     .on('enter', function(this){
//         console.log(this);
//         this.classList.add("mystyle")
//     });

    inView('.rvl')
    .on('enter', function (el) {
        el.classList.add("inview");
    })
    // .on('exit', function (el) {
    //     el.classList.remove("inview");
    // });


    const init = function(){
        cssScrollSnapPolyfill()
    }
    init();