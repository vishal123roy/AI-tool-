import { X } from "lucide-react";

const RecentSearch = ({recentHistory,setRecentHistory,setSelectedHistory,open,setOpen}) => {

    const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };

  const removeItem = (i) => {
    const result = recentHistory.filter((item,index)=> index !== i )
    localStorage.setItem("history",JSON.stringify(result));
    setRecentHistory(result);
  }


  return (
    <>
      <div className={`w-64  fixed col-span-1 h-full dark:bg-zinc-800 bg-violet-100 pt-3 transition-transform duration-300 sm:w-72 lg:relative lg:translate-x-0 ${open?"translate-x-0":"-translate-x-full"}`}>
        <div className="dark:text-white text-zinc-800 flex justify-around items-center p-1">
          <div className="relative top-0 left-0 dark:text-white lg:hidden" onClick={()=>{setOpen(!open)}}><X/></div>
          <span className="text-xl">Recent Search</span>
          <button onClick={clearHistory} className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              className="fill-black dark:fill-white transition-colors"
            >
              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
          </button>
        </div>
        <ul className="text-left overflow-auto mt-2">
          {recentHistory &&
            recentHistory.map((item,index) => (
              <li
                key={index}
                className="group flex justify-between f p-1 pl-5 truncate dark:text-zinc-400  text-zinc-800 cursor-pointer dark:hover:bg-zinc-700 hover:bg-gradient-to-r from-pink-400 to-violet-400 dark:hover:text-zinc-200 hover:text-zinc-800 hover:font-semibold"
              >
                <span onClick={() => setSelectedHistory(item)}>{item}</span>
                <button className="opacity-0 group-hover:opacity-100" onClick={() => removeItem(index)}>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#e3e3e3"
            >
                            <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default RecentSearch;
