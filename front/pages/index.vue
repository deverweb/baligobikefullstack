<template>
  <div class="lel">
    <SectionIndexOffer></SectionIndexOffer>
    <TheButton @click="handleClick" class="bg-white w-[500px] h-[200px]">
      <span class="text-red">Hello World</span>
    </TheButton>
    <SectionIndexCardsBlock></SectionIndexCardsBlock>
    <SectionIndexSlider></SectionIndexSlider>
    <SectionIndexForm></SectionIndexForm>
    <SectionIndexProfits></SectionIndexProfits>
    <SectionIndexFaq></SectionIndexFaq>
    <SectionIndexInvest></SectionIndexInvest>
    <SectionIndexContacts></SectionIndexContacts>
  </div>
</template>

<script setup>
const handleClick = async () => {
  let fetchResult = await fetch("http://admin.localhost/wp-json/post/v1");
  console.log(fetchResult);
  let fetchData = await fetchResult.json();
  console.log(fetchData);
};
</script>

<style lang="sass"></style>
