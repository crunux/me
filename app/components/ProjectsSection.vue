<script setup lang="ts">
  import type { Project } from '~/types';

  interface Projects {
		projects: Project[];
	}
	const { t, locale } = useI18n();

  const projectsQuery = gql`
			query getProjects($locale: [Locale!]!) {
				projects(locales: $locale, orderBy: publishedAt_DESC, first: 2) {
					github
					id
					image {
						url(
							transformation: {
								image: { resize: { height: 400, width: 500, fit: clip } }
							}
						)
					}
					title
					preview
					description
					techs {
						url(
							transformation: {
								image: { resize: { height: 200, width: 200, fit: clip } }
							}
						)
					}
				}
			}
		`;

	const { data: projectsData } = await useAsyncQuery<Projects>(projectsQuery, {
		locale: [locale.value],
	});

</script>
<template>
  <section class="mx-auto max-w-5xl px-6 py-24 ">
			<div class="grid gap-12">
				<div class="fade-in">
					<h2 class="text-sm font-semibold uppercase tracking-widest text-primary ">
						{{ t('projects.title') }}
					</h2>
					<p class="mt-4 leading-relaxed text-muted-foreground">
						{{ t('projects.description') }}
					</p>
					<!-- <p class="leading-relaxed text-muted-foreground">
						currently learning and focusing on diferents environments.
					</p> -->
				</div>
				<div>
					<div v-if="projectsData?.projects" class="grid gap-4 md:grid-cols-2">
						<CardProject v-for="project in projectsData?.projects" :key="project.tittle" :project="project" />
					</div>
					<div class="text-center mt-10">
						<NuxtLink to="/projects"
							class="rounded-md border border-primary bg-primary/10 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
							{{ locale === 'es' ? "Ver todos los proyectos" : "View All Projects" }}
						</NuxtLink>
					</div>
				</div>
			</div>
		</section>
</template>