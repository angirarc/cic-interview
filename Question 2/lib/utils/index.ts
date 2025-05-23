export const handleError = (err: unknown) => {
    let error = "An error occurred";

    if (err instanceof Error) error = err.message;

    return { error, data: null };
}