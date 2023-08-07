export default (meta: any) => {
    return [
        {
            name: 'author',
            content: meta && meta.author,
        },
        {
            name: 'publisher',
            content: meta && meta.author,
        },
        {
            name: 'apple-mobile-web-app-title',
            content: meta && meta.title,
        },

        // Facebook & LinkedIn
        // {
        //     hid: 'og:title',
        //     name: 'og:title',
        //     content: meta && meta.title,
        // },
        // {
        //     hid: 'og:description',
        //     name: 'og:description',
        //     content: meta && meta.description,
        // },
        {
            hid: 'og:type',
            name: 'og:type',
            content: 'website',
        },
        {
            hid: 'og:url',
            name: 'og:url',
            content: meta && meta.url,
        },
        {
            hid: 'og:image',
            name: 'og:image',
            content: meta && meta.image,
        },
        {
            hid: 'og:image:width',
            name: 'og:image:width',
            content: meta && meta.img_size?.width,
        },
        {
            hid: 'og:image:height',
            name: 'og:image:height',
            content: meta && meta.img_size?.height,
        },
        {
            hid: 'og:locale',
            name: 'og:locale',
            content: meta && meta.locale,
        },
        {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: meta && meta.title,
        },
    ]
}
