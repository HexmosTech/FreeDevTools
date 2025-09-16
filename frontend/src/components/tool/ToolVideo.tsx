import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

interface ToolVideoProps {
  title: string;
  description: string;
  videoUrl: string;
}

const ToolVideo: React.FC<ToolVideoProps> = ({
  title,
  description,
  videoUrl,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-700 dark:text-slate-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-slate-800 dark:text-slate-400 mb-4">{description}</p>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolVideo;
