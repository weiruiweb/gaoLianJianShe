//$(function(){




var paginate = {
	count: 0,
	currentPage: 1,
	pagesize: 3,
	is_page: true,
};
window.base.currentPageNum = 1;
window.base.menu_id = 282;
	$(".currentpages").html(window.base.currentPageNum);

function tabnav(keyDom) {
	var callback = function(data) {
		app.productData = data.data;
	};
	var paginate = {
		'count': 0,
		'currentPage': 1,
		'pagesize': 3,
		'is_page': true,
		
		searchItem: {
			'thirdapp_id': 18,
			'menu_id': $(keyDom).attr('data-id')
		}
	}
	$(".currentpages").html(window.base.currentPageNum);
	window.base.menu_id = $(keyDom).attr('data-id');

	window.base.articleList(paginate, function(res) {
		app.productData = res.data;
	})

}


	$(".currentpages").html(window.base.currentPageNum);

function pagePage(keyDom) {
	var key = $(keyDom).attr('data-type');
	var judge = true;

	if(key == '2') {
		if(Number(window.base.currentPageNum) < Number(window.base.currentPageJudge)) {
			window.base.currentPageNum++;
			judge = true;
		} else {
			judge = false;
		}

	}
	$(".currentpages").html(window.base.currentPageNum);
	if(key == '1') {
		if(window.base.currentPageNum - 1 > 0) {
			window.base.currentPageNum--;			
			judge = true;
		} else {
			judge = false;
		}

	}

$(".currentpages").html(window.base.currentPageNum);
	if(judge) {
		getPageFun(window.base.menu_id);
	}
}

function getPageFun(id) {
window.base.menuKeyid=id;
	var paginate = {
		'count': 0,
		'currentPage': window.base.currentPageNum,
		'pagesize': 3,
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