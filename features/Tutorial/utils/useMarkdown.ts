import { useEffect, useState } from "react";

const fetchMarkdown = async (path: string) => {
  const response = await fetch(path);
  return await response.text();
};

function useMarkdown(path: string) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetchMarkdown(path).then(setMarkdown);
  }, [path]);

  return markdown;
}

export default useMarkdown;
