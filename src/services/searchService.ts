import request from "utils/request";

export const search = async (params = {}) => {
    try {
        const response = await request.get("/users/search", { params });
        return [response.data, null];
    } catch (error) {
        return [null, error];
    }
};
