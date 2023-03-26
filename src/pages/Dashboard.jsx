import React from "react";
import SwiperContainer from "./SwiperContainer.jsx";

export default function Dashboard() {
  const Slides = [
    {
      img: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      title: "Vinhomes Ocean Park 2 - The Empire",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/2/755/HD-wallpaper-nature-beautiful.jpg",
      title: "Sao Biển",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?cs=srgb&dl=pexels-luis-dalvan-1770809.jpg&fm=jpg",
      title: "Đảo Dừa",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      title: "Kinh Đô Ánh Sáng",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://us.123rf.com/450wm/trutta/trutta1904/trutta190400155/121390225-idyllic-landscape-lonely-tree-among-green-fields-in-the-background-blue-sky-and-white-clouds.jpg?ver=6",
      title: "Masteri West Heights",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://w0.peakpx.com/wallpaper/960/845/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg",
      title: "Masteri West Heights",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://i.pinimg.com/550x/73/f1/84/73f1846f846cc86a1ad7aa13cc3813d6.jpg",
      title: "Vinhomes Smart City",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&w=600",
      title: "The Sapphire",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
    {
      img: "https://www.wallpapertip.com/wmimgs/20-202635_nature-hd-wallpaper-for-android.jpg",
      title: "The Pavilion",
      content: "Vị trí chiến lược phía Đông, cực địa đầu tam giác kinh tế vàng Hà Nội – Hải Phòng – Quảng Ninh.",
    },
  ];
  return (
    <div>
      <div className="md:hidden">
        <SwiperContainer isDesktop={false} slides={Slides} />
      </div>
      <div className="hidden md:block">
        <SwiperContainer slides={Slides} />
      </div>
    </div>
  );
}
