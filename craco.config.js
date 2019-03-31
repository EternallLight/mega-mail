// Overrides some configuration create-react-app so that requiring electron during development does not cause any errors.
module.exports = {
    webpack: {
        configure: {
            target: 'electron-renderer'
        }
    }
};
