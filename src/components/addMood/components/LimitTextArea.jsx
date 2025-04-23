import { useEffect, useState } from "react";

const LimitTextArea = ({ limit ,onChange}) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length <= limit) {
      setText(value);
    }
  };
  useEffect(()=>{
    onChange(text);
  },[text])
  return (
    <div className="relative">
      <textarea
        className="w-full h-24 overflow-hidden text-wrap text-lg p-2 resize-none focus:outline-0 border-[1px] border-amber-950 rounded-xl"
        placeholder="Add a note..."
        value={text}
        onChange={handleChange}
      />
      <p
        className={`absolute p-1 text-sm right-1 bottom-1 ${
          text.length >= limit ? "text-red-400" : "text-gray-400"
        }`}
      >
        {text.length}/{limit}
      </p>
    </div>
  );
};

export default LimitTextArea;
