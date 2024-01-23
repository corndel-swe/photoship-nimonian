# Photoship

This project is all about manipulating images. **Photoship** is a revolutionary
image processing tool which allows anyone to edit images in the most astounding
ways!

- Flip the image? No problem!
- Make it black and white? Easy!
- Use AI to give everyone facial tattoos? Planned for a future release!

## Images as arrays

In this project, images are represented as arrays. Every block of four elements
represents the RGBA (red, blue, green, alpha) value of a single pixel in the
image.

```js
const img = [120, 50, 20, 255, 116, 154, 200, 100]
```

The above image has exactly two pixels, one with RGBA of `(120, 50, 20, 255)`
and the other with RGBA of `(116, 154, 200, 100)`.

This library works by messing around with the pixels to achieve various effects.

## Using the command line

As you progress, the software should start working as intended!

E.g. once you complete the `removeRed(rgb)` function, you should be able to run

```bash
node cli.js remove-red cat.jpg
```

and go to the `img` directory to see the output.

Feel free to add your own images to the `img` directory and have a play around.

## Next steps

Head over to `TODO.md` and get cracking :smile:
