<template>
  <div>
    <!-- <pre>{{ story }}</pre> -->
    <Header />
    <main>
      <StoryblokComponent v-if="story" :blok="story.content" />

      <ProjectSectionGrid  />

      <section id="about-vision">
        <h2 id="about-vision-title" class="sectionTitle">
          <span class="sectionTitle_outline">Meine </span>
          <span>Vision</span>
        </h2>
        <p id="about-vision-text">
          Film ist eine der emotionalsten Möglichkeiten, Geschichten zu erzählen
          – Geschichten von Menschen, von Projekten, vom Leben… <br />Seit
          meiner Kindheit interessiere ich mich für Kameras, Fotografie und
          Videoproduktion. Waren es früher noch kurze Videos mit einer billigen
          Digitalkamera, kam mit den Jahren immer mehr Passion dazu und ich habe
          mein Wissen und Können in diesen Bereichen, nicht zuletzt durch das
          Multimedia-Production-Studium, konstant erweitert. <br /><br />

          Gegen Ende meiner Jugend kam das Interesse für das Programmieren und
          Webentwicklung dazu. Eine Website ist in der heutigen Zeit der eigene
          gesellschaftliche Auftritt, eine Möglichkeit, sich zu präsentieren und
          anderen zu zeigen, was man tut und kann. <br />
          Mich fasziniert, wie aus wenigen Zeilen Code funktionsfähige Webapps
          entstehen können. <br /><br />

          Diese Fähigkeiten und Mittel einzusetzen, um Geschichten zu erzählen
          und anderen Menschen zu helfen, ihre Geschichten und Projekte zum
          Leben zu erwecken, ist meine grosse Leidenschaft.
        </p>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import ProjectSectionGrid from '~/storyblok/components/ProjectSectionGrid.vue';
import Footer from '~/components/Footer.vue';

const config = useRuntimeConfig();
const story = await useAsyncStoryblok('about', {
  version: config.public.storyblok_version,
  resolve_relations: 'ProjectSection.projectRef',
}); /* Fetch data from Storyblok */
console.log(story.value);
</script>

<style scoped></style>
