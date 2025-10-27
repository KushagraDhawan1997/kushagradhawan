export type KookieAiCapability = {
  title: string;
  shortDescription: string;
  expandedContent: string;
};

export const kookieAiCapabilities: KookieAiCapability[] = [
  {
    title: "Conversation Graphs",
    shortDescription: "Branch anywhere in conversations — not linear scrolls.",
    expandedContent:
      "Unlike ChatGPT's linear approach, Kookie AI treats conversations as branching graphs where you can diverge at any point. Right-click any message to create a new branch, explore different directions, or transform content. Each node is a conversation container that can branch into multiple paths, giving you a map of knowledge and exploration rather than just a chat history. Users don't think in Git terms (rebase, merge) — they think in stories, remixes, save points, and alternate paths.",
  },
  {
    title: "Atomic Processing",
    shortDescription: "Transform content with purpose-built nodes.",
    expandedContent:
      "Each branch can be conversational or atomic. Atomic nodes handle specific transformations like summarization, translation, extraction, or artifact generation. These aren't just prompts — they're first-class processing units that can be chained, linked, and reused across your conversation graph. Examples include: Summarise until here, Translate until here, Extract tasks/insights, Format into table/JSON, Generate images/diagrams.",
  },
  {
    title: "Artifacts as Nodes",
    shortDescription: "Outputs are first-class citizens, not just text.",
    expandedContent:
      "Tables, documents, images, and other outputs become attachable nodes in your conversation graph. They're not just displayed — they can be linked to other conversations, modified, and used as inputs for new branches. This makes your creative outputs part of your knowledge system, not just temporary results that disappear into the scroll. Artifacts are branchable for remix and can hold structured outputs: tables, charts, docs, images, code.",
  },
  {
    title: "Canvas-First UX",
    shortDescription: "Pan, zoom, and organize your conversation workspace.",
    expandedContent:
      "The interface is built around a canvas where you can pan, zoom, and organize your conversation nodes visually. This isn't just a chat interface — it's a workspace for thinking and creating. You can see the full scope of your exploration, reorganize connections, and understand the relationships between different ideas and outputs. Built with React Flow for canvas visualization and rich chat renderer for markdown, code, and images.",
  },
  {
    title: "Living Graph System",
    shortDescription: "Detach, re-attach, and cross-pollinate ideas freely.",
    expandedContent:
      "Nodes can be detached, re-attached, and cross-pollinated across different conversation branches. A branch can be promoted into an independent root for restructuring, sharing, or cleaning context. Re-attaching allows connecting to different nodes with options to inherit new parent's context or just link visually for organization. This creates a living, editable conversation graph: a tree that can be pruned, grafted, remixed.",
  },
  {
    title: "Power User Focus",
    shortDescription:
      "Built for knowledge workers and creators, not casual users.",
    expandedContent:
      "Kookie AI is designed for desktop use where knowledge workers and creators do their best work. Target audience includes researchers, analysts, consultants, writers, designers, storytellers, and teams. This is closer to Notion / Obsidian / Figma-level power tool, not everyday casual users. The interface takes advantage of larger screens, precise interactions, and the ability to see multiple conversation branches simultaneously.",
  },
];
