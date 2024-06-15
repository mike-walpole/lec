<script>
	import Navbar from '$lib/navbar.svelte';
	import Footer from '../lib/footer.svelte';
</script>

<Navbar />

<div class="flex flex-col max-w-5xl mx-auto mb-20">
	<img src="Stclareslogo.png" class="w-48 mx-auto" alt="logo" />
	<h1 class="mx-auto text-6xl font-bold font-haas ml-5">St Clare's, Oxford, Wielka Brytania</h1>
</div>

<div class="grid md:grid-cols-2 gap-0 md:items-center auto-rows-auto max-w-5xl mx-auto font-haas">
	<div class=" self-stretch">
		<img src="/one.avif" alt="hero" class="w-full h-full object-cover" />
	</div>
	<div class="mx-5 self-stretch">
		<h2 class="text-2xl font-bold font-body mb-10 pt-10">Pierwsza szkoła z IB w Anglii</h2>
		<p class="text-xl font-body mb-10">
			Szkoła z internatem w Oxfordzie to wyjątkowa placówka edukacyjna, która odgrywa kluczową rolę
			w kształtowaniu przyszłych liderów i wybitnych studentów. Już od 1977 roku prowadzi ona
			program matury międzynarodowej IB, co czyni ją najstarszą tego typu szkołą w Anglii. Zaledwie
			13 szkół na świecie rozpoczęło program IB wcześniej, co podkreśla jej prestiż i długoletnie
			doświadczenie w edukacji międzynarodowej. Wyniki uczniów tej szkoły są konsekwentnie powyżej
			średnich światowych, co jest dowodem na wysoki poziom nauczania oraz zaangażowanie kadry
			pedagogicznej i studentów.
		</p>
	</div>
</div>

<div class="grid md:grid-cols-2 gap-0 md:items-center auto-rows-auto max-w-5xl mx-auto font-haas">
	<div class="md:order-2 self-stretch">
		<img src="/three.avif" alt="hero" class="w-full h-full object-cover" />
	</div>
	<div class="md:order-1 mx-5 self-stretch">
		<h2 class="text-2xl font-bold font-body mb-10 pt-10">Międzynarodowy charakter szkoły</h2>
		<p class="text-xl font-body mb-10">
			Ponad połowa absolwentów tej szkoły dostaje się na najbardziej prestiżowe uniwersytety w
			Wielkiej Brytanii oraz Stanach Zjednoczonych, co świadczy o doskonałym przygotowaniu do
			dalszej edukacji i kariery akademickiej. Uczniowie mają możliwość wyboru sześciu przedmiotów,
			z czego trzy są nauczane na poziomie wyższym (rozszerzonym), co umożliwia im dogłębne
			zrozumienie wybranych dziedzin i rozwijanie swoich zainteresowań. Co więcej, zajęcia z
			literatury są oferowane w aż 25 językach, co pokazuje międzynarodowy charakter szkoły i jej
			zaangażowanie w promowanie różnorodności kulturowej oraz językowej.
		</p>
	</div>
</div>

<div class="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto auto-rows-auto font-haas">
	<div class="self-stretch">
		<img src="/St-Clares-1.avif" alt="hero" class="w-full h-full object-cover" />
	</div>
	<div class="mx-5 self-stretch">
		<h2 class="text-2xl font-bold font-body mb-10 pt-10">Tradycja z nowoczesnym podejściem</h2>
		<p class="text-xl font-body mb-10">
			Szkoła z internatem w Oxfordzie to miejsce, które łączy tradycję z nowoczesnym podejściem do
			edukacji, oferując uczniom nie tylko doskonałe przygotowanie akademickie, ale także możliwość
			rozwoju osobistego i społecznego w międzynarodowym środowisku. Dzięki temu absolwenci tej
			szkoły są doskonale przygotowani do podjęcia studiów na najbardziej prestiżowych
			uniwersytetach na świecie i osiągnięcia sukcesu w wybranych dziedzinach zawodowych.
		</p>
	</div>
</div>

<div class="flex mx-auto w-full md:w-[50vw] font-haas">
	<a
		href="mailto:krzysztof.banaszak@lec.com.pl"
		class=" border hover:border-black py-2 px-4 bg-[#e60000] text-white hover:bg-white hover:text-black mx-5 w-full mt-20 text-center"
		>Zamów konsultację</a
	>
</div>

<Footer />
