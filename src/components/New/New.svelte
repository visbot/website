<div class="self-center" title="New release." />

<style lang="postcss">
	div {
		background-image: url(/new.png);
		display: flex;
		width: 25px;
		height: 9px;
		background-position: 0 0;
		background-size: cover;
		background-repeat: no-repeat;
		animation: blinkfx 0.5s step-start infinite;
	}

	@keyframes blinkfx {
		50% {
			background-position-y: -9px;
		}
	}

	@media (prefers-reduced-motion) {
		div {
			animation: none;
		}
	}
</style>
