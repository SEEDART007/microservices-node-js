import axios from "axios";
import React, { useEffect, useState } from "react";

const CreateComment = ({ snippet }) => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState(snippet?.comments || []);

useEffect(()=>{
  const fetchComments = async() =>{
    try {
      const res = await axios.get(`http://localhost:8001/api/v1/snippet/${snippet.id}/comment`)
      setComments(res.data)
    } catch (error) {
      
    }
  }
  fetchComments()
},[])

  const addComment = async (e) => {
    e.preventDefault();
    if (!text.trim()) return; // prevent empty comments

    try {
      const res = await axios.post(
        `http://localhost:8001/api/v1/snippet/${snippet.id}/comment`,
        { text }
      );

      // Assuming backend returns the created comment in res.data.comment
      setComments((prev) => [...prev, res.data.comment]);
      setText("");
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <div className="mt-3">
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="text-sm">
            {comment.text}
          </li>
        ))}
      </ul>

      <form onSubmit={addComment} className="flex mt-3 items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add comment"
          className="border rounded px-2 text-sm py-1 flex-1"
        />
        <button type="submit" className="bg-black text-white px-4 py-1 rounded">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
