export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b320cd3ef5f3217d3dd2a4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-v37copk6',
                  apiId: '875a7a26-0f9b-47e5-bd20-df25eff43a0b'
                },
                {
                  buildHookId: '62b320cd31e90700833b4999',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-caspga9s',
                  apiId: '821b011e-5b97-4993-9536-037cb4a26a42'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/moenni-ch/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-caspga9s.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
