var AdvCity={
	_isCityFolder:0,
	init:function(){
		if(AdvCity.isBeijing()){
			AdvCity._isCityFolder=1;
		}
		else if(AdvCity.isXian()){
			AdvCity._isCityFolder=2;	
		}
		else if(AdvCity.isShanghai()){
			//AdvCity._isCityFolder=3;	
				AdvCity._isCityFolder=0;
		}
		else if(AdvCity.isHongkong()){
			//AdvCity._isCityFolder=4;	
				AdvCity._isCityFolder=0;
		}
		
		return AdvCity._isCityFolder;	
		 
	},
	//if in beijing folder
	isBeijing:function(){
		var isFolder=false;
		var _url=window.parent.document.location;
		var url=_url.toString();
		var keywords=["/cityguides/beijing","/beijing-olympic/","/attraction/beijing/","/map/beijing/","/climate/beijing","/china-trains/beijing-","/china-trains/high-speed/beijing-","/china-flights/beijing","/picture/beijing/","video.travelchinaguide.com/beijing","community.travelchinaguide.com/beijing"];
		for(var i=0;i<keywords.length;i++)
		{
			if(url.indexOf(keywords[i])!=-1)
			{
				isFolder=true;
				break;
			}
		}
		
		if(!isFolder){//video下所有类型页面
			if($('#idFolder_beijing',parent.document).length>0)
				isFolder=true;
		}
		if(!isFolder){//answer all pages
			if($('.c_path',parent.document).size()>0){
				if($('.c_path',parent.document).html().indexOf('Beijing')>0)
					isFolder=true;	
			}
		}
		
		return isFolder;
	},
	//if in xian folder
	isXian:function(){
		var isFolder=false;
		var _url=window.parent.document.location;
		var url=_url.toString();
		//alert(url);alert(typeof url);
		
		
		var keywords=["/cityguides/xian","/attraction/shaanxi/xian/","/map/xian/","/climate/xian","/china-trains/xian-","/china-trains/high-speed/xian-","/china-flights/xian","/picture/shaanxi/xian/","video.travelchinaguide.com/xian","community.travelchinaguide.com/xian/"];
		for(var i=0;i<keywords.length;i++)
		{
			if(url.indexOf(keywords[i])!=-1)
			{
				isFolder=true;
				break;
			}
		}
		if(!isFolder){
			if(url.indexOf("/china-trains/")>-1 && (url.indexOf("-xian.")>-1 || url.indexOf("-xian-")>-1) )
				isFolder=true;
		}
		if(!isFolder){
			if(url.indexOf("/china-trains/high-speed/")>-1 && url.indexOf("-xian.")>-1)
				isFolder=true;	
		}
		if(!isFolder){
			if(url.indexOf("/china-flights/")>-1 && url.indexOf("-xian.")>-1)
				isFolder=true;	
		}
		
		if(!isFolder){//video下所有类型页面
			if($('#idFolder_xian',parent.document).length>0)
				isFolder=true;
		}
		if(!isFolder){//answer all pages
			if($('.c_path',parent.document).size()>0){
				if($('.c_path',parent.document).html().indexOf('Xian')>0)
					isFolder=true;	
			}
		}
		return isFolder;
		
	},
	//if in shanghai folder
	isShanghai:function(){
		var isFolder=false;
		var _url=window.parent.document.location;
		var url=_url.toString();
		var keywords=["/cityguides/shanghai","/attraction/shanghai/","/map/shanghai/","/climate/shanghai","/china-trains/shanghai-","/china-trains/high-speed/shanghai-","/china-flights/shanghai","/picture/shanghai/","video.travelchinaguide.com/shanghai","community.travelchinaguide.com/shanghai/"];
		for(var i=0;i<keywords.length;i++)
		{
			if(url.indexOf(keywords[i])!=-1)
			{
				isFolder=true;
				break;
			}
		}
		
		if(!isFolder){//video下所有类型页面
			if($('#idFolder_shanghai',parent.document).length>0)
				isFolder=true;
		}
		if(!isFolder){//answer all pages
			if($('.c_path',parent.document).size()>0){
				if($('.c_path',parent.document).html().indexOf('Shanghai')>0)
					isFolder=true;
			}
		}
		return isFolder;
	},
	//if in hongkong folder
	isHongkong:function(){
		var isFolder=false;
		var _url=window.parent.document.location;
		var url=_url.toString();
		var keywords=["/cityguides/hongkong","/attraction/hongkong/","/map/hongkong/","/climate/hongkong","/picture/hongkong/","/essential/area_zip/hongkong","/china-trains/hongkong-","hong-kong","/china-trains/west-kowloon-station.htm","-hongkong.htm","video.travelchinaguide.com/hong-kong","community.travelchinaguide.com/hongkong/"];
		for(var i=0;i<keywords.length;i++)
		{
			if(url.indexOf(keywords[i])!=-1)
			{
				isFolder=true;
				break;
			}
		}
		
		if(!isFolder){//video下所有类型页面
			if($('#idFolder_hong_kong',parent.document).length>0)
				isFolder=true;
		}
		if(!isFolder){//answer all pages
			if($('.c_path',parent.document).size()>0){
				if($('.c_path',parent.document).html().indexOf('Hong Kong')>0)
					isFolder=true;	
			}
		}
		return isFolder;
	}
	
}