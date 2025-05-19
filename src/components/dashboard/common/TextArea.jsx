
import dynamic from "next/dynamic";


import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });


const TextArea = () => {
  return (
    <ReactQuill
      theme="snow"
    //   value={content}
    //   onChange={setContent}
      modules={{
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"],
        ],
      }}
      formats={[
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "link",
        "image",
      ]}
      className="mb-4"
    />
  );
};

export default TextArea;
