const baseUrl = "http://127.0.0.1:22/";

let formInfo = {
    'names': '',
    'tel': '',
    'email': '',
    'guestNum': '',
    'date': '',
    'time': ''
}

function saveMail() {
    var element = document.getElementById('mce-EMAIL');
    saving(element.value);
}

async function saving(information) {
    if (!information) {return};
    
    const res = await fetch(baseUrl + 'info', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({parcel : information})
    });
}


function getForm() {
    var fullName = document.getElementsByClassName('form-control');
    var length = 6;
    var num = 0;

    Object.keys(formInfo).forEach(key => {
        formInfo[key.toString()] = fullName[num].value;
        num++;
    })
    sendInfo(formInfo);
    for (let index = 0; index < length; index++) {
        fullName[index].value = '';
    }
}

async function sendInfo(information) {
    if (!information) {return};
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({parcel: information})
    });
}

