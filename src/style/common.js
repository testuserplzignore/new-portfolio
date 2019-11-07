const common = {};

common.absoluteCentered = `
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
`;

common.absoluteVerticalAlign = `
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
`

common.absoluteMiddle = `
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

common.responsiveSquares = (size) => `
  width: ${size};
  height: 0;
  padding-bottom: ${size};
`

export default common