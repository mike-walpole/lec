<script>
	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div>
	<div class="font-haas text-md">
		<nav class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
			<div class="flex items-center justify-between">
				<a class=" w-16 md:w-24 font-bold" href="/">
					<img src="/leclogo.png" alt="logo" />
				</a>
				<!-- Mobile menu button -->
				<div on:click={toggleNavbar} class="flex md:hidden">
					<button type="button" class="  focus:outline-none focus:text-gray-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
					? 'flex'
					: 'hidden'}"
			>
				<a class="" href="/o-nas">O nas</a>
				<a class="" href="/oferta">Szkoły średnie za granicą</a>
				<a class="" href="/realizacje">Uniwersytety za granicą</a>
				<a class="" href="/realizacje">Kursy językowe</a>

				<div class="space-y-2">
					<a
						href="mailto:krzysztof.banaszak@lec.com.pl"
						class="block bg-[#e60000] hover:bg-white hover:text-black text-white border hover:border-black py-2 px-4 rounded text-center"
						>Zamów konsultację</a
					>
				</div>
			</div>
		</nav>
	</div>
</div>
