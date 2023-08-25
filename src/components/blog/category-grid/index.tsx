import Chip from "@/components/common/chip";

interface Props {
  checkedCategory: string | null;
  categoryList: string[];
  onClick: (value: string) => void;
}

const CategoryGrid = ({ checkedCategory, categoryList, onClick }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(10%, auto))",
        gap: "10px",
      }}
    >
      {categoryList.map((category) => (
        <Chip
          key={category}
          value={category}
          checked={category === checkedCategory}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
