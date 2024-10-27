import Link from "next/link";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-[#f2d8ec] to-[#faf0f8] text-[#ebd9cb]">
      
      <Navbar />

      {/* Header Image Section */}
      <div className="bg-cover bg-center w-full items-center place-content-center justify-items-center"
      style={{ backgroundImage: "url('https://utfs.io/f/ShHtJId4pBZ8S5vgDd4pBZ8169eqb2kYmvuhwTERGKL0yMVF')", height: "35rem"}}>
        <h1 className = "font-bold" 
        style={{fontSize: '80px', fontFamily: 'cursive', textShadow: '-8px 0px 2px #6e5579, 2px -2px 0px #6e5579, -2px 2px 0px #6e5579, 2px 2px 0px #6e5579'}}> Make Studying Fun </h1>
      </div>

      {/* Main Content Section */}

      <div className="flex-column items-center justify-center text-center">
        {/* About Page */}
        <div className = "flex-column items-center justify-center text-center bg-[#a6c2b1] text-[#576280] p-2 w-full">
          <h1 className ="text-5xl font-bold pt-10" style = {{fontFamily: "cursive"}}> Meet your study pawtner, Simba! </h1>
          <div className = "flex place-content-center">
            <div className = "text-wrap text-xl p-10 w-3/6 justify-center pt-10"> 
            Simba is your small, cheerful Pomeranian study buddy, here to support your learning journey! 
            Complete Pomodoro study sessions and assignments to earn XP and help Simba grow. 
            Simba’s mood will reflect your daily progress, so keep working hard to keep him happy!
            <div className ="pt-20">
            <span className="bg-gray-100 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
              Mood: Neutral
            </span>
            </div>
            </div>
        
            <div >
            <img className="h-70 w-80" src="https://utfs.io/f/ShHtJId4pBZ8vF9M4y0jtNhmgTnjxbrzUYMcKW60SuvqHBLC"></img>
            XP Level:
            <div className = "flex">
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" 
              style= {{width: "45%"}}> 45%
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>

        {/* Pomodoro Timer */}
        <div className="flex p-10">
          <div className="box-content h-52 w-4/6 p-4 items-center justify-center">
              <h1 className="font-bold text-5xl" style={{
                fontFamily: 'cursive', textShadow: '-1px 0px 0px #6e5579, 2px 2px 2px #6e5579, 2px 2px 0px #6e5579, 2px 2px 0px #6e5579'
              }}>Pomodoro Timer</h1>
              < Timer/>
          </div>

        {/* Assignments */}
          <div className="box-content h-52 w-3/6 p-4 items-center justify-center">
            <h1 className="font-bold text-5xl" style={{
              fontFamily: 'cursive', textShadow: '-1px 0px 0px #6e5579, 2px 2px 2px #6e5579, 2px 2px 0px #6e5579, 2px 2px 0px #6e5579'
              }}>Assignments</h1>

          </div>
        </div>

        {/* XP Trackers */}
        <div className = "box-content h-32 w-50 p-4 flex justify-center text-center">
        <h1 className="font-bold text-5xl"
        style={{ fontFamily: 'cursive', textShadow: '-1px 0px 0px #6e5579, 2px 2px 2px #6e5579, 2px 2px 0px #6e5579, 2px 2px 0px #6e5579'}}>
          XP Earned:
          </h1>
          
        </div>
      </div>
    </main>
  );
}
