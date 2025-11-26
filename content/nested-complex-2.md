::tabs
  :::tabs-item{.my-5 icon="i-lucide-eye" label="Preview"}
    ::::steps{level="4"}
    #### Start a fresh new project

    ```bash [Terminal]
    npx nuxi init -t github:nuxt-ui-pro/docus
    ```

    #### Run docus CLI to run your dev server

    ```bash [Terminal]
    docus dev
    ```
    ::::
  :::
::

::tabs
  :::tabs-item{.my-5 icon="i-lucide-eye" label="Preview"}
    ::::collapsible
      | Prop    | Default   | Type     |
      | ------- | --------- | -------- |
      | `name`  |           | `string` |
      | `size`  | `md`      | `string` |
      | `color` | `neutral` | `string` |
    ::::
  :::

  :::tabs-item{icon="i-lucide-code" label="Code"}
  ```mdc
  ::collapsible
  
  | Prop    | Default   | Type                     |
  |---------|-----------|--------------------------|
  | `name`  |           | `string`{lang="ts-type"} |
  | `size`  | `md`      | `string`{lang="ts-type"} |
  | `color` | `neutral` | `string`{lang="ts-type"} |
  
  ::
  ```
  :::
::
