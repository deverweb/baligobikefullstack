<template>
  <footer
    :class="{ hidden: isAgentPage }"
    class="footer px-[80px] lg:pt-[58px] sm:pt-[68px] lg:px-[48px] sm:px-[25px] 2xl:px-[40px] bg-dark-300 pt-[50px] sm:pb-[41px] pb-[57px]"
  >
    <div class="footer-desktop grid grid-cols-4 lg:hidden">
      <div class="footer-col pt-[4px] flex flex-col items-start">
        <Logo class="text-[32px] tracking-[-1px] mb-[9px]"></Logo>

        <NuxtLink class="footer-link mb-[9px] text-[16px]" to="/terms">{{ $t("footerRights.terms") }}</NuxtLink>
        <div class="footer-rights">baligo.bike © 2022, All rights reserved.</div>
      </div>
      <div class="footer-col pl-[23px] pt-[11px]">
        <div class="footer-action wg-toggle cursor-pointer mb-[24px] text-light">
          <SvgBikeIcon fill="#30B21B" class="w-[19px] h-[19px] relative top-[-1px] mr-[10px]"></SvgBikeIcon>

          <span @click="handleFooterClickRend" class="tracking-[-0.5px]">{{ $t("footerRights.rentBike") }}</span>
        </div>
        <div class="footer-policy inline-flex text-[16px] items-baseline flex-col">
          <NuxtLink class="inline-block mb-[12px] font-Helvreg" to="/oferta">{{ $t("footerRights.oferta") }}</NuxtLink>
          <NuxtLink class="inline-block" to="/policy">{{ $t("footerRights.privacyPolicy") }}</NuxtLink>
        </div>
      </div>
      <div class="footer-col pl-[30px] pt-[11px]">
        <a href="mailto:info@baligo.bike" class="footer-action mb-[17px] cursor-pointer">
          <SvgMailIcon class="mr-[15px]" fill="#30B21B"></SvgMailIcon>
          <span>info@baligo.bike</span>
        </a>
        <a :href="`tel:${'+62 813 374 13 060'.replace(/\s/g, '')}`" class="footer-action mb-[17px] cursor-pointer">
          <SvgPhoneIcon class="mr-[15px] w-[12px] h-[12px]" fill="#30B21B"></SvgPhoneIcon>
          <span>+62 813 374 13 060</span>
        </a>
        <div class="footer-action">
          <SvgGeoIcon class="mr-[15px] w-[12px] h-[12px]" fill="#30B21B"></SvgGeoIcon>
          <span>Jl. Batu Mejan Canggu 38,<br />Canggu</span>
        </div>
      </div>
      <div class="footer-col items-end">
        <div class="footer-payments flex gap-[10px] mb-[37px]">
          <div
            v-for="pay in payments"
            class="footer-pay shrink-0 w-[121px] h-[58px] flex items-center justify-center rounded-[9px] border-solid border-[1px] border-[#3c3c3c]"
          >
            <img :src="pay" class="" alt="" />
          </div>
        </div>
        <div class="footer-dev flex">
          <span class="mr-[5px]">{{ $t("footerRights.dev") }}</span>
          <a target="_blank" href="https://t.me/chelpanoff"> {{ $t("footerRights.devName") }}</a>
        </div>
      </div>
    </div>
    <div class="footer-tablet hidden lg:grid-cols-2 lg:grid sm:hidden">
      <div class="footer-col">
        <Logo class="text-[28px] tracking-[-0.9px] mb-[13px]"></Logo>
        <div class="footer-col-container">
          <div class="footer-policy mb-[10px] inline-flex text-[16px] items-baseline flex-col">
            <NuxtLink class="footer-link mb-[10px] text-[16px]" to="/terms">{{ $t("footerRights.terms") }}</NuxtLink>
            <NuxtLink class="inline-block mb-[10px] font-Helvreg" to="/oferta">{{
              $t("footerRights.oferta")
            }}</NuxtLink>
            <NuxtLink class="inline-block" to="/policy">{{ $t("footerRights.privacyPolicy") }}</NuxtLink>
          </div>
          <div class="footer-dev mb-[10px] flex">
            <span class="mr-[5px]">{{ $t("footerRights.dev") }}</span>
            <a target="_blank" href="https://t.me/chelpanoff"> {{ $t("footerRights.devName") }}</a>
          </div>
          <div class="footer-rights">baligo.bike © 2022, All rights reserved.</div>
        </div>
      </div>
      <div class="footer-col pt-[6px] pl-[13px]">
        <a href="mailto:info@baligo.bike" class="footer-action mb-[19px] cursor-pointer">
          <SvgMailIcon class="mr-[15px]" fill="#30B21B"></SvgMailIcon>
          <span>info@baligo.bike</span>
        </a>
        <a :href="`tel:${'+62 813 374 13 060'.replace(/\s/g, '')}`" class="footer-action mb-[19px] cursor-pointer">
          <SvgPhoneIcon class="mr-[15px] w-[12px] h-[12px]" fill="#30B21B"></SvgPhoneIcon>
          <span>+62 813 374 13 060</span>
        </a>
        <div class="footer-action">
          <SvgGeoIcon class="mr-[13px] w-[12px] h-[12px]" fill="#30B21B"></SvgGeoIcon>
          <span>Jl. Batu Mejan Canggu 38,<br />Canggu</span>
        </div>
        <div class="footer-payments flex gap-[8px] mt-[53px]">
          <div
            v-for="pay in payments"
            class="footer-pay shrink-0 w-[94px] h-[45px] flex items-center justify-center rounded-[7px] border-solid border-[1px] border-[#3c3c3c]"
          >
            <img :src="pay" class="max-w-[70%] max-h-[70%]" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-mobile hidden sm:grid">
      <Logo class="text-[28px] tracking-[-0.9px] mb-[40px]"></Logo>
      <a href="mailto:info@baligo.bike" class="footer-action mb-[19px] cursor-pointer">
        <SvgMailIcon class="mr-[15px]" fill="#30B21B"></SvgMailIcon>
        <span>info@baligo.bike</span>
      </a>
      <a :href="`tel:${'+62 813 374 13 060'.replace(/\s/g, '')}`" class="footer-action mb-[19px] cursor-pointer">
        <SvgPhoneIcon class="mr-[15px] w-[12px] h-[12px]" fill="#30B21B"></SvgPhoneIcon>
        <span>+62 813 374 13 060</span>
      </a>
      <div class="footer-action mb-[46px]">
        <SvgGeoIcon class="mr-[13px] w-[12px] h-[12px]" fill="#30B21B"></SvgGeoIcon>
        <span>Jl. Batu Mejan Canggu 38,<br />Canggu</span>
      </div>
      <div class="footer-policy mb-[16px] inline-flex text-[16px] items-baseline flex-col">
        <NuxtLink class="footer-link mb-[15px] text-[16px]" to="/terms">{{ $t("footerRights.terms") }}</NuxtLink>
        <NuxtLink class="inline-block mb-[15px] font-Helvreg" to="/oferta">{{ $t("footerRights.oferta") }}</NuxtLink>
        <NuxtLink class="inline-block" to="/policy">{{ $t("footerRights.privacyPolicy") }}</NuxtLink>
      </div>
      <div class="footer-dev mb-[14px] flex">
        <span class="mr-[5px]">{{ $t("footerRights.dev") }}</span>
        <a target="_blank" href="https://t.me/chelpanoff"> {{ $t("footerRights.devName") }}</a>
      </div>
      <div class="footer-rights">baligo.bike © 2022, All rights reserved.</div>
      <div class="footer-payments flex gap-[8px] mt-[37px]">
        <div
          v-for="pay in payments"
          class="footer-pay w-[107px] h-[51px] lil:w-[25%] lil:flex-shrink-0 lil:flex-grow flex items-center justify-center rounded-[7px] border-solid border-[1px] border-[#3c3c3c]"
        >
          <img :src="pay" class="max-w-[70%] max-h-[70%]" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
