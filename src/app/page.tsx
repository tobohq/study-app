import Link from "next/link";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className= "bg-gradient-to-b from-[#f2d8ec] to-[#faf0f8] text-white">
      <Navbar />
      
      <div className="bg-cover h-48 w-64"
      style={{ backgroundImage: "url('https://utfs.io/f/ShHtJId4pBZ8S5vgDd4pBZ8169eqb2kYmvuhwTERGKL0yMVF')" }}></div>

      <div className = "flex min-h-screen flex-col items-center justify-center text-darkgrey">
        <div className = "flex flex-wrap">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Est nullam hac purus at fusce cras justo suscipit ultrices. Dapibus maecenas cursus nec felis taciti nulla pellentesque interdum. Nam finibus quis dis dis lorem vitae tempor pulvinar. Orci augue suspendisse netus netus aptent. Litora ultricies ipsum iaculis viverra magnis nam id urna.
        Placerat luctus vel mus ultricies torquent parturient? Conubia leo posuere blandit justo elementum massa. Mollis ultrices erat sagittis sed tortor. Pulvinar adipiscing at eleifend litora luctus vulputate nostra. Lectus augue ad netus leo vel lacinia primis. Facilisis ac etiam aliquet fermentum magnis dictumst. Fermentum duis ipsum eget magna hac.
        Congue pharetra enim mollis egestas cursus metus iaculis penatibus. Tempor velit lacus; molestie nunc mus tempus? Nascetur fusce gravida habitasse consectetur velit posuere. In arcu ridiculus, et erat ex efficitur donec netus. In primis eros, nulla sit diam semper. Non per eros semper; nibh nec euismod. Ad faucibus facilisi facilisis diam conubia.
        ipsum dignissim a phasellus maximus gravida. Ornare sed habitant dui eleifend sociosqu fringilla gravida etiam. Integer velit laoreet maecenas himenaeos dolor himenaeos. Pulvinar lobortis ornare dictum porta vel facilisi platea? Sodales quam porttitor ullamcorper nullam euismod morbi nostra. Quis diam nec turpis non nibh vestibulum nisl leo. Fusce blandit vulputate elementum volutpat donec nascetur arcu maximus sollicitudin. Erat blandit quam tellus ligula aliquet risus etiam. Aquis massa elit fames condimentum mattis curae dolor. Hac nulla malesuada ullamcorper quis condimentum. 
        </div>
      </div>
    </main>
  );
}
