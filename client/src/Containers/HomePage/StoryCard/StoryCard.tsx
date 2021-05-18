import React from "react";
import { Stack } from "../../../Components/Stack/Stack";
import { Story } from "../helpers";

interface StoryCardProps {
  story: any;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <main>
      <Stack>
        <img src={`${story.imgUrl}`} alt="" />
        <Stack direction="vertical">
          <h1>{story.title}</h1>
          <p>{story.paragraph}</p>
        </Stack>
      </Stack>
    </main>
  );
};

export default StoryCard;
