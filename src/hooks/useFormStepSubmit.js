import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addFields } from "../redux/actions";

const useFormStepSubmit = (nextPage) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    dispatch(addFields(data));
    history.push(nextPage);
  };
  return onSubmit;
};

export default useFormStepSubmit;
