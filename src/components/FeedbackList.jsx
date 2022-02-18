import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  return (
    <ul>
      {feedback.map((item) => {
        return (
          <li key={item.id}>
            <FeedbackItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default FeedbackList;
