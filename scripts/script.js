let url = "";
let file = document.querySelector('#file-input')

file.addEventListener('change', () => {
document.querySelector('#upload').style.visibility = "hidden"
document.querySelector('.loading').style.display = "block"
let fr = new FileReader();
fr.addEventListener('loadend', ()=> {
    let res = fr.result;
    let spt = res.split("base64,")[1];
    let obj = {
    base64: spt,
    type: file.files[0].type,
    name: file.files[0].name
    }
    fetch(url, {
    method: "POST",
    body: JSON.stringify(obj)
    })
    .then(r => r.text())
    .then(data => {
    document.getElementById('cvlink').value = data
    document.querySelector('.loading').style.display = 'none'
    document.getElementById('upload').style.visibility = "visible"
    document.getElementById('upload').innerHTML = "Uploaded"
    });
})
fr.readAsDataURL(file.files[0])
})