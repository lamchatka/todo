import { useRef } from "react";

const useIncompleteTaskScroll = (tasks) => {
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({ status }) => !status)?.id;

  return {
    firstIncompleteTaskRef,
    firstIncompleteTaskId
  }
};

export default useIncompleteTaskScroll;
