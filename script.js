//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

btn.addEventListener('click',downloadImages) ;

function downloadImages(){

	images.map((image)=>{
		const displayImage = document.createElement("img");
		img.src = image.url;
		return new Promise((res,rej)=>{
			
		})
	})
	
}
