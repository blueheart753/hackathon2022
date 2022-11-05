$(document).ready(function () {
	$(".interducePic").not(".active").hide();
	nextSlide()
	setInterval(nextSlide,4000);
});

function prevSlide() {
	$(".interducePic").hide();
	var allSlide = $(".interducePic");
	var currentIndex = 0;

	$(".interducePic").each(function (index, item) {
		if ($(this).hasClass("active")) {
			currentIndex = index;
		}

	});

	var newIndex = 0;

	if (currentIndex <= 0) {
		newIndex = allSlide.length - 1;
	} else {
		newIndex = currentIndex - 1;
	}

	$(".interducePic").removeClass("active");
	$(".interducePic").eq(newIndex).addClass("active");
	$(".interducePic").eq(newIndex).show();

}

function nextSlide() {
	$(".interducePic").hide();
	var allSlide = $(".interducePic");
	var currentIndex = 0;

	$(".interducePic").each(function (index, item) {
		if ($(this).hasClass("active")) {
			currentIndex = index;
		}

	});

	var newIndex = 0;

	if (currentIndex >= allSlide.length - 1) {
		newIndex = 0;
	} else {
		newIndex = currentIndex + 1;
	}

	$(".interducePic").removeClass("active");
	$(".interducePic").eq(newIndex).addClass("active");
	$(".interducePic").eq(newIndex).show();
}