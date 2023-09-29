export const newJpDate = () => {
  const tmp = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  return new Date(tmp);
};
