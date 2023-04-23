export const useWordpressStore = defineStore("wordpressStore", () => {
  const getData = async () => {
    let fetchResult = await fetch("https://admin.baligo.bike/wp-json/markers/v1/post");
    return await fetchResult.json();
    // return data;
  };
  const wpData = ref({});
  return { getData, wpData };
});
