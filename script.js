//your code here!
//your code here!
let totalList=10;
let OlList=document.getElementById('infi-list');

window.addEventListener('load',()=>{
    for(let i=1;i<=totalList;i++){
        let li=document.createElement('li');
        li.innerText=`Item ${i}`;
        OlList.append(li);
        }
});


OlList.addEventListener('scroll',()=>{
    // console.log('hello');
    // console.log(OlList.scrollTop);
   // let top=Math.floor(OlList.scrollTop);
//   console.log(top);
//    console.log(OlList.scrollHeight);
let height=OlList.offsetHeight;
let offset=OlList.scrollTop;

if(offset+height>=OlList.scrollHeight){
    console.log('at bottom');

    for(let i=1;i<=2;i++){
        let li=document.createElement('li');
        li.innerText=`Item ${++totalList}`;
        OlList.append(li);
        }
}
})
