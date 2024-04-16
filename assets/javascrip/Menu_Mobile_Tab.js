// Lấy tham chiếu đến thẻ div và thẻ cần hiển thị khi hover
const divElement = document.querySelector('.header-introduce');
const otherElement = document.querySelector('.Bottom_Menu_Mobile');

// Gắn sự kiện hover vào thẻ div
divElement.addEventListener('click', function() {
  otherElement.style.display = 'block'; // Hiển thị thẻ khác
});

//Ẩn khi bấm ra ngoài 
document.addEventListener('click', function(event) {
    const target = event.target;
    if (!divElement.contains(target) && !otherElement.contains(target)) {
      otherElement.style.display = 'none';
    }
  });
//--------------------------------------------------------------------
const Bottom_Menu_Mobile=document.querySelector('.Bottom_Menu_Mobile');
const Menu=document.querySelector('.Menu_Mobile_Tab');

Bottom_Menu_Mobile.addEventListener('click',function(){
    Menu.style.display='block';
})

document.addEventListener('click', function(event) {
    const target = event.target;
    if (!Bottom_Menu_Mobile.contains(target) && !Menu.contains(target)) {
      Menu.style.display = 'none';
    }
  });

//--------------------------------------------------------------------
const Bottom_SP=document.querySelector('#Bottom_SP');
const DS_SP=document.querySelector('.DS_SP');

Bottom_SP.addEventListener('click',function(){
    DS_SP.style.display='block';
})

document.addEventListener('click', function(event) {
    const target = event.target;
    if (!Bottom_SP.contains(target) && !DS_SP.contains(target)) {
      DS_SP.style.display = 'none';
    }
  });

