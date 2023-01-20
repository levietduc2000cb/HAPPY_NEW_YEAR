const TEXT_CONGRATULATION = [
  "Năm mới đã sang, chúc bạn vạn điều mới, triệu niềm vui, thật giàu năng lượng cho mỗi ngày, luôn hạnh phúc ngập tràn và may mắn luôn mỉm cười. Xuân Quý Mão thật thành công bạn nhé!",
  "Năm mới đã sang, chúc bạn nhiều sức khỏe, miệng cười vui vẻ, tiền vào mạnh mẽ, mọi việc suôn sẻ, cuộc đời đẹp đẽ.",
  "Năm mới năm me, chúc bạn 12 tháng phú quý, 365 ngày phát tài, 8760 giờ sung túc, 525600 phút thành công, 31536000 giây vạn sự như ý.",
  "Chúc bạn năm mới: Có nhiều người để ý - tỏ tình nhiều ý - tiền nhiều nặng ký - công việc vừa ý - miệng cười mắt ti hí - sống lâu một tí.",
  "Chúc bạn có một bầu trời sức khỏe, một biển cả tình thương, một đại dương tình bạn, một điệp khúc tình yêu, một người yêu chung thủy, một sự nghiệp sáng ngời, một gia đình thịnh vượng. Chúc cả gia đình bạn vạn sự như ý, tỉ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến!",
  "Chúc năm mới 2023 sức khỏe dẻo dai, công việc thuận lợi, thăng tiến dài dài, phi những nước đại, tiến tới thành công.",
  "Chúc người bạn thân yêu của tôi một năm mới luôn gặp những điều tốt đẹp nhất. Sức khỏe dồi dào, vạn sự như ý, trẻ mãi không già nhé.",
  "Chúc mày sang năm mới sức khỏe dồi dào, sự nghiệp hanh thông, tài cao chí lớn thỏa sức vẫy vùng nhé. Mệt mỏi quá thì dừng lại nghỉ ngơi, tao vẫn luôn bên cạnh mày đấy. Chúc mừng năm mới nhé bạn yêu!",
  "Thay mặt Đảng, Nhà nước, Chính phủ, Quốc hội, Mặt trận Tổ quốc, các cơ quan đoàn thể, anh em bạn bè gần xa, bà con lối xóm mình chúc bạn và gia đình năm mới an khang thịnh vượng, vạn sự như ý, còn bạn sớm có người thương.",
  "Một lời chào mong một ngày may mắn. Một lới nhắn nhủ mong bạn thành công. Một lời chúc mong bạn ấm lòng. Một nụ cười để vượt qua tất cả. Một ý chí để đập tan vất vả, lo âu. Một năm mới tràn đầy niềm vui và hạnh phúc. Chúc mừng năm mới 2023.",
];
var buttonActive = document.querySelector(".button button");
var congratulationText = document.querySelector(".congratulation_text");
congratulationText.textContent =
  TEXT_CONGRATULATION[Math.floor(Math.random() * 10)];
buttonActive.onclick = function () {
  var boxFlower = document.querySelector(".flower-img:nth-child(1)");
  var boxFlower2 = document.querySelector(".flower-img:nth-child(2)");
  var boxFlower3 = document.querySelector(".flower-img:nth-child(3)");
  var boxFlower4 = document.querySelector(".flower-img:nth-child(4)");
  var boxFlower5 = document.querySelector(".flower-img:nth-child(5)");
  var boxFlower6 = document.querySelector(".flower-img:nth-child(6)");
  var circleActive = document.querySelector(".circle");
  var boxsliderimg1 = document.querySelector(".box-slider_img1");
  var catActive = document.querySelector(".cat");
  var numberActive = document.querySelector(".box-number");
  var buttonDisplay = document.querySelector(".box-button");
  var rhombus1 = document.querySelector(".rhombus:nth-child(1)");
  var rhombus2 = document.querySelector(".rhombus:nth-child(2)");
  var rhombusImg = document.querySelector(".rhombus-img");
  var mailActive = document.querySelector(".mail");

  boxFlower.classList.toggle("active");
  boxFlower2.classList.toggle("active");
  boxFlower3.classList.toggle("active");
  boxFlower4.classList.toggle("active");
  boxFlower5.classList.toggle("active");
  boxFlower6.classList.toggle("active");
  circleActive.classList.toggle("active");
  boxsliderimg1.classList.toggle("active");
  catActive.classList.toggle("active");
  numberActive.classList.toggle("active");
  buttonDisplay.classList.toggle("active");
  rhombus1.classList.toggle("active");
  rhombus2.classList.toggle("active");
  rhombusImg.classList.toggle("active");
  mailActive.classList.toggle("active");
};

var mail = document.querySelector(".mail");
var slider3 = document.querySelector(".slider3");
var closeSlider3 = document.querySelector(".fa-xmark");
mail.onclick = function () {
  slider3.classList.add("active");
};
closeSlider3.addEventListener("click", function () {
  slider3.classList.remove("active");
});

// ------audio------------
var buttonSong = document.querySelector(".button");
var mySong = document.getElementById("song");
buttonSong.onclick = function () {
  if (mySong.paused) {
    mySong.play();
  }
};
