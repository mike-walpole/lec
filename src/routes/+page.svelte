<script>
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import { CalendarWeekSolid } from 'flowbite-svelte-icons';
	import Navbar from '../lib/navbar.svelte';
	import Footer from '../lib/footer.svelte';
	import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
	import { Card } from 'flowbite-svelte';
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const options = [
		{
			title: 'WYBÓR SZKOŁY I KURSU',
			content:
				'Biznesowy angielski w Londynie, włoski i nauka gotowania w Toskanii, hiszpański w Buenos Aires, letni obóz z angielskim dla młodzieży na Malcie, czy chiński w Szanghaju – możliwości masz bardzo wiele, a my pomożemy ci wybrać optymalny kurs!'
		},
		{
			title: 'ZAKWATEROWANIE',
			content:
				'Szkoły językowe oferują kilka rodzajów zakwaterowania. Każdy z nich ma swoje atuty. Zakwaterowanie u lokalnej rodziny to najpopularniejsza forma zakwaterowania podczas kursów językowych za granicą. Mieszkając u lokalnej rodziny masz okazję poznać ich sposób życia, dowiedzieć się więcej o kulturze i co najważniejsze, ćwiczyć język!'
		},
		{
			title: 'ORGANIZACJA WYJAZDU',
			content:
				'Przed wyjazdem dostaniesz komplet informacji o kursie, miejscu zakwaterowania i podróży. Udzielimy ci praktycznych porad na temat podróży i życia podczas kursu. Będziemy do twojej dyspozycji przez cały wyjazd.'
		}
	];
</script>

<div class="relative">
	<!-- Image container -->
	<img src="/hughs.avif" alt="Your Image" class="block w-full grayscale-0" />

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

<div class="max-w-5xl mx-auto mt-20 mb-10">
	<h2 class="mx-5 font-sadiq text-4xl">Jak się mogę uczyć?</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto mt-20">
	<div
		class="border border-gray-200 p-2 h-64 flex flex-col justify-between shadow-lg mx-5 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Studia</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-gray-200 hover:text-black hover:bg-white"
			>dowiedz się wiecej</a
		>
	</div>
	<div
		class="border border-gray-200 p-2 h-64 flex flex-col justify-between shadow-lg mx-5 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Szkoly średnie</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-gray-200 hover:text-black hover:bg-white"
			>dowiedz się wiecej</a
		>
	</div>
	<div
		class="border border-gray-200 p-2 h-64 flex flex-col justify-between shadow-lg mx-5 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Kursy dla profesjonalistów</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-gray-200 hover:text-black hover:bg-white"
			>dowiedz się wiecej</a
		>
	</div>
	<div
		class="border border-gray-200 p-2 h-64 flex flex-col justify-between shadow-lg mx-5 my-5 rounded"
	>
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Kursy dla młodzieźy</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
		<a
			class="bg-black text-white font-sadiq text-center py-2 mb-3 w-11/12 mx-auto hover:border hover:border-gray-200 hover:text-black hover:bg-white"
			>dowiedz się wiecej</a
		>
	</div>
</div>
<div class="max-w-5xl mx-auto mt-20 mb-10">
	<h2 class="mx-5 font-sadiq text-4xl">Co o nas mówią</h2>
</div>

<Card padding="none" size="xl" class="grid md:grid-cols-2 max-w-5xl mx-auto">
	<figure
		class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
	>
		<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
			<h3 class="text-lg font-sadiq text-gray-900 dark:text-white">
				Very easy this was to integrate
			</h3>
			<p class="my-4 font-light">If you care for your time, I hands down would go with this."</p>
		</blockquote>
		<figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
			<img
				class="w-9 h-9 rounded-full"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
				alt="Karen profile"
			/>
			<div class="space-y-0.5 font-medium dark:text-white text-left">
				<div>Bonnie Green</div>
				<div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
			</div>
		</figcaption>
	</figure>
	<figure
		class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700"
	>
		<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
			<h3 class="text-lg font-sadiq text-gray-900 dark:text-white">
				Solid foundation for any project
			</h3>
			<p class="my-4 font-light">
				Designing with Figma components that can be easily translated to the utility classes of
				Tailwind CSS is a huge timesaver!"
			</p>
		</blockquote>
		<figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
			<img
				class="w-9 h-9 rounded-full"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
				alt="Robert profile"
			/>
			<div class="space-y-0.5 font-medium dark:text-white text-left">
				<div>Roberta Casas</div>
				<div class="text-sm font-light text-gray-500 dark:text-gray-400">
					Lead designer at Dropbox
				</div>
			</div>
		</figcaption>
	</figure>
	<figure
		class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700"
	>
		<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
			<h3 class="text-lg font-sadiq text-gray-900 dark:text-white">Mindblowing workflow</h3>
			<p class="my-4 font-light">
				Aesthetically, the well designed components are beautiful and will undoubtedly level up your
				next application."
			</p>
		</blockquote>
		<figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
			<img
				class="w-9 h-9 rounded-full"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
				alt="Jese profile"
			/>
			<div class="space-y-0.5 font-medium dark:text-white text-left">
				<div>Jese Leos</div>
				<div class="text-sm font-light text-gray-500 dark:text-gray-400">
					Software Engineer at Facebook
				</div>
			</div>
		</figcaption>
	</figure>
	<figure
		class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700"
	>
		<blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
			<h3 class="text-lg font-sadiq text-gray-900 dark:text-white">Efficient Collaborating</h3>
			<p class="my-4 font-light">
				You have many examples that can be used to create a fast prototype for your team."
			</p>
		</blockquote>
		<figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
			<img
				class="w-9 h-9 rounded-full"
				src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
				alt="joseph profile"
			/>
			<div class="space-y-0.5 font-medium dark:text-white text-left">
				<div>Joseph McFall</div>
				<div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
			</div>
		</figcaption>
	</figure>
