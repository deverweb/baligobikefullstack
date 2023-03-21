export const useIndexFormStore = defineStore("indexform", () => {
  //
  let selectedOption = ref(null)

  const changeSelectedOption = (option) => {
    selectedOption.value = option
  }

  return { selectedOption, changeSelectedOption }
})
