<script setup lang="ts">

	const { t, tm, rt } = useI18n();

	type Experience = {
		period: string;
		title: string;
		company: string;
		description: string;
		tags: string[];
	}

	const items = computed(() => {
    const featuresObj = tm('about.experience.items') as Experience[];
    return Object.values(featuresObj).map((value) => ({
        period: rt(value.period),
        title: rt(value.title),
        company: rt(value.company),
        description: rt(value.description),
        tags: Object.values(value.tags).map((tag) => rt(tag)),
    }));
});

</script>
<template>
	<section class="mx-auto max-w-5xl px-6 py-24">
		<div class="grid gap-12 md:grid-cols-2">
			<!-- Left - About -->
			<div>
				<h2 class="text-sm font-semibold uppercase tracking-widest text-primary">
					{{ t('about.title') }}
				</h2>
				<p class="mt-4 leading-relaxed text-muted-foreground">
					{{ t('about.description') }}
				</p>
				<p class="mt-4 leading-relaxed text-muted-foreground">
					{{ t('about.expect') }}
				</p>
			</div>

			<!-- Right - Experience -->
			<div>
				<h2 class="text-sm font-semibold uppercase tracking-widest text-primary">
					{{ t('about.experience.title') }}
				</h2>
				<div class="mt-4 flex flex-col gap-6 fade-in-left">
					<ExperienceItem v-for="(experience, idx) in items" :key="idx" :period="experience.period"
						:title="experience.title" :company="experience.company" :description="experience.description"
						:tags="experience.tags" />
				</div>
			</div>
		</div>
	</section>
</template>