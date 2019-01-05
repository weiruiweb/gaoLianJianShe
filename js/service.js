//$(function(){
	
	var paginate = {
	    count: 0,
	    currentPage: 1,
	    pagesize:6,
	    is_page:true,
    };

	//-------banner1----------------
		var post1Data = paginate;
		post1Data.searchItem = {};
		post1Data.searchItem.thirdapp_id =18;
		post1Data.searchItem.id=422;

		
		var callback = function(data){
			
			app.bannerData = data.data;
		};
		
		
		window.base.articleList(post1Data,callback);
		

	//1
	function getArticleData(){
		var postData = paginate;
		postData.searchItem = {};
		postData.searchItem.thirdapp_id = 18;
		postData.searchItem.menu_id=267;


		
		var callback = function(data){
			
			app.productData = data.data;
		};
		
		
		window.base.articleList(postData,callback);

}



//});