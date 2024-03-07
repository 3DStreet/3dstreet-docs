const blogPluginExports = require("@docusaurus/plugin-content-blog");

const defaultBlogPlugin = blogPluginExports.default;

async function blogPluginExtended(...pluginArgs) {
  const blogPluginInstance = await defaultBlogPlugin(...pluginArgs);

  return {
    // Add all properties of the default blog plugin so existing functionality is preserved
    ...blogPluginInstance,
    /**
     * Override the default `contentLoaded` hook to access blog posts data
     */
    contentLoaded: async function (data) {
      // Get the 4 latest blog posts
      const recentPosts = [...data.content.blogPosts].splice(0, 4);

      async function createRecentPostModule(blogPost, index) {
        return await data.actions.createData(
          `home-page-recent-post-metadata-${index}.json`,
          JSON.stringify({
            title: blogPost.metadata.title,
            description: blogPost.metadata.description,
            authors: blogPost.metadata.authors.reverse(),
            imageURL: blogPost.metadata.frontMatter.image,
            blogURL: blogPost.metadata.permalink
          })
        );
      }

      data.actions.addRoute({
        // Add route for the home page
        path: "/",
        exact: true,

        // The component to use for the "Home" page route
        component: "@site/src/components/Home/index.js",

        // These are the props that will be passed to our "Home" page component
        modules: {
          recentPosts: await Promise.all(
            recentPosts.map(createRecentPostModule)
          ),
        },
      });

      // Call the default overridden `contentLoaded` implementation
      return blogPluginInstance.contentLoaded(data);
    },
  };
}

module.exports = {
  ...blogPluginExports,
  default: blogPluginExtended,
};
