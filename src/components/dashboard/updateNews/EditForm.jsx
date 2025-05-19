"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";





const EditForm = ({ params}) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
//   const { id } = router.query;

    console.log(params)

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const newTag = inputValue.trim().replace(/,$/, "");
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setInputValue("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bg-white shadow-lg w-[70%] p-10 space-y-10">
        {/* news title */}
        <div>
          <Label className="text-2xl font-title">Title</Label>
          <Input placeholder="News Title" className="mt-3 text-lg" />
        </div>

        {/* news image */}
        <div className="grid w-full items-center">
          <Label className="text-2xl font-title">Thumbnail</Label>
          <Input id="picture" type="file" className="mt-3 text-lg" />
        </div>

        {/* news description */}
        <div>
          <Label className="text-2xl font-title">Description</Label>
          <textarea
            placeholder="write your news"
            className={
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-3 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive input mt-3 h-60 text-lg"
            }
          />
        </div>

        {/* tags */}
        <div>
          <Label className="text-2xl font-title">Tags</Label>
          <div className="flex flex-wrap gap-2 border rounded-lg p-2 min-h-[3rem] focus-within:ring-2 ring-ring mt-3">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                className="flex items-center gap-1 text-lg"
                variant="secondary"
              >
                {tag}
                <button
                  className="cursor-pointer"
                  onClick={() => removeTag(index)}
                >
                  <X size={20} />
                </button>
              </Badge>
            ))}

            <Input
              className="border-none shadow-none focus-visible:ring-0 w-auto flex-1 p-0 text-lg"
              placeholder="type tag"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {/* news category & status */}
        <div className="flex items-center gap-5">
          {/* news category */}
          <div className="w-full">
            <Label className="text-2xl font-title mb-3">Category</Label>
            <Select className="text-lg">
              <SelectTrigger className="w-full">
                <SelectValue
                  placeholder="Select a Category"
                  className="text-lg"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="word" className="text-lg">
                    World News
                  </SelectItem>
                  <SelectItem value="innovation" className="text-lg">
                    Innovation
                  </SelectItem>
                  <SelectItem value="billionaires" className="text-lg">
                    Billionaires
                  </SelectItem>
                  <SelectItem value="entrepreneurs" className="text-lg">
                    Entrepreneurs
                  </SelectItem>
                  <SelectItem value="leadership" className="text-lg">
                    Leadership
                  </SelectItem>
                  <SelectItem value="investing" className="text-lg">
                    Investing
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* news status */}
          <div className="w-full">
            <Label className="text-2xl font-title mb-3">Status</Label>
            <Select className="text-lg">
              <SelectTrigger className="w-full">
                <SelectValue className="text-lg" placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value="published" className="text-lg">
                    Published
                  </SelectItem>
                  <SelectItem value="unpublished" className="text-lg">
                    Unpublished
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* news priority */}
        <div>
          <Label className="text-2xl font-title mb-3">Set Priority Type</Label>
          <RadioGroup className="flex items-center gap-16">
            <div className="flex items-center gap-x-3">
              <RadioGroupItem ype="radio" value="none" />
              <Label className="text-lg font-title">None</Label>
            </div>
            <div className="flex items-center gap-x-3">
              <RadioGroupItem ype="radio" value="isFeatured" />
              <Label className="text-lg font-title">Featured</Label>
            </div>
            <div className="flex items-center gap-x-3">
              <RadioGroupItem ype="radio" value="isEditorsPick" />
              <Label className="text-lg font-title">EditorsPick</Label>
            </div>
            <div className="flex items-center gap-x-3">
              <RadioGroupItem ype="radio" value="isBreaking" />
              <Label className="text-lg font-title">Breaking</Label>
            </div>
          </RadioGroup>
        </div>

        {/* submit button */}
        <div className="w-full">
          <Button
            type="submit"
            className="w-full text-xl font-medium font-title text-news-white-bg bg-news-dark p-7"
          >
            Update News
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
