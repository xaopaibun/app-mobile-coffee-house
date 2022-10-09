## Project structure

```
.
├── public
└── src
    ├── assets                  Static assets such as images, svgs, company logo, etc.
    │    └── images
    ├── components              Shared/reusable components
    ├── configs
    ├── constant
    ├── containers              Shared/reusable containers
    ├── hooks
    ├── libs
    ├── navigations
    ├── pages
    ├── providers
    ├── services
    ├── store                   Redux (store, redux)
    ├── styles                  Global styles
    └── types
```

## Available Scripts

In the project directory, you can run:

### Start application

```shell
yarn start
```

### Start storybook

```shell
yarn storybook
```

### Generate new component

```shell
yarn gen:c ComponentName [--f FolderName]
```

### Generate new container

```shell
yarn gen:ct ContanierName [--f FolderName]
```

### Generate new page

```shell
yarn gen:p PageName [--f FolderName]
```

### Generate new service

```shell
yarn gen:s ServiceName [--f FolderName]
```
