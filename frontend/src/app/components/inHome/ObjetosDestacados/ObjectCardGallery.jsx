import ObjectCard from "./ObjectCard";

const ObjectCardGallery = () => {
  return (
    <div className="flex flex-1 h-screen items-center space-x-3  w-full overflow-x-scroll ">
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
      <ObjectCard />
    </div>
  );
};

export default ObjectCardGallery;
