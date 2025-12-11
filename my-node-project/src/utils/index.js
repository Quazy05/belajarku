const utils = {
    // A utility function to format data
    formatData: (data) => {
        return JSON.stringify(data, null, 2);
    },

    // A utility function to validate input
    validateInput: (input) => {
        return input && typeof input === 'object';
    },

    // A utility function to generate a unique ID
    generateId: () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
};

export default utils;