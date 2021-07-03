import { useRef, useEffect } from 'react';

const useDocumentTitle = (title) => {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = defaultTitle.current;
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
