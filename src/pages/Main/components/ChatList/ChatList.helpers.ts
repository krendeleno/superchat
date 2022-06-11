export const checkTags = (chatTags: Set<string>, selectedTags: Set<string>) => {
  for (let tag of Array.from(chatTags)) {
    if (selectedTags.has(tag)) return true;
  }
  return false;
};
