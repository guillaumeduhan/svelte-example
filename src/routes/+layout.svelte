<script context="module">
  import { loadTranslations } from '$lib/i18n/index.js';
  
  /** @type {import('@sveltejs/kit').Load} */
  async function load ({ url }) {
    const { pathname } = url;

    const lang = 'en';

    const route = pathname.replace(new RegExp(`^/${lang}`), '');

    await loadTranslations(lang, route);

    return { stuff: { route, lang } };
  }
</script>

<slot></slot> 