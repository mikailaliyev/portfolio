"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
function Blog() {
  const [content, setContent] = useState("");
  console.log(content);
  function createNewPost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("content", content);
    fetch("http://localhost:3000/api", {
      method: "POST",
      body: data,
    });
  }

  return (
    <form onSubmit={createNewPost}>
      <div className="bg-white text-black">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={(e) => setContent(e)}
        />
      </div>
      <button className="btn mt-5 bg-white p-2 rounded">Create post</button>
    </form>
  );
}
export default Blog;
