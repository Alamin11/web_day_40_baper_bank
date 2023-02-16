document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log("submit btn clicked")
    const email = document.getElementById('email').value;
    // console.log(email);
    const password = document.getElementById('password').value;
    // console.log(password);
    if (email === 'alamincsecu@gmail.com' && password === 'ami@gmail2') {
        window.location.href = 'bank.html';
    } else {
        alert('Tui amar sontan na');
    }

});