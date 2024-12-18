const meta = {
  // index: {
  //   type: "page",
  //   title: "About WALNUT",
  //   theme: {
  //     layout: "raw",
  //   },
  // },
  // "user-guide": {
  //   type: "page",
  //   title: "User Guide",
  //   display: "hidden",
  // },
  index: {
    title: "Getting Started",
    // Thêm redirect vào docs/v1.0.1
    type: "page",
    redirect: "/docs/v1.0.1/index"
  },
  docs: {
    type: "menu",
    title: "Documentation",
    // display: 'hidden',
    items: {
      "v1.0.1": {
        title: "v1.0.1",
        href: "/docs/v1.0.1",
      },
      // "v1.0.2": {
      //   title: "v1.0.2",
      //   href: "/docs/v1.0.2",
      // },
      // "v1.0.3": {
      //   title: "v1.0.3",
      //   href: "/docs/v1.0.3",
      // },
    },
  },
  // "documentation": {
  //   type: "page",
  //   title: 'Documentation',
  //   href: 'https://weminal.craft.me/walmove',
  //   newWindow: true
  // }
};

export default meta;
