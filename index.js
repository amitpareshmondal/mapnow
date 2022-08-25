var current_city=5;
const fetchUsers = () => {
    var data={"mail":"mandalamit325@gmail.com"};
    axios.get('https://reqres.in/api/users')
        .then(response => {
            
            const users = response.data;
            console.log(`GET list users`, users);
            // append to DOM
        })
        .catch(error => console.error(error));
};
fetchUsers();
const cities=["Delhi","Amritsar","Shimla","Darjeeling","Gangtok","Kolkata"];
const locat=[[28.7041,77.1025],
[31.6340,74.8723],
[31.1048,77.1734],
[27.0410,88.2663],
[27.3314,88.6138],
[22.5726,88.3639]
]
var zoom=5;
var map = L.map('map').setView(locat[current_city], zoom);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Amit Mondal';
const tiles=L.tileLayer(tileUrl,{attribution});
tiles.addTo(map);  

// c=1;
// lc=1;
const loc_visited=[];
const visited=[];
// L.marker([28.7041,77.1025]).addTo(map)
//     .bindPopup('Delhi')
//     .openPopup();
const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  for(var i=0;i<=current_city;i++){
    visited.push(cities[i]);
    loc_visited.push(locat[i]);
}
// L.motion.polyline(loc_visited, {
// 	color: "transparent"
// }, {
// 	auto: true,
// 	duration: 3000,
// 	easing: L.Motion.Ease.easeInOutQuart
// }, {
// 	removeOnEnd: true,
// 	showMarker: true,
// 	icon: L.divIcon({html: "<i class='fa fa-car fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24)})
// })
// var myMovingMarker=L.Marker.movingMarker(loc_visited,[2000]).addTo(map);
// myMovingMarker.start();
var control = L.Routing.control({
    waypoints: [
        L.latLng(57.74, 11.94),
        L.latLng(57.6792, 11.949)
    ],
    lineOptions: {
        styles: [{className: 'animate'}] // Adding animate class
    },
    routeWhileDragging: true
}
)
function makecities(){
    // const poly=L.polyline(loc_visited);

    // for(var i=0;i<visited.length;i++){
    
    //     if(i==visited.length-1){
    //         L.marker(loc_visited[i],{icon: redIcon}).addTo(map).bindPopup(visited[i]).openPopup().on('click',onClick);
    //     }
    //     else{
    //         L.marker(loc_visited[i]).addTo(map).bindPopup(visited[i]).openPopup().on('click',onClick);
    //     }
    // }
    // poly.addTo(map);
}
function onClick(){
    window.location.replace("grandpa"+".html");

}
// document.addEventListener('keydown',()=>{
//     visited.push(cities[c]);
//     loc_visited.push(locat[lc]);
//     console.log(visited);
//     console.log(loc_visited);
//     makecities();
//     c++;
//     lc++;
// })
// L.marker([28.7041,77.1025]).addTo(map).bindPopup("Delhi").openPopup().on('click', onClick);
// L.marker([23.0225,72.5714]).addTo(map).bindPopup("Ahemdabad").openPopup();
// L.marker([19.0760,72.8777]).addTo(map).bindPopup("Mumbai").openPopup();
// L.marker([13.0827,80.2707], {icon: redIcon}).addTo(map).bindPopup("Chennai").openPopup();
makecities();
// poly.addTo(map);
control.addTo(map)