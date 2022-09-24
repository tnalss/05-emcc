/*jQuery에서
$(function() {
	$("#detail").click(function() {
		$(".item-detail").removeClass("d-none");
		//.show("fast";)
	})

	$("#close").click(function() {
		$(".item-detail").addClass("d-none");
	})
})
*/


/* 자바스크립트에서 */
window.addEventListener("DOMContentLoaded", function() {

	const detailOpen = document.querySelector("#detail");
	const detailClose = document.querySelector("#close");
	const displayArea = document.querySelector(".item-detail");

	detailOpen.addEventListener("click", function() {
		displayArea.classList.remove('d-none');
	})
	detailClose.addEventListener("click", function() {
		displayArea.classList.add('d-none');
	})
	
	const smallImg= document.querySelectorAll(".small-img li");
	const img1=document.querySelector("#img1");
	
	smallImg[0].addEventListener("click",function(){
		img1.setAttribute("src","images/items1.png");
		img1.classList.add('wd');
	})
	smallImg[1].addEventListener("click",function(){
		img1.setAttribute("src","images/items2.png");
		img1.classList.add('wd');
	})
	smallImg[2].addEventListener("click",function(){
		img1.setAttribute("src","images/items3.png");
		img1.classList.add('wd');
	})
	



})