import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Card from "@/components/ui/Card";
import {
  CalenderIcon,
  ChartIcon,
  DownloadIcon,
  GlobeIcon,
} from "@/assets/icons";
import { fileIconMap } from "@/utils/constant";
const ListView = ({ data }) => {
  return (
    <Card>
      <div className="space-y-2">
        <h4 className="font-lg font-semibold text-primary">{data.title}</h4>
        <p className="text-foreground-secondary text-sm font-normal">
          {data?.description}
        </p>
        <div className="text-sm flex max-sm:flex-wrap gap-4">
          <span className="flex items-center">
            <span className=" flex items-center gap-2">
              <CalenderIcon /> Last Update:
            </span>
            <span className="ml-2 font-semibold">
              {dayjs(data?.modified).format("DD MMM YYYY")}
            </span>
          </span>
          <span className="flex items-center">
            <span className="flex  items-center gap-2">
              <DownloadIcon /> Downloads:
            </span>
            <span className="ml-2 font-semibold">{data?.download_count}+</span>
          </span>

          <span className="flex items-center">
            <span className="flex  items-center gap-2">
              <GlobeIcon /> Geography:
            </span>
            <span className="ml-2 font-semibold">
              {data?.metadata?.map(
                (meta) =>
                  meta?.metadata_item?.label == "Geography" && meta.value
              )}
            </span>
          </span>

          {data?.has_charts && (
            <span className="flex items-center gap-2 font-semibold">
              <ChartIcon /> With charts
            </span>
          )}
        </div>
        <div className="mt-8 flex ">
          <div className="flex max-sm:flex-wrap gap-4 w-1/2">
            <span>Tags :</span>
            <span className="flex flex-wrap gap-2">
              {data?.tags.map((tag) => (
                <span
                  className="bg-tag text-sm font-semibold rounded-md px-2 py-1 border border-primary"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>
          <div className="flex w-1/2 gap-2">
            <span>Format:</span>
            <span className=" flex flex-wrap gap-4">
              {data?.formats.map((tag) => (
                <div className="w-6 h-6" key={tag}>
                  <Image
                    src={fileIconMap[tag]}
                    className="w-6 h-6  object-cover"
                    alt=""
                  />
                </div>
              ))}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ListView;
