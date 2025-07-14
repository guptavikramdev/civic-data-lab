import { API_URL, searchParameter } from "./constant";

export async function fetchData(searchParams) {
  const page = searchParams?.page || 1;
  const size = searchParams?.size || 10;
  let url = `${API_URL}?page=${page}&size=${size}`;
  for (let params of searchParameter) {
    let queryParams = searchParams[params];
    if (queryParams) {
      url += `&${params}=${queryParams}`;
    }
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error("Something went wrong!!");
  const result = response.json();
  return result;
}
