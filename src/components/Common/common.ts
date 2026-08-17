export type MediaType = 'video' | 'image' | 'unknown';
const VIDEO_EXTENSIONS = ['mp4', 'webm', 'ogg', 'mov', 'avi'] as const;
const IMAGE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'] as const;

type VideoExtension = typeof VIDEO_EXTENSIONS[number];
type ImageExtension = typeof IMAGE_EXTENSIONS[number];

export const getFileType = (url: string): MediaType => {
  if (!url) return 'unknown';

  // Extract extension safely, handling query params and hash fragments
  const extension = url.split('.').pop()?.split(/[#?]/)[0].toLowerCase();

  if (!extension) return 'unknown';

  if (VIDEO_EXTENSIONS.includes(extension as VideoExtension)) {
    return 'video';
  }

  if (IMAGE_EXTENSIONS.includes(extension as ImageExtension)) {
    return 'image';
  }

  return 'unknown';
};

