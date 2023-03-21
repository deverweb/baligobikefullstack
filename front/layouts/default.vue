<template>
  <div class="layout p-[20px] sm:pb-0 xsm:pt-[80px] md:pt-[100px] relative sm:px-0 bg-dark flex flex-col min-h-screen text-light text-[18px] font-Helvreg">
    <TheHeader></TheHeader>
    <slot></slot>
    <TheFooter></TheFooter>
    <Widget></Widget>
    <BikeModal></BikeModal>
    <!-- <InvestModal></InvestModal> -->
  </div>
</template>

<script setup></script>
