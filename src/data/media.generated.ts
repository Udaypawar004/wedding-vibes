// AUTO-GENERATED. Media pointers for photographs hosted on the WeddingVibes CDN.
export function mediaUrl(path: string): string {
  const normalized = path.replace(/^\/+/, "");
  return `/${normalized}`;
}

export interface MediaImage {
  url: string;
  width: number;
  height: number;
}

export const priyanshuImages: MediaImage[] = [
  {
    url: mediaUrl("media/priyanshu-01.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/priyanshu-02.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/priyanshu-03.jpg"),
    width: 1600,
    height: 1118,
  },
  {
    url: mediaUrl("media/priyanshu-04.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/priyanshu-05.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/priyanshu-06.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/priyanshu-07.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/priyanshu-08.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/priyanshu-09.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/priyanshu-10.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/priyanshu-11.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/priyanshu-12.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/priyanshu-13.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/priyanshu-14.jpg"),
    width: 1200,
    height: 1800,
  },
];

export const candidImages: MediaImage[] = [
  {
    url: mediaUrl("media/candid-01.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-02.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-03.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-04.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-05.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-06.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-07.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-08.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-09.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-10.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/candid-11.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-12.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-13.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/candid-14.jpg"),
    width: 1200,
    height: 1800,
  },
];

export const ringImages: MediaImage[] = [
  {
    url: mediaUrl("media/ring-01.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-02.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-03.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/ring-04.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-05.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/ring-06.jpg"),
    width: 1600,
    height: 1067,
  },
  {
    url: mediaUrl("media/ring-07.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-08.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-09.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-10.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-11.jpg"),
    width: 1200,
    height: 1800,
  },
  {
    url: mediaUrl("media/ring-12.jpg"),
    width: 1200,
    height: 1800,
  },
];

export const posters: Record<string, MediaImage> = {
  birthday: candidImages[8] ?? { url: mediaUrl("media/poster-birthday.jpg"), width: 1600, height: 900 },
  "ring-highlight": ringImages[2] ?? { url: mediaUrl("media/poster-ring-highlight.jpg"), width: 1600, height: 900 },
  "haldi-reel": candidImages[2] ?? { url: mediaUrl("media/poster-haldi-reel.jpg"), width: 1600, height: 900 },
  "sangeet-reel": candidImages[10] ?? { url: mediaUrl("media/poster-sangeet-reel.jpg"), width: 1600, height: 900 },
  "wedding-highlight": priyanshuImages[0] ?? { url: mediaUrl("media/poster-wedding-highlight.jpg"), width: 1600, height: 900 },
  "wedding-reel": priyanshuImages[11] ?? { url: mediaUrl("media/poster-wedding-reel.jpg"), width: 1600, height: 900 },
};
