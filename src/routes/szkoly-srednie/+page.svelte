<script>
	import Footer from '../../lib/footer.svelte';
	import Navbarblack from '../../lib/navbarblack.svelte';

	import { urlFor } from '../../lib/utils/image';

	export let data;
</script>

<Navbarblack />

<div class=" text-black grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
	{#if data.posts.length}
		{#each data.posts as post}
			<a
				class="border border-gray-200 p-4 mx-5 md:mx-0"
				href={`/szkoly-srednie/${post.slug.current}`}
			>
				<div class="relative grid grid-cols-1 mx-2">
					<h3 class="text-xl font-sadiq mb-3 md:h-20">
						{post.nazwa}
					</h3>
					<img
						class="object-contain h-32 mx-auto"
						src={urlFor(post.logo).format('webp').url()}
						alt="Cover image for {post.nazwa}"
						rel="preload"
						as="image"
					/>

					<p class="mt-3 mb-6">{post.subtitle1}</p>
				</div>
			</a>
		{/each}
	{:else}
		<p>no posts available</p>
	{/if}
</div>

<Footer />
