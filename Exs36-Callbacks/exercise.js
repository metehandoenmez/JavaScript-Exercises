function repeatHello(callback) {
    let id = setInterval(callback , 1000);
    setTimeout(() => {
        clearInterval(id);
    }, 5000);
    }
    
    let cbfunc = () => {
        console.log("Hello");
    }
    
    repeatHello(cbfunc);
