
const Emoji = ({ entity, name, onClick ,isActive }) => {
  const handleClick = () => {
    onClick({ icon: entity, name });
  };
  return (
    <span
      className={`cursor-pointer py-2 px-2 ${isActive? "bg-gray-200" : ""} rounded-2xl`}
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: entity }}
      title={name}
    />
  );
};

export default Emoji;
