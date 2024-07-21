export const defaultDocumentNodeResolver = (S) =>
  S.list()
    .title('CMS')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Home Page')
                .child(
                  S.editor()
                    .title('Home Page')
                    .schemaType('pageType')
                    .documentId('homePage'),
                ),
              S.listItem()
                .title('All')
                .child(
                  // Dynamic listing of all pages
                  S.documentTypeList('pageType')
                    .title('All Pages')
                    // .filter('_type == $type && !(_id in ["homePage", "homePage2"])')
                    .filter('_type == $type')
                    .params({ type: 'pageType' }),
                ),
            ]),
        ),
      S.listItem()
        .title('Settings')
        .icon(() => '⚙️')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
              .title('Site Settings')
              .child(
                S.editor()
                  .title('Site Settings')
                  .schemaType('settingsType')
                  .documentId('siteSettings'),
              ),
              S.listItem()
                .title('Menu')
                .child(
                  S.documentTypeList('menuType')
                    .title('Menu')
                    .filter('_type == $type')
                    .params({ type: 'menuType' }),
                ),
            ]),
        )
    ]);