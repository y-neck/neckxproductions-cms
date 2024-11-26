<template>
  <Header />
  <main>
    <h1 class="mt-8">
      <span class="sectionTitle sectionTitle_outline">Impress</span
      ><span class="sectionTitle">um</span>
    </h1>
    <section class="impressum_section flex max-md:flex-col gap-4">
      <div id="impressum-text" class="flex flex-col gap-8">
        <p class="flex flex-col gap-2">
          <!-- Gap between address lines -->
          <b>neckXproductions</b><br />
          Yannick Spriessler<br />Breitenstrasse 26<br />
          4416 Bubendorf <br />
          Schweiz
          <a
            href="mailto:yannick@neckxproductions.ch"
            class="text-decoration-none hover:underline hover:decoration-accent"
            >yannick@neckXproductions.ch</a
          >
        </p>
        <p>UID: CHE-306.629.439</p>
      </div>
    </section>
    <section class="disclaimer_section flex flex-col gap-4">
      <p id="disclaimer" loading="lazy">
        <strong>Haftungsausschluss</strong><br />
        Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit,
        Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.<br />Haftungsansprüche
        gegen den Autor wegen Schäden materieller oder immaterieller Art, die
        aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
        Informationen, durch Missbrauch der Verbindung oder durch technische
        Störungen entstanden sind, werden ausgeschlossen.<br /><br />Alle
        Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor,
        Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu
        verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise
        oder endgültig einzustellen.<br /><br /><strong
          >Haftungsausschluss für Inhalte und Links</strong
        ><br />Verweise und Links auf Webseiten Dritter liegen ausserhalb
        unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für
        solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher
        Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.<br /><br /><strong
          >Urheberrechtserklärung</strong
        ><br />Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
        oder anderen Dateien auf dieser Website, gehören ausschliesslich
        neckXproductions, Yannick Spriessler oder den speziell genannten
        Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die
        schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
      </p>
      <p>Impressum erstellt mit brainbox.swiss</p>
    </section>
  </main>
  <Footer class="mt-vh-100 sticky" />
</template>

<script setup lang="ts">
useSeoMeta({
  title: ' impressum // neckXproductions',
  ogTitle: 'Portfolio' /* Title of page without branding */,
  ogSiteName: 'neckXproductions' /* Overall site name */,
  ogType: 'website' /* 'website' | 'article' | 'book' | 'profile' */,
  description: 'Impressum. Gibt Interessanteres.',
  ogDescription: 'Impressum. Gibt Interessanteres.',
  creator: '©neckXproductions',
  robots: 'none',
  ogImage:
    'https://a.storyblok.com/f/310287/1850x1668/d7b1985a56/x-icon.webp' /* Image of page when sharing */,
}); /* https://nuxt.com/docs/api/composables/use-seo-meta */

import Header from '~/components/Header.vue';
import Footer from '~/components/LazyFooter.vue';
</script>

<style scoped></style>
