
import { Remarkable } from "remarkable"; 

function MarkdownSanitized({markdownText}) {
  const md = new Remarkable({
    html: true, 
    breaks: true, 
  });

    // Convert Markdown to HTML
  const createMarkup = () => {
    return { __html: md.render(markdownText) }; // Use Remarkable's render method
  };
  
  return (
    <div
    //   style={{ flex: 1, padding: "10px", backgroundColor: "#f9f9f9" }}
      dangerouslySetInnerHTML={createMarkup()} // Inject sanitized HTML
    />
  );
};

export default MarkdownSanitized;
