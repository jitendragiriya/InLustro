import { useEffect } from "react";

const PageDetails = ({ open, setOpen }) => {
  const displaySize = 1024;
  useEffect(() => {
    // close hamburger if window size is less than sm and hamburger is open
    if (window.innerWidth < displaySize && open) {
      setOpen(false);
    }
    // open hamburger if window size is greater than lg and hamburger is close
    if (window.innerWidth > displaySize && !open) {
      setOpen(true);
    }
  }, []);

  return null;
};

export default PageDetails;
