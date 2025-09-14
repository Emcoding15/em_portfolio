import React from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownMessageProps {
  content: string;
  className?: string;
}

const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ content, className }) => (
  <div className={className}>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

export default MarkdownMessage;
