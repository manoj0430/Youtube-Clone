import Button from "./Button";
const ButtonList = () => {
  const buttonData = [
    "All",
    "Sports",
    "Music",
    "News",
    "Action",
    "Thrillers",
    "Fashion",
    "Trending",
    "International",
    "National",
  ];
  return (
    <div className="flex">
      {buttonData.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
