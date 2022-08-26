import { useState } from "react";
import questions from "./data";
import FaqContent from "./faqContent";

function Faq() {
  const [blogs, setBlogs] = useState(questions);
  
  let blogList = blogs.map((blog) => {
    return <FaqContent key={blog.id} {...blog} />
    
  });
  return (
    <section className="blog-box">
      {blogList}
    </section>
  );
}

export default Faq;
