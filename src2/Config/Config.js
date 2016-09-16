import color from 'color';

export const Colors = {
  // mainColor: '#1d1e25',
  mainColor: '#272a2a',
  toolbarColor: color(this.mainColor).darken(0.14).rgbaString(),
  backgroundColor: color(this.mainColor).lighten(0.3).rgbaString(),
  // accentColor: '#fc0053',
  accentColor: '#00fcc7',
  textColor: '#e7e7e7',
  notePreviewBackgroundColor: '#f0f0f0',
  notePreviewTextColor: '#000',
};

export const Dimensions = {
  toolbarSize: 64
}