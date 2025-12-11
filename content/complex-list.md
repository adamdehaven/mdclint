## This section contains a bunch of lists

- This is a list item.
- This is a list item.
  - This is a CHILD list item.
    - This is a GRANDCHILD list item.
- This is a list item.

::page-section
---
background-image:
  url: https://images.example.com/dog.png
color: red
---
- This is a list item.
- This is a list item.
  - This is a CHILD list item.
    - This is a GRANDCHILD list item.
- This is a list item.

  :::container
  - This is a list item.
  - This is a list item.
  - This is a CHILD list item.
    - This is a GRANDCHILD list item.
  - This is a list item.
  :::

  :::container
  - This is a list item.
  - This is a list item.
    - This is a CHILD list item.
      - This is a GRANDCHILD list item.
  - This is a list item.

  :button[This is nested another level]

    ::::container
    ---
    background-image:
      url: https://images.example.com/dog.png
    color: red
    ---

    - This is a list item.
    - This is a list item.
      - This is a CHILD list item.
        - This is a GRANDCHILD list item.
    - This is a list item.

    This content is below the list.
    ::::

  :icon{name="mdi:github"}

  More outer content.
  :::
::
