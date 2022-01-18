interface Sites {
  title: string
  subtitle?: string
  lang?: string
  descr?: string
  author: {
    name: string
  } & {
    [key: string]: string
  }
  url: string
  themeColor?: string
  since?: string
}

export const site: Sites = {
  title: "Stefan's Blog",
  subtitle: "Anything Web-Dev",
  lang: 'en-US',
  descr: 'Powered by SvelteKit/Urara',
  author: {
    name: 'Stefan Watt',
    avatar: 'https://comentic.sirv.com/Images/muetze.jpg',
    status: '🟢',
    bio: 'Svelte Enthusiast | DIY Ergo-Keyboard Manufacturer'
  },
  url: import.meta.env.URARA_SITE_URL ?? 'https://example.com',
  themeColor: '#3D4451'
}
