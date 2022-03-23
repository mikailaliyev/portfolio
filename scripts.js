let myVideo = document.getElementById('myVideo')


myVideo.addEventListener('mouseover', () => {    
    myVideo.className = 'myVideo'
    setTimeout(()=>{
        myVideo.play();
    },1600)
});
myVideo.addEventListener('mouseout', () => {
    myVideo.pause();
});

let myVideo2 = document.getElementById('myVideo2')


myVideo2.addEventListener('mouseover', () => {    
    myVideo2.className = 'myVideo'
    setTimeout(()=>{
        myVideo2.play();
    },1600)
});
myVideo2.addEventListener('mouseout', () => {
    myVideo2.pause();
});




