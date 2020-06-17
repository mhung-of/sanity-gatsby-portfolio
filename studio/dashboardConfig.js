export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5eea367e53d170217a4b6b05',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qkm8s6b9',
                  apiId: 'f30a1754-d5a5-4679-81ec-23953618c684'
                },
                {
                  buildHookId: '5eea367ee35dafdeaca5a3f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-vwd4svzm',
                  apiId: '0f369657-297d-42aa-b05e-42e4ae4d4112'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mhung-of/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-vwd4svzm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
