import Loader from "@/components/loading/Loader";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import Link from "next/link";

const EditorsPick = () => {
  const { data: news, isLoading } = useGetAllNewsQuery( { priority: "isEditorsPick" } );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-10 mb-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const editorsPick = news.data


  return (
    <div className="mt-10">
      <div className="relative inline-block border-b pb-7 w-full mb-5">
        <h2 className="text-3xl text-rose-500">Editor's Pick</h2>
        <div className="absolute bottom-0 left-0 w-40 h-0.5 bg-rose-500"></div>
      </div>

      {/* ============ Editor's Pick Container ================== */}
      <div className="mt-5">
        {editorsPick.length > 0 &&
          editorsPick.slice(0, 3).map(({ _id, category, title }) => (
            <div key={_id} className="border-b mt-8 pb-5">
              <Link href={`/news/${category}/${_id}`} className="text-xl text-news-text duration-500 hover:text-rose-500 hover:duration-500 line-clamp-2">
                {title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditorsPick;
