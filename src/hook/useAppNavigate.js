import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startUILoading, stopUILoading } from "../features/ui/uiSlice";

const useAppNavigate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (path) => {
    dispatch(startUILoading());
    navigate(path);

    // smooth UX — remove later when router handles it
    setTimeout(() => {
      dispatch(stopUILoading());
    }, 400);
  };
};

export default useAppNavigate;
