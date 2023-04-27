# e-wrapper



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description | Type          | Default     |
| ------------- | --------- | ----------- | ------------- | ----------- |
| `apikey`      | `apikey`  |             | `string`      | `undefined` |
| `tags`        | --        |             | `string[]`    | `[]`        |
| `videoPlayer` | --        |             | `HTMLElement` | `undefined` |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `showTags` |             | `CustomEvent<any>` |


## Methods

### `showTag(e: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [e-tag](../e-tag)

### Graph
```mermaid
graph TD;
  e-wrapper --> e-tag
  style e-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
