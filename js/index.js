//$(function(){
	
	var paginate = {
	    count: 0,
	    currentPage: 1,
	    pagesize:6,
	    is_page:true,
    };

	//-------banner1----------------
		var post1Data = paginate;
		console.log(post1Data);
		post1Data.searchItem = {};
		post1Data.searchItem.thirdapp_id =18;
		post1Data.searchItem.id=420;

		
		var callback = function(data){
			console.log(data);
			
			app.bannerData = data.data;
            console.log(app.bannerData);
		};
		
		
		window.base.articleList(post1Data,callback);
		

	//1
	function getArticleData(){
		var postData = paginate;
		postData.searchItem = {};
		postData.searchItem.thirdapp_id = 18;
		postData.searchItem.menu_id=269;


		
		var callback = function(data){
			console.log(data);
			
			app.productData = data.data;
            console.log(app.productData);
		};
		
		
		window.base.articleList(postData,callback);

}



//});