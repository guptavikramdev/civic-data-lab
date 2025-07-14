import React from "react";
import dayjs from "dayjs";
import {
  CalenderIcon,
  ChartIcon,
  DownloadIcon,
  GlobeIcon,
} from "@/assets/icons";
import Divider from "../ui/Divider";
import Card from "../ui/Card";
const GridView = ({ data }) => {
  return (
    <Card>
      <h4 className="font-lg font-semibold text-primary">{data.title}</h4>
      <div className="text-sm flex gap-4 mt-2">
        <span className="flex items-center">
          <span className=" flex items-center gap-2">
            <CalenderIcon />
          </span>
          <span className="ml-2 font-semibold">
            {dayjs(data?.modified).format("DD MMM YYYY")}
          </span>
        </span>
        <span className="flex items-center">
          <span className="flex  items-center gap-2">
            <DownloadIcon />
          </span>
          <span className="ml-2 font-semibold">{data?.download_count}+</span>
        </span>

        <span className="flex items-center">
          <span className="flex  items-center gap-2">
            <GlobeIcon />
          </span>
          <span className="ml-2 font-semibold truncate block max-w-[60px]">
            {data?.metadata?.map(
              (meta) => meta?.metadata_item?.label == "Geography" && meta.value
            )}
          </span>
        </span>
      </div>
      <Divider />
      <p className="text-foreground-secondary text-sm font-normal">
        {data?.description.length > 80
          ? data?.description.substring(0, 80) + "..."
          : data?.description}
      </p>
    </Card>
  );
};

export default GridView;
