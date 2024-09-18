/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  documentationSidebar: [{type: 'autogenerated', dirName: '.'}],
  forUserSidebar: [{ type: 'autogenerated', dirName: 'forUser' }],
  forOpSidebar: [{ type: 'autogenerated', dirName: 'forOp' }],
  forSESidebar: [{ type: 'autogenerated', dirName: 'forSE' }],
  forDevSidebar: [{ type: 'autogenerated', dirName: 'forDev' }],
  forDemoSidebar: [{ type: 'autogenerated', dirName: 'forDemo' }],
  
  // But you can create a sidebar manually
  /*
  documentationSidebar: [
    'overview',
    'hello',
    {
      type: 'category',
      label: 'Documentation',
      items: ['documentation-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
