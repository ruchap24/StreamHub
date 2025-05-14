import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";

function Home() {
  const { data, loading, error } = useAuth();

  // Remove console.log in production
  console.log("Home data:", data?.length);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row mt-20">
      <Sidebar />
      <main className="flex-1 h-[calc(100vh-6.625rem)] overflow-y-auto">
        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {data?.map((item) => {
            if (item?.type !== "video") return null;
            return (
              <Video 
                key={item?.id || Math.random().toString()} 
                video={item?.video} 
              />
            );
          })}
          {!data?.length && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No videos found
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;