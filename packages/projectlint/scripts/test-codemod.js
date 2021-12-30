const { ProjectLint } = require('../dist');

const args = process.argv.slice(2);
const [cwd] = args;

const performanceRules = {
  picture: {
    title: '指定图片宽度',
    title_en: 'Specify image width',
    message: '使用 @ali/rax-picture 组件时，通过 Style 属性显式指定图片宽度，可以在运行时加载合适尺寸的图片，从而有效减少图片加载体积。',
    message_en: 'When using the @ali/rax-picture component, you can load images of the appropriate size at run time by displaying the specified image width through the Style property, which effectively reduces the image loading volume.',
    severity: 'warn',
    tags: ['performance'],
    docs: 'https://rax.alibaba-inc.com/docs/components/picture',
    // TODO: replace it with absolute path
    package: '../node_modules/@ali/perf-codemod',
    transform: 'src/transforms/picture.js',
  },
  snapshot: {
    title: '开启快照',
    title_en: 'Enable snapshot',
    message: '开启快照（snapshot），可以有效提升页面的首屏可见时间。',
    message_en: 'Enabling the snapshot function improves the first screen view time.',
    severity: 'warn',
    tags: ['performance'],
    docs: 'https://rax.alibaba-inc.com/docs/guide/snapshot',
    // TODO: replace it with absolute path
    package: '../node_modules/@ali/perf-codemod',
    transform: 'src/transforms/snapshot.js',
  },
};

const projectLint = new ProjectLint({
  cwd,
  transforms: { snapshot: 1, picture: 1 },
  customTransformRules: performanceRules,
});

(async function () {
  const scanResult = await projectLint.scan();
  console.log('projectLint scan result: ', scanResult);

  const fixResult = await projectLint.fix();
  console.log('projectLint fix result: ', fixResult);
})();