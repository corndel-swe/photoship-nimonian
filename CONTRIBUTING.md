# Contributing

Before any developer works on this project, they need to be able to work with
strings and arrays. We have provided a deep-dive on these concepts.

## Deep dive

To test your code, run `npm test` in the terminal.

Please make sure to commit and push early and often.

- [ ] Read the docs on [working with arrays]()
- [ ] Complete `exercises > 01.js`
- [ ] Complete `exercises > 02.js`

- [ ] Read the docs on [array methods]()
- [ ] Complete `exercises > 03.js`
- [ ] Complete `exercises > 04.js`

- [ ] Read the docs on [working with strings]()
- [ ] Complete `exercises > 05.js`
- [ ] Complete `exercises > 06.js`

## Workshop

With the deep dive completed, you're ready to work on Photoship! This is quite a
mature project, but we need your help to finish it off.

### Images as arrays

Images in Photoship are represented as arrays of pixels. Each block of 4
elements is the RGBA (red, blue, green, alpha) of a pixel.

So, for example,

```js
const img = [120, 30 45, 255, 13, 58, 39, 100]
```

is an image with two pixels, one with an RGBA of `[120, 30, 45, 255]` and the
other with an RGBA of `[13, 58, 39, 100]`.

### Working with pixels

Most of the image processing pipeline has been completed, but if you take a look
in `lib/pixels.js` you will find lots of functions which manipulate the RGB
value of individual pixels. This is where you come in! We need you to complete
the RGB manipulation functions in `lib/pixels.js`.