</Card>

<div class="max-w-5xl mx-auto mt-20 mb-10">
	<h2 class="mx-5 md:mx-0 font-sadiq text-4xl">Jak to zacząć?</h2>
	<h3 class="mt-5 mx-5 md:mx-0">
		Wyjeżdżając na kurs za naszym pośrednictwem zapłacisz za niego tyle samo, co dokonując
		rezerwacji bezpośrednio w szkole!
	</h3>
</div>

<div class="mx-5 mb-20 max-w-5xl hidden md:block">
	<Timeline>
		{#each options as option}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<h3 class="font-sadiq text-lg">{option.title}</h3>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<p class="mb-10">{option.content}</p>
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
</div>

<div class="mx-5 md:hidden">
	{#each options as option}
		<h3 class="font-sadiq text-lg">{option.title}</h3>
		<p class="mb-10">{option.content}</p>
	{/each}
</div>

<div class="max-w-5xl mx-auto mt-20 mb-10">
	<h2 class="mx-5 md:mx-0 font-sadiq text-4xl">Co na tym zyskam?</h2>
</div>

<div class="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
	<div
		class="border border-gray-200 p-2 h-64 flex flex-col justify-between shadow-lg mx-5 my-5 rounded"
	>
		<img src="/icons8-communication-100.png" alt="comms" class="w-24 mx-auto mt-10" />
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Lepsza komunikacja</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
	</div>
	<div
		class="border border-gray-200 p-2 h-64 flex flex-col justify-between shadow-lg mx-5 my-5 rounded"
	>
		<img src="/icons8-agree-100.png" alt="comms" class="w-24 mx-auto mt-10" />
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Większe zrozumienie</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
	</div>
	<div
		class="border border-gray-200 p-2 h-64 flex flex-col justify-between shadow-lg mx-5 my-5 rounded"
	>
		<img src="/icons8-self-confidence-64.png" alt="comms" class="w-24 mx-auto mt-10" />
		<div class="w-11/12 mx-auto mt-3">
			<h2 class="font-sadiq">Pewność siebie</h2>
			<p>Studia za granica sa lorem ipsum</p>
		</div>
	</div>
</div>

<div class="max-w-5xl mx-auto mt-20 mb-10">
	<h2 class="mx-5 md:mx-0 font-sadiq text-4xl">Doświadczenie godne zaufania</h2>
</div>

<div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2">
	<img src="/maria.avif" alt="maria" class="mx-auto px-5" />
	<div class="mx-5">
		<p class="mb-3">LEC Centre to rodzinna firma, którą stworzyłam z pasji do języków obcych.</p>
		<p class="mb-3">
			Od ponad 30 lat uczę angielskiego. Kiedy na początku lat 90. XX wieku pojechałam na kurs do
			Londynu, poczułam jakie postępy można zrobić mając ciągły kontakt z językiem obcym. Po
			powrocie z tego wyjazdu postanowiłam umożliwić innym skorzystanie z możliwości, jakie daje
			nauka za granicą. Od 1993 roku pomogliśmy setkom Klientów lepiej poznać języki obce, a dzięki
			temu lepiej rozumieć świat.
		</p>
		<p class="mb-3">
			Mam nadzieję, że zainspirujemy cię do nauki języków. Ich znajomość otwiera okno na świat!
		</p>
	</div>
</div>

<Footer />
