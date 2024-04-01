let before = document.getElementById('before');
let after = document.getElementById('after');
let inside =document.getElementById("inside");
let container = document.getElementById('container');
let para = document.getElementById("content");
let body = document.body

before.onclick = function(){
    body.appendChild(container);
    body.appendChild(para)
   // container.before(para);

}
after.onclick = function(){
   //container.after(para);
   body.appendChild(para);
   body.appendChild(container);

}
inside.onclick = function () {
    //container.append(para)
    body.appendChild(container);
    container.appendChild(para);
}
