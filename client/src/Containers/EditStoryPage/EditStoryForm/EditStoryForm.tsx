import { InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Stack } from "../../../Components/Stack/Stack";
import { Story } from "../../../generated/graphql";
import {
  CategoryTypesOptions,
  TownTypesOptions,
} from "../../CreateStoryPage/helpers";
import { EditStoryFormValues } from "../helpers";
import EditStoryFormFooter from "./EditStoryFormFooter";

interface EditStoryFormProps {
  id: string;
  story: Story;
  onUpdate: (values: EditStoryFormValues, id: number) => Promise<void>;
}

const EditStoryForm: React.FC<EditStoryFormProps> = ({
  id,
  story,
  onUpdate,
}) => {
  // defaultValues update only when story updates
  const defaultValues = useMemo(
    () => ({
      head: story.head,
      subHead: story.subHead,
      storyText: story.storyText,
      author: story.author,
      category: story.category,
      town: story.town,
      imgUrls: story.imgUrls,
    }),
    [story]
  );

  const methods = useForm<EditStoryFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues,
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, dirtyFields },
  } = methods;

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const isDirty = Object.keys(dirtyFields).length !== 0;

  const handleCancel = () => reset();

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit((data) => onUpdate(data, story.id))}
        style={{ maxWidth: "700px", margin: "70px auto" }}
      >
        <Stack direction="vertical" gap={4}>
          <Controller
            defaultValue={story?.head}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Head"
                error={!!errors?.head?.message}
                helperText={errors?.head?.message}
              />
            )}
            rules={{ required: "must enter a header" }}
            name="head"
            control={control}
          />
          <Controller
            defaultValue={story?.subHead}
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="Sub Head" />
            )}
            name="subHead"
            control={control}
          />

          <Controller
            defaultValue={story?.storyText}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Story text"
                error={!!errors?.storyText?.message}
                helperText={errors?.storyText?.message}
                multiline
                rows={7}
              />
            )}
            rules={{ required: "Must enter text" }}
            name="storyText"
            control={control}
          />

          <Controller
            defaultValue={story?.author}
            render={({ field }) => (
              <TextField
                {...field}
                //defaultValue="Erin Sauder"
                variant="outlined"
                label="Author"
              />
            )}
            name="author"
            control={control}
          />

          <Controller
            defaultValue={story?.imgUrls}
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="Images" />
            )}
            name="imgUrls"
            control={control}
          />

          <Controller
            defaultValue={story?.town}
            control={control}
            name="town"
            rules={{ required: "Please choose a town" }}
            render={({ field: { ref, ...rest } }) => (
              <>
                <InputLabel id="town-select">Town</InputLabel>
                <Select {...rest} labelId="town-select">
                  {TownTypesOptions.map(({ value, label }) => (
                    <MenuItem value={value}>{label}</MenuItem>
                  ))}
                </Select>
              </>
            )}
          />

          <Controller
            defaultValue={story?.category}
            control={control}
            name="category"
            rules={{ required: "Please choose a category" }}
            render={({ field: { ref, ...rest } }) => (
              <>
                <InputLabel id="category-select">Category</InputLabel>
                <Select {...rest} labelId="category-select">
                  {CategoryTypesOptions.map(({ value, label }) => (
                    <MenuItem value={value}>{label}</MenuItem>
                  ))}
                </Select>
              </>
            )}
          />
        </Stack>

        {isDirty && <EditStoryFormFooter onCancel={handleCancel} />}
      </form>
    </FormProvider>
  );
};

export default EditStoryForm;
