window.addEventListener('load',()=>{
let progressBars = document.querySelectorAll('.progress-bar');
let values = [
'80',
'85',
'70',
'75',
'90',
];
progressBars.forEach((progress,index)=>{
progress.style.width = values[index];
});
});