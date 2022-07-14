<script>
import { each } from 'svelte/internal';


	import projects from '../data/projects';

</script>

<div class="-mt-40">
	<div class="max-w-screen-lg mx-auto">
		<div class="grid grid-cols-3 gap-x-10 gap-y-5">
			{#each projects as project}
				<a href="#main-layout" class="bg-white flex flex-col justify-between shadow-md border-solid border-1 border-gray-300">
					<div class="px-6 py-4">
						<h1 class="text-xl font-semibold">{project.title}</h1>
						<p class="mt-5 leading-6">{project.description}</p>
					</div>
					<div class="px-6 py-2 border-solid border-t-2 border-gray-300">
						<ul class="flex flex-wrap">
							{#each project.tags as tag}
								<li class="bg-cyan-100 mr-2 mb-2 text-sm py-0.5 px-2">{tag}</li>
							{/each}
						</ul>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>