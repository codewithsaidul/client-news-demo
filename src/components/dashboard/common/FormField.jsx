import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const Field = ({form}) => {
  return (
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

