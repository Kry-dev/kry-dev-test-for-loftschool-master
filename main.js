$( document ).ready(function(){
	var courseBlock = $('.wrap_courses');
	var courseBlockCheck = $('.course-checkbox');
	var complete = $('#complete');

	var closeBlock = function(){
		$(courseBlockCheck).on('change', function(){
			if($(this).is(":checked")){
				$(this).closest(courseBlock).addClass('checked');
				$(this).closest(courseBlock).fadeIn().slideUp(1000);

				var elsCountChecked = courseBlock.filter(".checked").length;
				var elsCount = courseBlock.length;

				if (elsCountChecked >= elsCount){
					$(complete).show(1000);
				}
			}
		});
	};
	closeBlock();
});


