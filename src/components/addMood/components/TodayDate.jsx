const TodayDate = () => {
  const date = new Date();
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return <p className="text-4xl">{formatted}</p>;
};

export default TodayDate;