let route = useRoute();
let router = useRouter();
const payments = ["/svg/footer/visa.svg", "/svg/footer/master.svg", "/svg/footer/inter.svg"];
const handleFooterClickRend = async () => {
  if (route.path == "/") {
    document.querySelector(".order").scrollIntoView({ behavior: "smooth" });
  } else {
    router.push("/");
    setTimeout(() => {
      document.querySelector(".order").scrollIntoView({ behavior: "smooth" });
    }, 100);
  }
};
let isAgentPage = computed(() => {
  return route.path == "/agent/" || route.path == "/agentform/" || route.path == "/agentsuccess/";
});
</script>

<style lang="sass">

.footer
	&-desktop
		+r(1660)
			zoom: 0.8
		+r(1440)
			zoom: 0.7
		+r(1200)
			zoom: 1
	&-col
		display: flex
		flex-direction: column
		svg
			flex-shrink: 0
	&-dev
		color: #454546
		font-size: 16px
		+r(1200)
			font-size: 14px
		a
			position: relative
			transition: color 0.2s ease
			&:hover
				color: $light
				&::before
					background-color: $light
			&::before
				content: ""
				width: 100%
				position: absolute
				width: 100%
				bottom: 3px
				height: 1px
				background-color: #454546
				transition: 0.2s ease all
	&-link
		transition: all 0.2s ease-in
		color: #454546
		position: relative
		+r(1200)
			font-size: 14px
		&:hover
			color: $light
			&::before
				opacity: 1
		&::before
			content: ""
			width: 100%
			position: absolute
			width: 100%
			bottom: 3px
			height: 1px
			opacity: 0
			background-color: $light
			transition: 0.2s ease all
	&-rights
		color: #454546
		font-size: 16px
		+r(1200)
			font-size: 14px
	&-policy
		a
			transition: all 0.2s ease-in
			color: #454546
			position: relative
			+r(1200)
				font-size: 14px
			&:hover
				color: $light
				&::before
					opacity: 1
			&::before
				content: ""
				width: 100%
				position: absolute
				width: 100%
				bottom: 3px
				height: 1px
				opacity: 0
				background-color: $light
				transition: 0.2s ease all
	&-action
		display: flex
		align-items: center

		span
			color: $light
			+eu
			text-transform: uppercase
			font-size: 16px
			white-space: nowrap
			letter-spacing: -0.5px
			+r(1200)
				font-size: 14px
			+r(380)
				white-space: normal
</style>
