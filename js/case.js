//$(function(){



var paginate = {
	count: 0,
	currentPage: 1,
	pagesize: 6,
	is_page: true,
};

window.base.currentPageNum = 1;
window.base.menu_id = 275;

function tabnav(keyDom) {
	var callback = function(data) {
		app.productData = data.data;
	};
	var paginate = {
		'count': 0,
		'currentPage': 1,
		'pagesize': 6,
		'is_page': true,
		
		searchItem: {
			'thirdapp_id': 18,
			'menu_id': $(keyDom).attr('data-id')
		}
	}
	window.base.menu_id = $(keyDom).attr('data-id');

	window.base.articleList(paginate, function(res) {
		app.productData = res.data;
	})

}

function pagePage(keyDom) {
	
	var key = $(keyDom).attr('data-type');
	var judge = true;
	
	
	if(key == '2') {
		if(Number(window.base.currentPageNum) < Number(window.base.currentPageJudge)) {
			window.base.currentPageNum++;			
			$(".currentpages").html(window.base.currentPageNum);
			judge = true;
		} else {
			judge = false;
		}

	}
	if(key == '1') {
		if(window.base.currentPageNum > 1) {
			window.base.currentPageNum--;		
			$(".currentpages").html(window.base.currentPageNum);
			judge = true;
		} else {
			judge = false;
		}

	}

	if(judge) {
		getPageFun(window.base.menu_id);
	}
}

function getPageFun(id) {
window.base.menuKeyid=id;
	var paginate = {
		'count': 0,
		'currentPage': window.base.currentPageNum,
		'pagesize': 6,
		'is_page': true,

		searchItem: {
			'thirdapp_id': 18,
			'menu_id':id,
		}
	}
	window.base.articleList(paginate, function(res) {
		app.productData = res.data;
		window.base.currentPageJudge = res.last_page;	
		
	})
}

function getArticleData() {

	getPageFun(window.base.menu_id);


	//-------banner1----------------
		var post1Data = paginate;
		post1Data.searchItem = {};
		post1Data.searchItem.thirdapp_id =18;
		post1Data.searchItem.id=422;

		
		var callback = function(data){
			
			app.bannerData = data.data;
		};
		
		
		window.base.articleList(post1Data,callback);

}

//})