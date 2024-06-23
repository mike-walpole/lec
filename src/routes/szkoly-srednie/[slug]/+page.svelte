<script>
	export let data;
	import { PortableText } from '@portabletext/svelte';
	import { page } from '$app/stores';
	import { urlFor } from '$lib/utils/image';
	import Footer from '../../../lib/footer.svelte';
	import Navbarblack from '../../../lib/navbarblack.svelte';
</script>

<Navbarblack />

<div class="flex flex-col max-w-5xl mx-auto mb-20">
	<h1 class="mx-auto text-6xl font-bold font-haas ml-5">{data.nazwa}</h1>
</div>

<div class="grid md:grid-cols-2 gap-0 md:items-center auto-rows-auto max-w-5xl mx-auto font-haas">
	<div class=" self-stretch">
		<img
			class="w-full h-full object-contain"
			src={urlFor(data.image1).width(300).height(300).format('webp').url()}
			alt="Cover image for {data.nazwa}"
			rel="preload"
			as="image"
		/>
	</div>
	<div class="mx-5 self-stretch">
		<p class="mt-5 mb-5 font-sadiq">{data.subtitle1}</p>
		{#if data.paragraph1}
			<p class="text-xl font-body mb-10">
				<PortableText value={data.paragraph1} />
			</p>
		{/if}
	</div>
</div>

<div class="grid md:grid-cols-2 gap-0 md:items-center auto-rows-auto max-w-5xl mx-auto font-haas">
	<div class="md:order-2 self-stretch">
		<img
			class="w-full h-full object-contain"
			src={urlFor(data.image2).width(300).height(300).format('webp').url()}
			alt="Cover image for {data.nazwa}"
			rel="preload"
			as="image"
		/>
	</div>
	<div class="md:order-1 mx-5 self-stretch">
		<p class="mt-5 mb-5 font-sadiq">{data.subtitle2}</p>
		{#if data.paragraph2}
			<p class="text-xl font-body mb-10">
				<PortableText value={data.paragraph2} />
			</p>
		{/if}
	</div>
</div>

<div class="grid md:grid-cols-2 gap-0 max-w-5xl mx-auto auto-rows-auto font-haas">
	<div class="self-stretch">
		<img
			class="w-full h-full object-contain"
			src={urlFor(data.image3).width(300).height(300).format('webp').url()}
			alt="Cover image for {data.nazwa}"
			rel="preload"
			as="image"
		/>
	</div>
	<div class="mx-5 self-stretch">
		<p class="mt-5 mb-5 font-sadiq">{data.subtitle3}</p>
		{#if data.paragraph3}
			<p class="text-xl font-body mb-10">
				<PortableText value={data.paragraph3} />
			</p>
		{/if}
		<p class="mt-5 mb-5 font-body text-xl">Orientacyjna cena: {data.cena}</p>
		<div class="flex mx-auto w-11/12 font-haas">
			<a
				href="mailto:krzysztof.banaszak@lec.com.pl"
				class=" border hover:border-black py-2 px-4 bg-[#e60000] text-white hover:bg-white hover:text-black mx-5 w-full mt-20 text-center"
				>Zamów bezpłatną konsultację</a
			>
		</div>
	</div>
</div>

<Footer />
