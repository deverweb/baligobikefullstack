<template>
	<svg width="17" height="17" viewBox="0 0 17 17" fill="none">
		<path
			d="M5.89688 5.89688C1.75313 9.9875 1.0625 15.9375 1.0625 15.9375C1.0625 15.9375 7.0125 15.2469 11.1031 11.1031C15.1937 6.95937 15.9375 1.0625 15.9375 1.0625C15.9375 1.0625 9.9875 1.75313 5.89688 5.89688Z"
			:stroke="props.stroke"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M5.84375 5.89697V7.49072C5.84375 8.44697 6.32187 9.3501 7.17188 9.82822C8.02188 10.3063 8.5 11.2095 8.5 12.1657V13.1751"
			:stroke="props.stroke"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M8.5 3.77197V5.84385C8.5 6.8001 8.97812 7.70322 9.82812 8.18135C10.6781 8.65947 11.1562 9.5626 11.1562 10.5188V11.0501"
			:stroke="props.stroke"
			stroke-width="2"
			stroke-miterlimit="10"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script setup>
let props = defineProps({
	stroke: {
		type: String,
		required: false,
		default: "#000000",
	},
});
</script>

<style lang="sass"></style>
