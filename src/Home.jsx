import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {

  const { data: blogs, isPending, Error} = useFetch("http://localhost:8000/blogs")

  return (
    <>
      <div className="home">
        {Error && <div>{Error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
    </>
  );
}
