import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function FaqContent ({title, info}){
  const [showBlog, setShowBlog] = useState(false);
  const show = () => {
    setShowBlog(!showBlog);
  };
  return (
      <div className="blog-conatiner">
        <div className="title-blog">
          <h4>{title}</h4>
          <button onClick={show} className="btn">
            { showBlog ? <AiOutlineMinus/> : <AiOutlinePlus /> }
          </button>
        </div>
        {showBlog && <p className="info">{info}</p>}
      </div>
    );
  }

export default FaqContent;