const TodayDate = () => {
  const date = new Date();
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return <p className="text-3xl md:text-4xl">{formatted}</p>;
};

export default TodayDate;