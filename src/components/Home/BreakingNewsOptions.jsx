import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BreakingNewsOptions = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px] ring-0 focus:ring-0">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="colombia">Colombia</SelectItem>
          <SelectItem value="mexico">Mexico</SelectItem>
          <SelectItem value="dominican-republic">Dominican Republic</SelectItem>
          <SelectItem value="peru">Peru</SelectItem>
          <SelectItem value="chili">Chili</SelectItem>
          <SelectItem value="central-america">Central America</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BreakingNewsOptions;
