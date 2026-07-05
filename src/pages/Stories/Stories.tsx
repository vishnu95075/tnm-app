import { useState } from "react";
import { Container, Typography } from "@mui/material";
import StoryList from "../../components/Story/StoryList";
import StoryViewer from "../../components/Story/StoryViewer";
import { stories } from "../../data/story.data"
import type { Story } from "../../data/story.data";

export default function Stories() {
  const [selected, setSelected] = useState<Story>();

  return (
    <Container maxWidth="md"
      sx={{ mt: 2, mb: 2 }}>

      <StoryList
        stories={stories}
        onOpen={setSelected}
      />

      <StoryViewer
        open={Boolean(selected)}
        story={selected}
        onClose={() => setSelected(undefined)}
      />
    </Container>
  );
}