import { z } from "zod";



// custom((val) => val instanceof FileList && val.length > 0, {
//     message: "Thumbnail is required",
//   })


// ===================== add form schema =================================
export const addFormSchema = z.object({
  // News Title
  title: z
    .string()
    .min(10, { message: "Title must be at least 10 characters" })
    .nonempty({ message: "Title is required" }),

  // Thumbnail (will be a FileList if using file input)
  thumbnail: z.optional(),
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
          "world-news",
          "innovation",
          "billionaires",
          "entrepreneurs",
          "leadership",
          "investing",
          "top-10", 
          "must-read", 
          "editors-picks",
          "travel", 
          "lifestyle", 
          "wellness",
          "property",
          "style",
          "motors",
          "cover-story", 
          "exclusive", 
          "breaking-today"
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
  categoryType: z.enum(["news", "life", "list", "magazine"], {
    required_error: "Category type is required",
  }),

  // Priority (radio group)
  priority: z.enum(["none", "isFeatured", "isEditorsPick", "isBreaking"], {
    required_error: "Priority type is required",
  }),
});



// ========================= edit form schema ===============================
export const editFormSchema = z.object({
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
          "world-news",
          "innovation",
          "billionaires",
          "entrepreneurs",
          "leadership",
          "investing",
          "top-10",
          "must-read",
          "editors-picks",
          "travel", 
          "lifestyle", 
          "wellness",
          "property",
          "style",
          "motors",
          "cover-story",
          "exclusive",
          "breaking-today",
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
  categoryType: z.enum(["news", "life", "list", "magazine"], {
    required_error: "Category type is required",
  }),

  // Priority (radio group)
  priority: z.enum(["none", "isFeatured", "isEditorsPick", "isBreaking"], {
    required_error: "Priority type is required",
  }),
});