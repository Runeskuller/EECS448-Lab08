var pics = ["https://www.bushbeans.com/-/jssmedia/BushsBeans/Bean-song/Hero_Carousel_BeanBackground.jpg?h=1080&iar=0&w=1920&hash=9EFEADD0CD7CC0D5BA58B5BDFAB43DB6",
			"https://post.healthline.com/wp-content/uploads/2020/09/kidney-beans-732x549-thumbnail.jpg",
			"https://www.recipetineats.com/wp-content/uploads/2014/05/Homemade-Heinz-Baked-Beans_0-SQ.jpg",
			"https://media.istockphoto.com/photos/close-up-of-baked-beans-in-a-pan-picture-id969582980",
			"https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4637,w_6962,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shelley-pauls-t4X660oKiYs-unsplash_mmpaih.jpg"]

var picNum = 0;

function next(){

	if(picNum == pics.length -1){
		picNum = 0;
	}
	else{
		picNum++;
	}
	var image = document.getElementById("image")
	image.src = pics[picNum];
	
}

function previous(){
	if(picNum == 0){
		picNum = pics.length;
	}
	else{
		picNum--;
	}
	var image = document.getElementById("image")
	image.src = pics[picNum];
}