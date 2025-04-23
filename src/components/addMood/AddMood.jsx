import LimitTextArea from "./components/LimitTextArea";
import TodayDate from "./components/TodayDate";

const AddMood = () => {
  const handleClick = () => {};
  return (
    <div className="text-center flex flex-col gap-2">
      <TodayDate />
      <h2 className="text-2xl">How are you feeling today?</h2>
      <div>emojies here..</div>
      <LimitTextArea limit={50} />
      <button
        className="w-full rounded-xl bg-amber-500 text-amber-50"
        onClick={handleClick}
      >
        Save
      </button>
    </div>
  );
};

export default AddMood;
