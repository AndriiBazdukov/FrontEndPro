export const required = value =>
    value || value === 0 ? undefined : 'Required';

export const positiveNumber = value =>
    value > 0 ? undefined : 'Must be greater than 0';

export const composeValidators =
    (...validators) =>
        value =>
            validators.reduce(
                (error, validator) => error || validator(value),
                undefined
            );