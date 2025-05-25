import { z } from "zod";





export const formSchema = z.object({
  // News Title
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters" })
    .nonempty({ message: "Title is required" }),

  // Thumbnail (will be a FileList if using file input)
  thumbnail: z.custom((val) => val instanceof FileList && val.length > 0, {
    message: "Thumbnail is required",
  }),

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