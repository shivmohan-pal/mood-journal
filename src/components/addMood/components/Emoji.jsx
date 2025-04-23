const Emoji = ({ entity, name, onClick }) => {
  const handleClick = () => {
    onClick({ icon: entity, name });
  };
  return (
    <span
      className="cursor-pointer"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: entity }}
      title={name}
    />
  );
};

export default Emoji;
