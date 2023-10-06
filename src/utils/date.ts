export const newJpDate: () => Date = () => {
  const tmp = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  return new Date(tmp);
};
