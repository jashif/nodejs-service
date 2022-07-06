import mcache from "memory-cache";
const mcacheInstance = new mcache.Cache();

function getDataFromCache(key: string): any {
  const data = mcacheInstance.get(key);
  if (data === null) {
    return;
  }
  return data ? data : undefined;
}

function setDataToCache(key: string, value: any, expirytime = 345600) {
  mcacheInstance.put(key, value, expirytime);
}

export { getDataFromCache, setDataToCache };
