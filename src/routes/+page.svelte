<script>
	import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
	import Navbar from '../lib/navbar.svelte';
	import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
</script>

<div class="relative">
	<!-- Image container -->
	<img src="/hughs.avif" alt="Your Image" class="block w-full grayscale" />

	<div class="absolute flex top-0 z-50">
		<Navbar />
	</div>
	<!-- Overlay text container -->
	<div class="absolute inset-0 flex items-center justify-center">
		<div class=" text-white px-4 py-2 rounded text-6xl md:text-9xl font-sadiq text-center">
			<!-- Your overlay text -->
			Studiuj Angielski za granicą
		</div>
	</div>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto mt-20">
	<div
		class="border border-black p-2 h-64 flex flex-col justify-between shadow-lg mx-10 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Studia</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-black hover:text-black hover:bg-white"
			>See now</a
		>
	</div>
	<div
		class="border border-black p-2 h-64 flex flex-col justify-between shadow-lg mx-10 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Szkoly średnie</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-black hover:text-black hover:bg-white"
			>See now</a
		>
	</div>
	<div
		class="border border-black p-2 h-64 flex flex-col justify-between shadow-lg mx-10 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Kursy dla profesjonalistów</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-black hover:text-black hover:bg-white"
			>See now</a
		>
	</div>
	<div
		class="border border-black p-2 h-64 flex flex-col justify-between shadow-lg mx-10 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Kursy dla młodzieźy</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-black hover:text-black hover:bg-white"
			>See now</a
		>
	</div>
</div>
<div class="max-w-5xl mx-auto mt-20 mb-10">
	<h2 class="mx-10 font-sadiq text-4xl">Co o nas mówią</h2>
</div>

<div class="grid grid-cols-3 max-w-5xl mx-auto">
	<div class="mx-10">
		<Rating id="example-1b" total={5} size={30} rating={4.66} />
	</div>
	<div>franek</div>
	<div>mariola</div>
</div>
