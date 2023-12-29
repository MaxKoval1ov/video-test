import { Video as TVideo } from "../api/video/Video";

export const VIDEO_TITLE_FIELD = "file";

export const VideoTitle = (record: TVideo): string => {
  return record.file?.toString() || String(record.id);
};
