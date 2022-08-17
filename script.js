let name = document.getElementById('name');
let price = document.getElementById('price');
let howmany = document.getElementById('howmany');
let submit = document.getElementById('submit');
let tbody = document.querySelector('tbody');

let i = 1;

submit.addEventListener('click', function () {
    if (name.value == '' || price.value == '' || price.value <= 0 || howmany.value <= 0 || howmany.value == '') {
        alert('Kataklarni to\'ldiring yoki 0 dan katta qiymat kiriting');
    } else {
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        td5.setAttribute('class', 'res');
        let tr = document.createElement('tr');

        td1.innerHTML = i;
        td2.innerHTML = name.value;
        td3.innerHTML = price.value;
        td4.innerHTML = howmany.value;
        td5.innerHTML = price.value * howmany.value;

        tr.append(td1, td2, td3, td4, td5);
        tbody.appendChild(tr);
        i++;
        name.value = '';
        price.value = '';
        howmany.value = '';

        let strong = document.querySelector('strong');
        let res = document.querySelectorAll('.res');
        let sum = 0;
        for (let i = 0; i < res.length; i++) {
            sum = sum + +res[i].innerHTML;
        }
        strong.innerHTML = sum;
    }
});


