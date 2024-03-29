import documentCache from "./documentSifter.js";

export default function yoTheHeader(suffix) {
  const {headerTitles} = documentCache.getDocumentNodes({headerTitles: true});

  if (!headerTitles.length)
    return;
  for (let title of headerTitles) {
  if (title.hasAttribute('aria-label'))
    continue;
   let innerHTML = title.innerHTML;
   title.innerHTML = innerHTML.trim() + ", " + suffix;
  }
}
