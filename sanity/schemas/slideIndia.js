export default {
  name: "slideIndia",
  type: "document",
  title: "Slides - India",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "titlejp",
      type: "string",
      title: "Title - Japanese",
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      name: "captionjp",
      type: "string",
      title: "Caption - Japanese",
    },
    {
      title: "Slide Image",
      name: "slideImage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
  ],
};
