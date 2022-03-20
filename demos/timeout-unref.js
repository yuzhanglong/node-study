const timer1 = setTimeout(() => {
    console.log('hello world!')
}, 1000);

const timer2 = setTimeout(() => {
    console.log('hello world2!')
}, 2000);

timer2.unref();