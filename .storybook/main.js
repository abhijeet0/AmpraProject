module.exports = {
    stories: ['../src/storybook/*.stories.[tj]s','../src/storybook/*.stories.[tj]sx'],
    addons: [
        // '@storybook/addon-actions',
        '@storybook/addon-knobs',
        '@storybook/addon-links',
        '@storybook/addon-knobs/register',
      ],
    };