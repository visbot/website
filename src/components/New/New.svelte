<span class="hidden sm:flex">
	<div class="self-center" title="New release."></div>
</span>

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

		@media only screen and (min-resolution: 124.8dpi), only screen and (min-resolution: 1.3dppx) {
			background-image: url(/new@2x.png);
		}
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
