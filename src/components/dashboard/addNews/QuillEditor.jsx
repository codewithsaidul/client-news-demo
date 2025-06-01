"use client";

import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Quill's default snow theme CSS

export default function QuillEditor({ value, onChange }) {
  const editorRef = useRef(null);
  const [quill, setQuill] = useState(null);

  useEffect(() => {
    if (editorRef.current && !quill) {
      const q = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: "#quill-toolbar", // Use external toolbar
          },
        },
      });

      q.on("text-change", () => {
        onChange(q.root.innerHTML);
      });

      if (value) {
        q.root.innerHTML = value;
      }

      setQuill(q);
    }
  }, [editorRef, quill]);

  // Sync from parent value
  useEffect(() => {
    if (quill && value !== quill.root.innerHTML) {
      quill.root.innerHTML = value || "";
    }
  }, [value]);

  return (
    <div className="bg-white rounded-md p-2">
      {/* External Toolbar */}
      <div id="quill-toolbar" className="mb-2">
        <select className="ql-header">
          <option value="1"></option>
          <option value="2"></option>
          <option value="3"></option>
          <option selected></option>
        </select>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-link" />
        {/* <button className="ql-clean" /> */}
      </div>

      {/* Editor Container */}
      <div
        ref={editorRef}
        className="min-h-[140px] max-h-[300px] overflow-auto"
        style={{ outline: "none" }}
      />
    </div>
  );
}
