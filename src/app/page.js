import { fetchData } from "@/utils/apiService";
import DataList from "@/components/DataList/DataList";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const data = await fetchData(params);
  return <DataList data={data} />;
}
