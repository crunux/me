<script setup lang="ts">

	useSeoMeta({ title: 'Home' });
	useScrollAnimation();

</script>
<template>
	<div>
		<!-- Hero Section -->
		<HeroSection />

		<!-- About Section-->
		<AboutSection />

		<!-- Projects Preview Section -->
		 <ProjectsSection />

		<!-- Stack Section -->
		<StackTechSection />

		<!-- Blog Preview Section -->
		<BlogSection/>

		<!-- Contact Section -->
		<ContactSection/>
	</div>
</template>
