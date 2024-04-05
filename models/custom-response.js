
const ErrorCodes = {

    INTERNAL_SERVER_ERROR: { status: 500, code: 100, message: 'Internal server error' },
    UNAUTHORIZED: { status: 401, code: 101, message: 'Unauthorized' },
    BAD_REQUEST: { status: 400, code: 102, message: 'Bad request' },
    GENERATE_BAD_REQUEST: (errorDescription) => {
        return { ...ErrorCodes.BAD_REQUEST, errorDescription };
    },
    MISSING_PERMISSION: { status: 403, code: 103, message: 'Missing permission' },

    INVALID_ID: { status: 400, code: 1000, message: 'Invalid id' },
    NAME_ALREADY_EXISTS: { status: 400, code: 1001, message: 'Name already exist' },
    INVALID_TOKEN: { status: 400, code: 1002, message: 'Invalid token' },
    DATA_NOT_FOUND: { status: 400, code: 1003, message: 'Data Not Found' },
    BOOK_NAME_ALREADY_EXISTS: { status: 400, code: 1003, message: 'Book Name Already Exist.' },
};

const ValidationMessages = {
    GENERATE_INVALID_INPUT: arr => `- invalid input, possible values: ${arr.join(', ')}`,
    NOT_EMPTY: 'must not be null',
    MUST_BE_NUMBER: '- must be number',
};

exports.ErrorCodes = ErrorCodes;
exports.ValidationMessages = ValidationMessages;
exports.BaseResponse = result => {
    return { result };
};
