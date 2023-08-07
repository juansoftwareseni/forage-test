function joinClass(...args: Array<string | boolean | undefined>) {
  return args
    .filter((str) => typeof str === "string")
    .join(" ")
    .trim();
}

export default joinClass;
