<script>
	import { urlFor } from '../../lib/utils/image';

	export let data;
</script>

<div class="bg-[#FFFDF5] text-black grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
	{#if data.posts.length}
		{#each data.posts as post}
			<a class="" href={`/szkoly-srednie/${post.slug.current}`}>
				<div class="relative grid grid-cols-1 mx-2">
					<h3 class="text-xl underline mb-3 md:h-20">
						{post.nazwa}
					</h3>
					<img
						class=""
						src={urlFor(post.logo).width(400).height(400).format('webp').url()}
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
