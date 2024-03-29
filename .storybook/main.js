module.exports = {
  stories: [
    '../src/components/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/containers/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/theme/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};
