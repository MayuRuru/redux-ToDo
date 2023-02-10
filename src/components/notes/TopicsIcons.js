import { useDispatch } from "react-redux";
import { topicAdded } from "../../features/notes/notesSlice";

const topicEmoji = {
  cleanCode: (
    <span role="img" aria-label="toothbrush">
      🪥
    </span>
  ),
  fundamentals: (
    <span role="img" aria-label="brick">
      🧱
    </span>
  ),
  TDD: (
    <span role="img" aria-label="refactor">
      🔄
    </span>
  ),
  techRadar: (
    <span role="img" aria-label="radar">
      📡
    </span>
  ),
  insightful: (
    <span role="img" aria-label="wow">
      🤩
    </span>
  ),
};

const TopicsIcons = ({ note }) => {
  const dispatch = useDispatch();

  const topicButtons = Object.entries(topicEmoji).map(([name, emoji]) => {
    return (
      <button>
        key={name}
        type="button" className="topicButton" onClick=
        {() => dispatch(topicAdded({ postId: postMessage.id, topic: name }))}
      </button>
    );
  });

  return <>{topicButtons}</>;
};

export default TopicsIcons;
