import api from "./api";

export const getJobs = async () => {
  const res = await api.get("/jobs");
  return res.data;
};