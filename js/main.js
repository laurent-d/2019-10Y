// inView('.rvl')
//     .on('enter', function(this){
//         console.log(this);
//         this.classList.add("mystyle")
//     });

    inView.offset(-100);
    inView('.rvl')
    .on('enter', function (el) {
        el.classList.add("inview");
        console.log("inview");
    })
    // .on('exit', function (el) {
    //     el.classList.remove("inview");
    //     console.log("offview");
    // });


    const init = function(){
        cssScrollSnapPolyfill()
    }
    init();