let countEl=document.getElementById('countId');
let btnEl=document.getElementById('btnId');
let clickCount=localStorage.getItem('updatedCount')

if(clickCount===null){
    countEl.textContent=0;
}
else{
    countEl.textContent=clickCount
}

btnEl.onclick=function(){
    let count=countEl.textContent
    updatedCount=parseInt(count)+1;

    localStorage.setItem('updatedCount',updatedCount)
    countEl.textContent=updatedCount


}