export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d3312ec3c34eba5feb34148',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tyqjt67u',
                  apiId: 'e53adf6d-90fc-406a-88da-d755b1d69eeb'
                },
                {
                  buildHookId: '5d3312ecf15a5f0d26164754',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-v52g46fx',
                  apiId: '044bc89e-df20-4428-950f-2314f1a073f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/angelosv/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-v52g46fx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
