import { Command } from 'commander'
import { convertRGB } from './lib/converters.js'
import * as pixels from './lib/pixel.js'

const program = new Command()

program.version('1.0.0').description('The Photoship CLI')

// Remove red
program
  .command('remove-red <filepath>')
  .description('Remove red from the image')
  .action(filepath => convertRGB(filepath, pixels.removeRed))

// Remove green
program
  .command('remove-green <filepath>')
  .description('Remove red from the image')
  .action(filepath => convertRGB(filepath, pixels.removeGreen))

// Remove blue
program
  .command('remove-blue <filepath>')
  .description('Remove red from the image')
  .action(filepath => convertRGB(filepath, pixels.removeBlue))

// Replace red
program
  .command('replace-red <filepath> <r>')
  .description('Replace the R value in each pixel')
  .action((filepath, r) =>
    convertRGB(filepath, rgb => pixels.replaceRed(rgb, r))
  )

// Replace green
program
  .command('replace-green <filepath> <g>')
  .description('Replace the G value in each pixel')
  .action((filepath, g) =>
    convertRGB(filepath, rgb => pixels.replaceGreen(rgb, g))
  )

// Replace blue
program
  .command('replace-blue <filepath> <b>')
  .description('Replace the B value in each pixel')
  .action((filepath, b) =>
    convertRGB(filepath, rgb => pixels.replaceBlue(rgb, b))
  )

// Grayscale
program
  .command('grayscale <filepath>')
  .description('Make the image grayscale')
  .action(filepath => convertRGB(filepath, pixels.grayScale))

// Invert
program
  .command('invert <filepath>')
  .description('Invert the colours in the image')
  .action(filepath => convertRGB(filepath, pixels.invert))

program.parse(process.argv)
