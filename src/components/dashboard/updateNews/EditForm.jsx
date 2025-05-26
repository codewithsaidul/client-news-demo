"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { useUpdateNewsMutation } from "@/features/update/updateNewsAPI";
import { uploadToImgBB } from "@/lib/uploadImage";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

const formSchema = z.object({
  // News Title
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters" })
    .nonempty({ message: "Title is required" }),

  // Thumbnail (optional file input)
  thumbnail: z.any().optional(),

  // Description (textarea)
  description: z
    .string()
    .min(50, { message: "Description must be at least 50 characters" }),

  // Tags (array of strings, can be optional or required)
  tags: z.array(z.string()).min(1, { message: "At least one tag is required" }),

  // Category (dropdown)
  category: z
    .string()
    .nonempty({ message: "Category is required" })
    .refine(
      (val) =>
        [
          "word",
          "innovation",
          "billionaires",
          "entrepreneurs",
          "leadership",
          "investing",
        ].includes(val),
      {
        message: "Invalid category selected",
      }
    ),

  // Status (dropdown)
  status: z.enum(["published", "unpublished"], {
    required_error: "Status is required",
  }),

  // Priority (radio group)
  priority: z.enum(["none", "isFeatured", "isEditorsPick", "isBreaking"], {
    required_error: "Priority type is required",
  }),
});

const EditForm = ({ singleNews }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [updateNews] = useUpdateNewsMutation();
  const router = useRouter()

  // get the react hook form with default values
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      thumbnail: undefined,
      description: "",
      tags: [],
      category: singleNews?.category || "",
      status: "unpublished",
      priority: "featured",
    },
  });

  // add value on form
  useEffect(() => {
    if (singleNews) {
      form.reset({
        title: singleNews.title,
        thumbnail: singleNews.thumbnail,
        description: singleNews.description,
        tags: singleNews.tags || [],
        category: singleNews.category || "",
        status: singleNews.status,
        priority: singleNews.priority,
      });
      setTags(singleNews.tags || []);
    }
  }, [singleNews, form]);

  // Sync tags state with form value
  useEffect(() => {
    form.setValue("tags", tags, { shouldValidate: false });
  }, [tags, form]);

  // for adding tags
  // For adding tag:
  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const newTag = inputValue.trim().replace(/,$/, "");
      if (!tags.includes(newTag)) {
        const newTags = [...tags, newTag];
        setTags(newTags);
        form.setValue("tags", newTags, { shouldValidate: true }); // Sync immediately
      }
      setInputValue("");
    }
  };

  // For removing tag:
  const removeTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
    form.setValue("tags", updatedTags, { shouldValidate: true }); // Sync immediately
  };

  const isLoading = false;

  // JSX render conditionally (not hook)

  const onSubmit = async (values) => {
    let imgUrl = singleNews.thumbnail; // ধরি আগের থাম্বনেইল URL

    if (
      values.thumbnail &&
      values.thumbnail.length > 0 &&
      values.thumbnail[0] instanceof File
    ) {
      const file = values.thumbnail[0];
      imgUrl = await uploadToImgBB(file);
    }

    const newsData = {
      title: values.title,
      thumbnail: imgUrl,
      description: values.description,
      tags: values.tags,
      category: values.category,
      status: values.status,
      priority: values.priority,
    };

    try {
      const res = await updateNews({ id: singleNews._id, newsData }).unwrap();

      if (res.acknowledged && res.modifiedCount > 0) {
        Swal.fire({
          title: "News update successfully!",
          icon: "success",
          draggable: true,
        });

        router.push("/dashboard")
      }
    } catch (error) {
      Swal.fire({
        title: "News update failed",
        icon: "error",
        draggable: true,
      });

      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form {...form} className="w-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-white shadow-lg w-[70%] p-10 space-y-10"
        >
          {/* news title */}
          <div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>News Title</FormLabel>
                  <FormControl>
                    <Input placeholder="enter news title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* news image */}
          <div className="grid w-full items-center">
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => field.onChange(e.target.files)} // pass FileList directly}
                      // {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* tags */}
          <div>
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <div className="flex flex-wrap gap-2 border rounded-md p-2 min-h-[3rem] focus-within:ring-2 ring-primary">
                      {tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(index)}
                            className="ml-1 text-red-600 hover:text-red-800"
                            aria-label={`Remove tag ${tag}`}
                          >
                            <X size={16} />
                          </button>
                        </Badge>
                      ))}

                      <Input
                        className="border-none shadow-none focus-visible:ring-0 w-auto flex-1 p-0 text-lg"
                        placeholder="Type a tag and press Enter"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* news category & status */}
          <div className="flex items-center gap-5">
            {/* news category */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      value={singleNews.category}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="word">World News</SelectItem>
                          <SelectItem value="innovation">Innovation</SelectItem>
                          <SelectItem value="billionaires">
                            Billionaires
                          </SelectItem>
                          <SelectItem value="entrepreneurs">
                            Entrepreneurs
                          </SelectItem>
                          <SelectItem value="leadership">Leadership</SelectItem>
                          <SelectItem value="investing">Investing</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* news status */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      value={singleNews.status}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a status" />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* news priority */}
          <div>
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Set Priority Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex items-center gap-16"
                    >
                      <div className="flex items-center gap-x-3">
                        <RadioGroupItem value="none" />
                        <Label>None</Label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <RadioGroupItem value="isFeatured" />
                        <Label>Featured</Label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <RadioGroupItem value="isEditorsPick" />
                        <Label>EditorsPick</Label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <RadioGroupItem value="isBreaking" />
                        <Label>Breaking</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* news description */}
          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      placeholder="write your news"
                      className={
                        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border bg-transparent px-3 py-3 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive input mt-3 h-60 text-lg"
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* submit button */}
          <div className="w-full">
            <Button
              type="submit"
              className="w-full text-xl font-medium font-title text-news-white-bg bg-news-dark p-7"
            >
              {isLoading ? "Loading..." : "Update News"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EditForm;
