<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@nextbnb/common](./common.md) &gt; [isStay](./common.isstay.md)

## isStay() function

Checks whether a given value is an [IStay](./common.istay.md)

<b>Signature:</b>

```typescript
export declare function isStay(arg: any): arg is IStay;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  arg | any | Value to be evaluated |

<b>Returns:</b>

arg is [IStay](./common.istay.md)

## Remarks

Id may switch to a string later on

## Example

Here's an example of how to use this guard

```ts
const stay = { id: '1', title: 'Cozy fireplace condo', imgUrl: ['www.imgUrl.com/1', ['www.imgUrl.com/2']] }
isStay(stay); // true

```

