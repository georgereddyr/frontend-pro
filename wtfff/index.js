function randomNum(num, elem) {
    const error = document.getElementById('error');
    let l = document.getElementById(elem);
    let n = -1;
    let interval = setInterval(() => {
        n += 1;
        l.innerHTML = n;

        if (n == num) {
            n = -1;
        }
    }, 90);
    l.addEventListener('click', () => {
        clearInterval(interval);
    });
    error.addEventListener('click', () => {
        clearInterval(interval);
        n = -1;
        interval = setInterval(() => {
            n += 1;
            l.innerHTML = n;
    
            if (n == num) {
                n = -1;
            }
        }, 90);
    });
}


randomNum(9, 1);
randomNum(9, 2);
randomNum(9, 3);
randomNum(9, 4);
randomNum(9, 5);
randomNum(9, 6);
randomNum(9, 7);
randomNum(9, 8);
randomNum(9, 9);