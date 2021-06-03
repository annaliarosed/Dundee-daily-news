import { TextField, Select, InputLabel, MenuItem } from "@material-ui/core";

import React, { useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Stack } from "../../../Components/Stack/Stack";
import { useCreateStoryMutation } from "../../../generated/graphql";
import CreateConfirmationModal from "./CreateConfirmationModal";
import styles from "./CreateStoryForm.module.scss";
import CreateStoryFormFooter from "./CreateStoryFormFooter";
import cn from "classnames";

import {
  CategoryTypesOptions,
  CreateStoryFormValues,
  defaultValuesCreateForm,
  TownTypesOptions,
} from "./helpers";

const CreateStoryForm = () => {
  const [createStory] = useCreateStoryMutation();
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const methods = useForm<CreateStoryFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: defaultValuesCreateForm,
  });

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, dirtyFields },
  } = methods;

  const isDirty = Object.keys(dirtyFields).length !== 0;
  console.log(getValues(), "dirtyFields");
  const handleClear = () => {
    reset();
    console.log(getValues(), "here");
  };
  console.log("errors", errors);
  const handleCreateStory = async (values: CreateStoryFormValues) => {
    try {
      await createStory({
        variables: {
          input: {
            ...values,
          },
        },
        update: (cache, { data: storyData }) => {
          if (!storyData?.createStory) {
            return;
          }
          const newStory = storyData.createStory;

          cache.modify({
            fields: {
              stories(existingStories, { toReference }) {
                return [...existingStories, toReference({ ...newStory })];
              },
            },
          });
        },
      });

      setIsModalOpen(false);
      console.log("worked");
      reset(values);
      history.push("/admin");

      // TODO add success state
    } catch (err) {
      // TODO add error state
    }
  };

  //TODO add dropZone
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(handleCreateStory)}
        className={cn(styles.form, { [styles.editing]: isDirty })}
      >
        <div className={styles.wrapper}>
          <Controller
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
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="Sub Head" />
            )}
            name="subHead"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Story text"
                error={!!errors?.storyText?.message}
                helperText={errors?.storyText?.message}
                multiline
                rows={50}
              />
            )}
            rules={{ required: "Must enter text" }}
            name="storyText"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField
                {...field}
                defaultValue="Erin Sauder"
                variant="outlined"
                label="Author"
              />
            )}
            name="author"
            control={control}
          />

          <Controller
            render={({ field }) => (
              <TextField {...field} variant="outlined" label="Images" />
            )}
            name="imgUrls"
            control={control}
          />

          <Controller
            control={control}
            name="town"
            defaultValue=""
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
            control={control}
            name="category"
            defaultValue=""
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
        </div>
        {isDirty && (
          <CreateStoryFormFooter
            setIsOpen={setIsModalOpen}
            onClear={handleClear}
          />
        )}

        {isModalOpen && (
          <CreateConfirmationModal setIsModalOpen={setIsModalOpen} />
        )}
      </form>
    </FormProvider>
  );
};

export default CreateStoryForm;
