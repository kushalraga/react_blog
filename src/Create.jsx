import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Alice Johnson");
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = { title, body, author }

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
    })
    .then(() => {
        console.log('new blog added.')
        setIsPending(false)
        navigate('/')
        
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label> <br />
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <label>Blog Body: </label> <br />
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>{" "}
        <br />
        <label>Blog Author: </label> <br />
        <select
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Alice Johnson">Alice Johnson</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          <option value="Mike Hesson">Mike Hesson</option>
          <option value="Sara Connor">Sara Connor</option>
        </select>{" "}
        <br />
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
}
