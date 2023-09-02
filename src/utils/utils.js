import axios from "axios";

 export const returnCarOptions =(make,year,fuel)=> {
  
 return { method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {make,
    fuel_type:fuel,
    year:year

},
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_CAR_NINJA_KEY,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }}
};


export const fetchCars = async  (make,year,fuel) =>{
  
  
console.log(fuel)
    const myOptions = returnCarOptions(make,year,fuel)
try {
	const response = await axios.request(myOptions);
  console.log(response.data)
	return response.data
} catch (error) {
	console.error(error);
}
}



export const generateCarImageUrl = (car,angle) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGE_KEY || '');
   url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('zoomLevel', zoomLevel);
    if(angle){
 url.searchParams.append('angle', `${angle}`);
    }
   
  
    return `${url}`;
  } 